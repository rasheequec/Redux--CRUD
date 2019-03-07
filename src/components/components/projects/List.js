import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import EditProject from './edit'

function ProjectList(props){
    return(
        <div>
            <p>Listing Projects - {props.proj.length}</p>
            <ul>
                {props.proj.map(pro =>{
                    return <li key = {pro.id}><Link to={`/projects/${pro.id}`}>{pro.name}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state)=>{
 return {
     proj: state.projects
 }
}
export default connect(mapStateToProps)(ProjectList)