import logo from './logo.svg';
// import './App.css';

import InfoPage from './InfoPage/main'

// import MainPage from './MainPage/main';
import NeedleDrop from './needledrop/needledrop';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Header from './Header/main';
import Sec6 from './sec6/sec6';
import Wheel from './MusicPage/Wheel';
import Sec5 from './sec5/sec5';
import Dance from './Dance/dance'
import Card from './Card/card'
// import Bingbing from './bingbing/bingbing';
// import Bingbing2 from './bingbing2/bingbing2';
import Bingbing3 from './bingbing3/bingbing3';
// import Bingbing4 from './bingbing4/bingbing4';



function App() {
  return (
    <Router>
    {/* <div className="App"> */}
      <Routes>
     {/* <Route path = "/" element = {<MainPage/>} /> */}
       <Route path = "/home" element = {<NeedleDrop/>} /> 
       <Route path = "/header" element = {<Header/>} /> 
      <Route path = "/info" element = {<InfoPage/>} />
      <Route path = "/test" element = {<Sec6/>} /> 
       <Route path = "/music" element = {<Wheel/>} />
       <Route path = "/test2" element = {<Sec5/>} />
      <Route path = "/test3" element = {<Dance/>} /> 
       <Route path = "/card" element = {<Card/>} />
       {/* <Route path = "/bingbing" element = {<Bingbing/>} /> */}
       {/* <Route path = "/bingbing2" element = {<Bingbing2/>} /> */}
       <Route path = "/bingbing3" element = {<Bingbing3/>} />
       {/* <Route path = "/bingbing4" element = {<Bingbing4/>} /> */}








      </Routes>
    {/* </div> */}
    </Router>
  );
}

export default App;