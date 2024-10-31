import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import VotePage from "./pages/VotePage";
import Login from "./components/Login";
import TopPage from "./pages/TopPage";
import AuthProvider from "./services/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import FavoritesPage from "./pages/FavoritesPage";


function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/vote" element={<VotePage />} />
            <Route path="/top" element={<TopPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
