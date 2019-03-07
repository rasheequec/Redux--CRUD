import React from 'react'
import Form from './form'
import {connect} from 'react-redux'
import {editProject} from '../../action/project'

function EditProject(props){
    return(
        <div>
        <h2>Edit Project</h2>
        <Form project = {props.project}
        onSubmit = {(project =>{
            props.dispatch(editProject(project.id, project))
        })}/>
        <h3>{props.project.id}</h3>
        </div>
    )
   
}

const mapStateToProps = (state, props) =>{
    return{
        project: state.projects.find(pro =>{
            return pro.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditProject)