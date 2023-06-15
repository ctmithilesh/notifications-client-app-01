import axios from "axios"
import { apis } from "../Data/endpoints"

export const submitEmail = (to,subject,message)=>{
    axios.post(apis.sendEmail,{to, subject, message })
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}