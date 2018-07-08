import * as React from 'react';
import './App.css';
import { HelloWorld } from './compontents/HelloWorld';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HelloWorld />
      </div>
    );
  }
}

export default App;
