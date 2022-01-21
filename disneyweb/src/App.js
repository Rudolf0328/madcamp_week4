import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
=======

import InfoPage from './InfoPage/main'

>>>>>>> 26c2c0045021241440291c80865c71daf3c255d1
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
      </Routes>
    </div>
    </Router>
  );
}

export default App;