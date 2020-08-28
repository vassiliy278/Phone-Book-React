import {v4} from 'uuid'
import {createAction} from '@reduxjs/toolkit'
import actionTypes from './actionTypes'

// const addContact = (name, number) => ({
//     type: actionTypes.ADD,
//     payload: {
//         items: {
//             id: v4(),
//             name,
//             number
//         }
//     }
// })

const addContact = createAction(actionTypes.ADD, (name, number) => ({
    payload: {
        items: {
            id: v4(),
            name,
            number
        }
    }
}))

// const removeContact = id => ({
//     type: actionTypes.REMOVE,
//     payload: {
//         id
//     }
// })

const removeContact = createAction(actionTypes.REMOVE, id => ({
    payload: {
        id
    }
}))

// const findContact = filter => ({
//     type: actionTypes.FIND_CONTACT,
//     payload : {
//         filter: filter
//     }
// })

const findContact = createAction(actionTypes.FIND_CONTACT, filter => ({
    payload: {
        filter: filter
    }
}))

export default {
    addContact,
    removeContact,
    findContact
}