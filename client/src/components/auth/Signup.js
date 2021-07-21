import React, {useState} from 'react'
import * as auth from './auth-service'
import { Link } from 'react-router-dom';

function Signup(){

    const initialFormState = {
        username: '',
        email: '',
        password: ''
    }

    const [formState, setFormState] = useState(initialFormState)

    function handleChange (event) {
        const {name, value} = event.target;
        setFormState({...formState, [name]: value});
      }

    function handleFormSubmit (event) {
        event.preventDefault();
        const {username, email, password} = formState;
       
        auth.signup(username, email, password)
        .then(createdUser => {
            console.log(createdUser)
            setFormState(initialFormState);
        })
        .catch(error => console.log(error))
      }

    return(
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>
            Username:
              <input
                type="text"
                name="username"
                value={formState.username}
                onChange={handleChange}
              />
          </label>
          <label>
            Email:
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
          </label>
          <label>
            Password:
              <input
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
              />
          </label>
          <button type="submit"> Signup </button>
        </form>
        <p>
          Already have an account?
          <Link to={"/"}> Login</Link>
        </p>
      </div>
    )
}

export default Signup