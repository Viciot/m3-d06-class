import React , { useState }from 'react'
import axios from 'axios'

{/* { title, description } */}

function AddProject(){

    const initialFormState = {title: '', description: ''}

    const [formState, setFormState] = useState(initialFormState)

    function handleChange (event) {  
        const {name, value} = event.target;
        setFormState({...formState, [name]: value});

        /*
          If you type "a" in the title input,
          name = "title", value = "a"
          setFormState({
            ...forState,
            "title": value
          })
        */
    }

    function handleFormSubmit(event){
        event.preventDefault()
        const {title, description} = formState

        axios.post('http://localhost:5000/api/projects', {title, description})
        .then(setFormState(initialFormState))
        .catch(err=>console.log(err))
    }

    return (
        <div>
        <form onSubmit={handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={formState.title} onChange={ e => handleChange(e)}/>
          <label>Description:</label>
          <textarea name="description" value={formState.description} onChange={ e => handleChange(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default AddProject