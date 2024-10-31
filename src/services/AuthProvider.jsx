import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem("token") || null);
  const navigate = useNavigate();

  const loginAction = async ({username,password}) => {
    try {
      console.log("loginAction() - data", username,password);
      const response = await axios.post("http://localhost:4000/login", {
        username,
        password,
      });
      const res = await response.data;
      console.log(res);
      if (res) { //login passes
        setUser(res.username);
        setToken(res.token);
        sessionStorage.setItem("token", res.token);
        navigate("/");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    console.log("logging out");
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  return (
    <AuthContext.Provider
      value={{ token, user, loginAction, logout, getToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
