import logo from './logo.svg';
import './App.css';
// import MainPage from './MainPage/main';
// import Introduce from './MainPage/main';
import InfoPage from './InfoPage/main'
import InfoPage2 from './Infopage2/main'


function App() {
  return (
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
      <InfoPage/>
    </div>
  );
}

export default App;
