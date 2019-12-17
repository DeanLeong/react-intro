// import command imports libraries,other files,data
// imports the react library
import React from 'react';
// imports the react-dom library
import ReactDOM from 'react-dom';
// imports a css file
import './index.css';
// imports the App Component
import App from './App';
import Post from './Post'
import * as serviceWorker from './serviceWorker';

//create the post variable
// add an object that has title, author, body, comments['a','b']
// create a Post Component...its a seprate file
//  - import react
//  - create the functional component
//  - export the component
// import the Post component inside of index.js
// replace the App with Post
// pass the Post Component the post variable as props

const post = {
    title:'Good Book',
    author:'Amy Reid',
    body:'THis is a good book',
    comments: ['good book', 'suggest you read it']
}

// renders(mounts) the Component to the #root element
ReactDOM.render(
    <Post 
        title={post.title}
        author={post.author}
        body={post.body}
        comments={post.comments}
        />, // the Component you want to render

    document.getElementById('root')) // where to render it
;
// PROPS
// name={'Nick'} => name is a property and the value
// must be placed inside of curlys {}
// this is how we pass values from one Component to another
// the receiving Component will store those values in an object
// {greeting: "Hello", name: "Nick"}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

{/* <App 
greeting={'Goodbye'} 
name={'Nick'}
age={24}
/> */}
