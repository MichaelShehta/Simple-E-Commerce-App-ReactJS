import React from 'react';
import { useState } from 'react';

  
    const Login = () => {
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
    // HANDLERS
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password); 
    };

    // RENDER
    return ( 
        <form className="mt-5" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onKeyUp={(e) => setEmail(e.target.value)}  type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onKeyUp={(e) => setPassword(e.target.value)}  type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
     );
    }
 
export default Login;