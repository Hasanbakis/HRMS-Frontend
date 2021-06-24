import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import JobAdvertisementService from '../services/jobAdvertisementService'
import CityService from "../services/CityService";
import JobPositionService from "../services/JobPositionService";
import { Button, Card, Dropdown, Form, Grid, Input, TextArea } from 'semantic-ui-react';

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

   cityService.getCity().then((result)=>setCities(result.data.data));
   jobPositionService.getJobPosition().then((result)=> setJobPositions(result.data.data))

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
          <Card fluid>
          <Card.Content header='Add Job' />
          <Card.Content>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Field style={{marginBottom: "1rem"}}>
                <label>Job Position</label>
                <Dropdown
                clearable
                item
                placeholder="Example: Farmer"
                search
                selection
                onChange={(event,data)=>handleChangeSemantic(data.value,"jobPositionId")}
                onBlur={formik.onBlur}
                id="jobPositionId"
                value={formik.values.jobPositionId}
                options={jobPositionOption}
                />
                {formik.errors.jobPositionId && formik.touched.jobPositionId &&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.jobPositionId}
                  </div>
                )}

              </Form.Field>
              <Form.Field >
                <label>City</label>
                <Dropdown
                clearable
                item
                placeholder="Example: İzmir"
                search
                selection
                onChange={(event,data)=>handleChangeSemantic(data.value,"cityId")}
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={cityOption}
                />
                {formik.errors.cityId && formik.touched.cityId &&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.cityId}
                  </div>
                )}
              </Form.Field>

              
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Minimum salary range</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Min salary"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minSalary}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Maximum salary range</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Max salary"
                  value={formik.values.maxSalary}
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxSalary}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>


              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Number of positions</label>
                <Input
                  style={{ width: "100%" }}
                  id="positionAmount"
                  name="positionAmount"
                  error={Boolean(formik.errors.positionAmount)}
                  onChange={formik.handleChange}
                  value={formik.values.positionAmount}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Number of open positions"
                />
                {formik.errors.positionAmount && formik.touched.positionAmount && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.positionAmount}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Deadline</label>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.applicationDeadline)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "applicationDeadline")
                  }
                  value={formik.values.applicationDeadline}
                  onBlur={formik.handleBlur}
                  name="applicationDeadline"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.applicationDeadline}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>






    <Form.Field>
      <label>Description</label>
      <input placeholder=''
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
    <Button animated='fade'  
    positive
    type="submit"
    style={{ marginLeft: "20px" }}>
      <Button.Content visible>Add</Button.Content>
      <Button.Content hidden>Add</Button.Content>
    </Button>

  </Form>
  
  </Card.Content>
  </Card>
        </div>
    )
}
