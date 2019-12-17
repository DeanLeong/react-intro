import React from 'react'

// what is Post missing that would allow it 
// to accept props?
function Post(props) {
    console.log('Post - props', props)
    // SET a new variable called comments that
    // LOOPs over the comments array
    //  CREATE a new li
    //  ADD the content to the li
    //  RETURN THE LI
    // END LOOP
    // RENDER the li's on the page
    const comments = props.comments.map( (comment,index) => (
        <li key={index}> {comment} </li>
    ))

    console.log('Post - comments', comments)
    return (
        <div>
            <h1>{props.title}</h1>
            <p>By: {props.author}</p>
            <div>{props.body}</div>
            <ul>
              {comments}
            </ul>
        </div>
    )
}

export default Post

{/* <li>{props.comments[0]}</li>
<li>{props.comments[1]}</li> */}