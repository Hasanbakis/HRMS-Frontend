import axios from "axios"

export default class JobAdvertisementService{
    getJobAdvertisement(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getDataBySortedAsc")
    }

    getJobAdvertisementByIdAndStatusTrue(id){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getById?id="+id)
    }

    addJobAdvertisement(values){
        return axios.post("http://localhost:8080/api/jobAdvertisement/add",values)
    }
}