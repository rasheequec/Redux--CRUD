import React from 'react'
import uuid from 'uuid'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: props.project ? props.project.id : uuid(),
            name: props.project ? props.project.name : '',
            description: props.project ? props.project.description : ''
        }
        this.formtext = this.formtext.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
    }
    formtext(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandle(e){
        e.preventDefault()
        const formData = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description
        }
        this.props.onSubmit(formData)
        this.setState({
            id: '',
            name:'',
            description: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.submitHandle}>
                <label>Project name</label><br/>
                <input type = "text" value = {this.state.name} onChange = {this.formtext} name = "name"/><br />
                <label>Project description</label><br/>
                <textarea value = {this.state.description} onChange = {this.formtext} name = "description"></textarea><br/>
                <input type = "submit"/>
                </form>
            </div>
        )
    }
}
export default Form