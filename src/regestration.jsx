import { useState } from "react"
import {axios} from 'react'


function Reg(){
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[address,setAddress]=useState()
    const[password,setPassword]=useState()

    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3002/register",{name,email,address,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))

       
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                name:<input  type="text" onChange={(e)=>setName(e.target.value)} name="name" placeholder="name"/><br></br>
                email:<input  type="email"  onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="email"/><br></br>
                address:<input  type="text"  onChange={(e)=>setAddress(e.target.value)} name="address" placeholder="address"/><br></br>
                password:<input type="password"  onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="password"/><br></br>
                <button type="submit">submit</button>
            </form>
<a href="login.jsx">login</a>

        </div>
    )
}
export default Reg