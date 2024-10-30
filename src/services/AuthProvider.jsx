import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");
  const navigate = useNavigate();
  
  const loginAction = async (data) => {
    try {
      console.log("data", data)
      const response = await axios.post("http://localhost:4000/login", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.data;
      console.log(res)
      if (res) {
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

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  const getToken = () => {
    const tokenString = sessionStorage.getItem('token')
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }
  
  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
