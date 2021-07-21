import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as auth from './auth-service'

function Login(props){

  const initialFormState = {username: '', password: ''}

  const [formState, setFormState] = useState(initialFormState)
  
  function handleChange (event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  function handleFormSubmit (event) {
    event.preventDefault();
    const { username, password } = formState;
 
    auth
      .login(username, password)
      .then(loggedInUser => {
        setFormState(initialFormState);
        props.setLoggedInUser(loggedInUser);
        console.log("logged in user: ", loggedInUser)
      })
      .catch(error => console.log(error));
  };
  
    return(
        <div>
        <form onSubmit={handleFormSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={formState.username} onChange={handleChange} />
          </label>
 
          <label>
            Password:
            <input type="password" name="password" value={formState.password} onChange={handleChange} />
          </label>
 
          <button type="submit"> Login </button>
        </form>
 
        <p>
          Don't have account?
          <Link to={'/signup'}> Signup</Link>
        </p>
      </div>
    )
}

export default Login