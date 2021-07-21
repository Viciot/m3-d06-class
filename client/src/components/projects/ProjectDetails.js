import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ProjectDetails(props){

    const [projectState, setProjectState] = useState({title: "Loading Title...", description: "Loading Description..."})
    const { projectId } = props.match.params

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/project/${projectId}`)
        .then(res=>{
            const project = res.data
            setProjectState(project)
        })
    }, [projectId])

    return(
        <div>
        <h1>{projectState.title}</h1>
        <p>{projectState.description}</p>
        <Link to={'/projects'}>Back to projects</Link>
      </div>
    )
}

export default ProjectDetails