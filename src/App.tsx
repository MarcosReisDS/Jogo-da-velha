import { FC } from 'react';
import './App.css';
import Router from './share/router';

interface IApp { }
const App: FC<IApp> = () => {
  return (
    <div className="App">
      <Router/>
    </div>
  )
}

export default App;
