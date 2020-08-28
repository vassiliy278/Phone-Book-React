import {combineReducers} from 'redux'
import {createReducer} from '@reduxjs/toolkit'
import actions from './actions'

const addContact = (state, action) => { return [...state, action.payload.items]}
const removeContact = (state, action) => {return state.filter(e => e.id !== action.payload.id)}
const filterContact = (state, action) => {return action.payload.filter}

// const items = ( state = [], {type, payload} ) => {
//     switch(type) {
//         case actionTypes.ADD: return [...state, payload.items];
//         case actionTypes.REMOVE: return state.filter(e => e.id !== payload.id);
//         default: return state;
//     }
// }

// const filter = ( state = '', {type, payload}) => {
//     switch(type) {
//         case actionTypes.FIND_CONTACT: return payload.filter
//         default: return state
//     }
// }

const items = createReducer([], {
    [actions.addContact]: addContact,
    [actions.removeContact]: removeContact
})
const filter = createReducer('', {
    [actions.findContact]: filterContact
})

export default combineReducers ({
    items,
    filter
})