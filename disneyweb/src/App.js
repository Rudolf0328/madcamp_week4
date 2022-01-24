import logo from './logo.svg';
// import './App.css';

import InfoPage from './InfoPage/main'

import MainPage from './MainPage/main';
import NeedleDrop from './needledrop/needledrop';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
// import Header from './Header/main';
import Sec6 from './sec6/sec6';
import Wheel from './MusicPage/Wheel';
import Sec5 from './sec5/sec5';
import Dance from './Dance/dance'
// import { Card } from '@material-ui/core';
// import Card from './Card/card'
// import Component from './sec6/sec6';

function App() {
  return (
    <Router>
    {/* <div className="App"> */}
      <Routes>
     <Route path = "/" element = {<MainPage/>} />
      <Route path = "/home" element = {<NeedleDrop/>} />
      {/* <Route path = "/header" element = {<Header/>} />  */}
      <Route path = "/info" element = {<InfoPage/>} />
      <Route path = "/test" element = {<Sec6/>} />
      <Route path = "/music" element = {<Wheel/>} />
      <Route path = "/test2" element = {<Sec5/>} />
      <Route path = "/test3" element = {<Dance/>} />
      {/* <Route path = "/card" element = {<Card/>} /> */}



      </Routes>
    {/* </div> */}
    </Router>
  );
}

export default App;