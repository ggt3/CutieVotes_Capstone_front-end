import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const [login,setLogin] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e)=> {
        setLogin({...login, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //handle login auth
        navigate('/', { replace: true })
        console.log("login form submit")
    }
    return(
        <form onSubmit ={handleSubmit}>
          <label> 
            <p>Username</p>
            <input type="text" onChange={handleChange}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={handleChange}/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )

}
