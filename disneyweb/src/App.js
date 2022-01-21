import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/main';
import Introduce from './MainPage/main';
import Header from './Header/main';

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
      {/* <MainPage/> */}
      <Header></Header>
    </div>
  );
}

export default App;
