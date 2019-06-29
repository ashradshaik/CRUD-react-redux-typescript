import {GET_NOTES, ADD_NOTES, UPDATE_NOTE, DELETE_NOTE} from '../actions/types'

interface NotesState{
    notes:[],
    note:{}
}

const initialState:NotesState={
   notes:[],
   note:{}
}

const notesReducer = (state=initialState, action:any) => {
    console.log(state)
    switch(action.type){
        case GET_NOTES:
            return{
                ...state,
                notes:action.payload
            }
        case ADD_NOTES:
            return{
                ...state,
                note:action.payload
            } 
         case UPDATE_NOTE:
             return{
                 ...state,
                 note:action.payload
             }
        case DELETE_NOTE:
            return{
                ...state,
                note:action.payload
            }
        default:
            return state    
    }
}

export default notesReducer