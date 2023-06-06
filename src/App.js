import React, {useEffect} from "react";
import logo from './logo.svg';
import './App.css';


function App() {
  const worker = new Worker(new URL('./worker.js', import.meta.url));

  useEffect(()=> {
    worker.onmessage = (event) => {
      const { data } = event;
      console.log(`Factorial: ${data}`);
    };

    return ()=> {
      worker.terminate();
    }

  }, []);

  function callWorker(){
    worker.postMessage(10); // Calculate factorial of 10
  }

  return (
    <div className="App">
      <header className="App-header">
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
        <button onClick={callWorker}> TEST WORKER</button>
      </header>
    </div>
  );
}

export default App;
