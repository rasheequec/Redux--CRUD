import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './components/store/configureStore'
import {addProject, removeProject} from './components/action/project'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';

const store = configureStore()
// store.subscribe(() =>{
//     console.log(store.getState())
// })

const app = (
    <Provider store ={store}>
     <App />

    </Provider>
)
// store.dispatch(addProject({id: 1, name: 'rsq'}))
// store.dispatch(removeProject(1))

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
