import { useState } from "react"
import {axios} from 'react'

function Log(){
 
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3002/log",{email,password})
        .then(result =>{
            console.log(result)
        if(result.data=="sucess"){
            console.log("sucess")
        }
    
    }) 
        .catch(err => console.log(err))

    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                email:<input  type="email"  onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="email"/><br></br>
                password:<input type="password"  onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="password"/><br></br>
                <button type="submit">submit</button>
            </form>

        </div>
    )
}
export default Log