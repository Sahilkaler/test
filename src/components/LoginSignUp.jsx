import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function LoginSignUp() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>


        </div>
    )
}

export default LoginSignUp
//   return (
//     <div className='container'>
//         <div className="header">
//             <div className="text">{action}</div>
//             <div className="underline"></div>                     
//         </div> 
//         <div className="inputs">
//             {action==="Login"?<div></div>:<div className="input">
//                 <input type="text" placeholder='Name' />
//             </div>}

//             <div className="input">
//                 <input type="email" placeholder='Email' />
//             </div> 
//             <div className="input">
//                 <input type="password" placeholder='Password'/>
//             </div>
//             {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password?<span>Click Here</span></div>}
//             <div className="submit-container">
//                 <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//                 <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
//             </div> 
//         </div>
//     </div>
//   )
// }
