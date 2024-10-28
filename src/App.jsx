import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import VotePage from './pages/VotePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
