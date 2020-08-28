import React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {connect} from 'react-redux'
import actions from '../redux/actions'
import propTypes from 'prop-types'
import '../style.css'

const ContactsList = ({contactsss, removeItem}) => {
    return(
        <TransitionGroup component="ul">
            {contactsss.map(({id, name, number}) => (
                <CSSTransition key={id} in={true}  timeout={500} classNames="listItem" className="listElement">
                <li key={id} >
                    <span className="name">{name}</span><span className="number">{number}</span>
                    <button className="button" onClick={() => removeItem(id)}>remove</button>
                </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

const mapStateToProps = state => {
    
    const visibleContacts = state.contacts.items.filter(e => e.name.toLowerCase().includes(state.contacts.filter.toLowerCase()))
    return {
        contactsss: visibleContacts
    }
}
const mapDispatchToProps = {
    removeItem: actions.removeContact,
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)

ContactsList.propTypes = {
    contactsss: propTypes.array,
    removeItem: propTypes.func   
}