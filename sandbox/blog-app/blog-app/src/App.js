// import react
import React from 'react';
// logo becomes our variable that stores logo.svg
// import logo from './logo.svg';
import './App.css';

// App is a functional Component
// the other kind of Component is a Class based Component
// create the Component
// props is an object
function Hello(props) {
  console.log('Hello - props:', props)
  // returns...JSX
  return (
    <>
      <h1>{props.greeting} {props.name}</h1>
      <p>You are {props.age} years old</p>
    </>
  );
}

// export default is how we export(return) is Component from this file
// export the Component
export default Hello;

// Hello('Nick')

/* JSX RULES
 - can only return one single top level html element
 - you can use <> </> as the top level is you want
 - curlys {} are used to run JavaScript

*/