import React from 'react';
import './App.css';

function App() {

  const buttonText = { text: 'Click me' }
  const style = { backgroundColor: '#32A9B3', color: 'white' }
  const labelText = 'Enter name: '

  return (
    <div className="App">
      <div>
        <label className="label" htmlFor="name">
          {labelText}
        </label>
        <input id="name" type="text" />
        <button style={style}>{buttonText.text}</button>
      </div>
    </div>
  );
}

export default App;
