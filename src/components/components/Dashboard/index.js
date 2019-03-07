import React from 'react'
import {connect} from 'react-redux'

function Dashboard(props){
    return(
        <div>
            <h4>Recently added projects</h4>
            <ul>
                <li>{props.projects[props.projects.length-1].name}</li>
            </ul>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        projects: state.projects
    }
}
export default connect(mapStateToProps)(Dashboard)