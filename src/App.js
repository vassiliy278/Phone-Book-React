import React from 'react'
import {CSSTransition} from 'react-transition-group'
import ContactsEditor from './components/ContactsEditor'
import ContactsList from './components/ContactsList'
import Filter from './components/Filter'
import './style.css'

function App() {
    return (
      <div className="wrapper">
      <CSSTransition in={true} timeout={1000} classNames="title" appear={true}>
        <h1>Phone Book</h1>
      </CSSTransition>
      <CSSTransition in={true} timeout={1000} classNames="title" appear={true}>
      <ContactsEditor/>
      </CSSTransition>
      <Filter/>
      <ContactsList/>
      </div>
    )
};
export default App