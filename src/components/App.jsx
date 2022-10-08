import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import { Container } from './Container/Container'
import { Section } from './Section/Section'
import { ContactsForm } from './ContactsForm/ContactsForm';


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  addContacts = () => {
    const contact = {
      id: 'id-1',
    };


    

  };

  //const 

  render() {
    return (
      <Container>
        <Section title='Phonebook'>
          <ContactsForm />
        </Section>
      </Container>
    );
  }
}




/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};*/
