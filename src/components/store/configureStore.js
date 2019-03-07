import {createStore, combineReducers} from 'redux'
import projectsReducer from '../reducers/project'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        projects: projectsReducer
    }))
    return store
}
export default configureStore