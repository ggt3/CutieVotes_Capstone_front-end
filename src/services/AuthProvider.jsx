import { useContext, createContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(sessionStorage.getItem("user") || null);
  const [token, setToken] = useState(sessionStorage.getItem("token") || null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const loginAction = async ({username,password}) => {
    try {
      console.log("loginAction() - data", username,password);
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, {
        username,
        password,
      });
      const res = await response.data;
      console.log(res);
      if (res) { //login passes
        setUser(res.username);
        setToken(res.token);
        sessionStorage.setItem("user", res.username)
        sessionStorage.setItem("token", res.token);
        navigate(from, { replace: true });
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
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  // const getToken = () => {
  //   const tokenString = sessionStorage.getItem("token");
  //   const userToken = JSON.parse(tokenString);
  //   return userToken?.token;
  // };

  return (
    <AuthContext.Provider
      value={{ token, user, loginAction, logout}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
