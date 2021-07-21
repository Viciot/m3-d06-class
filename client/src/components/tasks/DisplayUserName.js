import React from 'react'

function DisplayUserName(props){
    return(<h1>Hello {props.loggedInUser.username}</h1>)
}

export default DisplayUserName