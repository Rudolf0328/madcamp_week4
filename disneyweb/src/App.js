import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
// import MainPage from './MainPage/main';
// import Introduce from './MainPage/main';
import InfoPage from './InfoPage/main'
import InfoPage2 from './Infopage2/main'

=======
import MainPage from './MainPage/main';
import Introduce from './MainPage/main';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Header from './Header/main';
>>>>>>> 362e00ca85eaef6537ea9d38e814fe009463c530

function App() {
  return (
    <Router>
    <div className="App">
<<<<<<< HEAD
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <InfoPage/>
=======
      <Routes>
      <Route path = "/" element = {<MainPage/>} />
      <Route path = "/home" element = {<MainPage/>} />
      <Route path = "/header" element = {<Header/>} />
      </Routes>
>>>>>>> 362e00ca85eaef6537ea9d38e814fe009463c530
    </div>
    </Router>
  );
}

export default App;