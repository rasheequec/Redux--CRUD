
export const addProject = (project)=>{
    return {
        type: 'ADD_PROJECT',
        project
    }
}

export const removeProject = (id) =>{
    return {
        type: 'REMOVE_PROJECT',
        id
    }
}

export const editProject = (id, project) => {
    return {
        type: 'EDIT_PROJECT',
        id,
        project
    }
}