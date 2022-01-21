import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/main';
import Introduce from './MainPage/main';
import Header from './Header/main';

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
<<<<<<< HEAD
      {/* <MainPage/> */}
      <Header></Header>
=======
      <Routes>
      <Route path = "/" element = {<MainPage/>} />
      <Route path = "/home" element = {<MainPage/>} />
      </Routes>
>>>>>>> origin
    </div>
    </Router>
  );
}

export default App;
