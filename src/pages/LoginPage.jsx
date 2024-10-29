import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function LoginPage() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //handle login auth
    navigate("/", { replace: true });
    console.log("login form submit");
  };
  return (
    <Form className="px-4 py-3" onSubmit={handleSubmit}>
      <div>
        <label>
          <p>Username</p>{" "}
        </label>
        <input className="form-control" type="text" onChange={handleChange} />
      </div>
      <div>
        <label>
          <p>Password</p>
        </label>
        <input
          className="form-control"
          type="password"
          onChange={handleChange}
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
