import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import JobAdvertisementService from '../services/jobAdvertisementService'
import CityService from "../services/CityService";
import JobPositionService from "../services/JobPositionService";
import { Form, TextArea } from 'semantic-ui-react';

export default function JobAdvertisementCreate() {
    
    let jobAdvertisementService = new JobAdvertisementService();

    const JobAdvertisementAddSchema = Yup.object().shape({
        applicationDeadline:Yup.date().nullable().required("This field is required"),
        jobDescription: Yup.string().required("This field is required"),
        jobPositionId:Yup.string().required("This field is required"),
        positionAmount:Yup.number().min(0,"Less than 0 cannot be entered").required("This field is required"),
        cityId:Yup.string().required("This field is required"),
        maxSalary:Yup.number().min(0,"Less than 0 cannot be entered").required("This field is required"),
        minSalary:Yup.number().min(0,"Less than 0 cannot be entered").required("This field is required"),
        releaseDate:Yup.date().nullable().required("This field is required")

    });


    const formik = useFormik({
        initialValues:{
            jobDescription:"",
            jobPositionId:"",//*
            positionAmount:"",
            cityId:"",//*
            maxSalary:"",
            minSalary:"",
            releaseDate:"",
            applicationDeadline:"",

               
        },
        validationSchema:JobAdvertisementAddSchema,
        onSubmit:(values)=>{
            jobAdvertisementService.addJobAdvertisement(values).then(result=> console.log(result.data.data));
            alert("Job posting has been added and will be listed after the staff's approval");
        }
    })

    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);

useEffect(() => {
   let cityService = new CityService();
   let jobPositionService = new JobPositionService();

}, []);

const jobPositionOption = jobPositions.map((jobPosition,index)=>({
    key:index,
    text:jobPosition.position,
    value:jobPosition.id,

}));

const cityOption = cities.map((city,index)=>({
    key:index,
    text:city.cityName,
    value:city.id,

}));

const handleChangeSemantic = (value,fieldName) =>{
    formik.setFieldValue(fieldName,value);
}


    return (
        <div>
            <Form>
    <Form.Field>
      <label>Description</label>
      <input placeholder='First Name'
      error={Boolean(formik.errors.jobDescription).toString()}
      value={formik.values.jobDescription}
      name="jobDescription"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
     />
      {formik.errors.jobDescription && formik.touched.jobDescription && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.jobDescription}
                  </div>
                )}
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name'/>
    </Form.Field>
    
    <Form.Field>
              <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>

  </Form>
        </div>
    )
}
