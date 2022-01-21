import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/main';
import Introduce from './MainPage/main';
import NeedleDrop from './needledrop/needledrop';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
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
      <Routes>
      <Route path = "/" element = {<MainPage/>} />
      <Route path = "/home" element = {<NeedleDrop/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
