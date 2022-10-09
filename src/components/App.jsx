import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
//const model = nanoid()
//console.log(model);

import { Container } from './Container/Container'
import { Section } from './Section/Section'
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  addContacts = ({name, number}) => {
    console.log(this.state);
    
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))

  };

  /*formSubmitHandler = data => {
    console.log(data);
  };*/

  render() {
    const contactList = this.state.contacts;

    return (
      <Container>
        <Section title='Phonebook'>
          <ContactsForm onDataSubmit={this.addContacts} />
          <Filter />
          </Section>
          <Section title='Contacts'>
            <ContactList contacts={contactList} />
          </Section>
      </Container>
    );
  }
}
