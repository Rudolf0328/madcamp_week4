import logo from './logo.svg';
import './App.css';

import InfoPage from './InfoPage/main'

import MainPage from './MainPage/main';
import Introduce from './MainPage/main';
import NeedleDrop from './needledrop/needledrop';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Header from './Header/main';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path = "/" element = {<MainPage/>} />
      <Route path = "/home" element = {<NeedleDrop/>} />
      <Route path = "/header" element = {<Header/>} />
      <Route path = "/info" element = {<InfoPage/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;