import React from 'react'
import Form from './form'
import {connect} from 'react-redux'
import { addProject } from '../../action/project';

function AddProject(props){
    return(
        <div>
            <p>Add Project</p>
            <Form onSubmit = {(project)=>{
                props.dispatch(addProject(project))
                props.history.push('/projects')
            }}/>
        </div>
    )
}
export default connect()(AddProject)