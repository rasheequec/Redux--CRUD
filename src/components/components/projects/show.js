import React from 'react'
import {connect} from 'react-redux'
import { removeProject } from '../../action/project'
import {Link} from 'react-router-dom'

function ProjectShow(props){
    return(
        <div>
            project show information
            <h2>{props.project.name}</h2>
            <h5>{props.description}</h5>

            <Link to = {`/edit/${props.project.id}`}>edit</Link>
            <button onClick = {()=>{
                        const confirmDelete = window.confirm("Are you sure?")
                        if(confirmDelete){
                            props.dispatch(removeProject(props.project.id))
                            props.history.push('/projects')
                        }
                        
                    }}>Delete</button>
        </div>
    )
}
const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find(pro =>{
            return pro.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(ProjectShow)