import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/main';
import Introduce from './MainPage/main';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Header from './Header/main';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path = "/" element = {<MainPage/>} />
      <Route path = "/home" element = {<MainPage/>} />
      <Route path = "/header" element = {<Header/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;