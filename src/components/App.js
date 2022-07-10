import HomePage from "./HomePage/HomePage";
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import './App.css';
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
const App = () => {
  return (
    <HashRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />}/>
      <Route path="home" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  </HashRouter>
  )
}

export default App;