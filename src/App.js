import React, { Component } from 'react';
import './App.css';
import AddProject from './components/components/projects/add'
import ProjectList from './components/components/projects/List'
import Dashboard from './components/components/Dashboard/index'
import ProjectShow from './components/components/projects/show'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import EditProject from './components/components/projects/edit'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
        
        <Link to = "/">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to = "/projects">Project</Link>&nbsp;&nbsp;&nbsp;
        <Link to = "/add">Add new Project</Link>&nbsp;&nbsp;&nbsp;
        <Link to = "/dashboard">Dashboard</Link>
        
        <Switch>
          <Route path = "/projects" component = {ProjectList} exact/>
          <Route path = "/add" component = {AddProject} exact/>
          <Route path = "/dashboard" component = {Dashboard} exact/>
          <Route path = "/projects/:id" component = {ProjectShow} exact/>
          <Route path = "/edit/:id" component = {EditProject} exact/>
        </Switch>
        
        
      </div>
      
      </BrowserRouter>
     
    );
  }
}

export default App;
