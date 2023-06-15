import axios from "axios"

const submitEmail = ()=>{
    axios.post('')
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}