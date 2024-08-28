import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [progressValue, setProgressValue] = useState(0)

  useEffect (() => {
    if(progressValue < 100 && progressValue > 0)
    {
      setTimeout(() => {
        setProgressValue(progressValue+10);
      }, 100)
    }
  },[progressValue])

  const handleClick = () => {
    if(progressValue<100){
      setProgressValue(progressValue+10)
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => handleClick()}> Start Count</button>
      </div>
      <div>
        {true && (
          <div className='progressBar' style = {{'width': progressValue+'%'}}>
            {progressValue}%
          </div>
        ) }
      </div>
    </div>
  );
}

export default App;
