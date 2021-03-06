import axios from "axios"

export default class EmployerService{
    getEmployer(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    getEmployerById(id){
        return axios.get("http://localhost:8080/api/employers/getById?id="+id)
    }
}