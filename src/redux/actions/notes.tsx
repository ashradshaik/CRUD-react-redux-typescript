import {GET_NOTES, ADD_NOTES, UPDATE_NOTE, DELETE_NOTE} from './types'
import UpdateNote from '../../components/updateNotes';


export const getNotes = () => (dispatch:any) =>{
    fetch('/api/notes')
    .then(res => res.json())
    .then(notes => dispatch({
        type:GET_NOTES,
        payload:notes
    }))
}

export const addNotes = (note:any) =>(dispatch:any) =>{
    fetch('/api/notes', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(note)
        })
        .then(res=>res.json())
        .then(note=> dispatch({
            type:ADD_NOTES,
            payload:note
        }))
}

export const updateNote = (note:any) => (dispatch:any)=>{
    console.log(note)
    fetch(`/api/notes/${note._id}`, {
        method:'put',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(note)
    }).then(res=>res.json())
    .then(note=>dispatch({
        type:UPDATE_NOTE,
        payload:note
    }))
}

export const deleteNote = (id:any) =>(dispatch:any)=>{
    console.log(id)
    fetch(`/api/notes/${id}`, {
        method:'delete',
        headers:{
            'content-type':'application/json'
        }
    }).then(res=>res.json())
    .then(note=>dispatch({
        type:DELETE_NOTE,
        payload:note.id
    }))
}