import logo from './logo.svg';
// import './App.css';

import InfoPage from './InfoPage/main'

// import MainPage from './MainPage/main';
import NeedleDrop from './needledrop/needledrop';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
// import Header from './Header/main';
import Sec6 from './sec6/sec6';
import Wheel from './MusicPage/Wheel';
import Sec5 from './sec5/sec5';
import Dance from './Dance/dance'
// import Carousel from './MusicPage/Carousel';
import MusicPage from './MusicPage/MusicPage';
// import Component from './sec6/sec6';

function App() {
  return (
    <Router>
    {/* <div className="App"> */}
      <Routes>
     {/* <Route path = "/" element = {<MainPage/>} /> */}
      <Route path = "/home" element = {<NeedleDrop/>} />
      {/* <Route path = "/header" element = {<Header/>} />  */}
      <Route path = "/info" element = {<InfoPage/>} />
      <Route path = "/test" element = {<Sec6/>} />

      <Route path = "/music" element = {<Wheel/>} />
      {/* <Route path = "/carousel" element = {<Carousel/>} /> */}
      <Route path = "/please" element = {<MusicPage/>} />

      {/* <Route path = "/test2" element = {<Sec5/>} /> */}
      <Route path = "/test3" element = {<Dance/>} />



      </Routes>
    {/* </div> */}
    </Router>
  );
}

export default App;