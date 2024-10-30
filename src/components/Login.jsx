import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useAuth } from "../services/AuthProvider";

export default function Login() {
    const auth = useAuth();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const [loginCreds, setLoginCreds] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginCreds({ ...loginCreds, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //handle login auth
    console.log(username, password)
    if (username !== "" && password !== "") {
      const tokenUser = await auth.loginAction({username, password});
      return;
    }
    alert("pleae provide a valid username and password");
   



    console.log("login form submit");
  };
  return (
    <Form className="px-4 py-3" onSubmit={handleSubmit}>
      <div>
        <label>
          <p>Username</p>{" "}
        </label>
        <input className="form-control" type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
      </div>
      <div>
        <label>
          <p>Password</p>
        </label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </Form>
  );
}
