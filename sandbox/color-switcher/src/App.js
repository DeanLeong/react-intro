import React from 'react';
import './App.css';
import ColorList from './ColorList'
import Form from './Form'

function App() {
  return (
    <div className="App">
     <section>
        <h1>Color Scheme Switcher</h1>

        <p>Try clicking on one of the colors to change the background color on this page!</p>
        <Form />
        <ColorList />

      </section>
    </div>
  );
}

export default App;
