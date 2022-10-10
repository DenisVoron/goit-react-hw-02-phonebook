import React, { Component } from 'react'

import { nanoid } from 'nanoid'

import { Container } from './Container/Container'
import { Section } from './Section/Section'
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  addContacts = ({name, number}) => {
    const { contacts } = this.state;

    const contactObj = {
      id: nanoid(),
      name,
      number,
    };

    for (const contact of contacts) {

      if (contact.name === name) {
        alert(`${name} is already in contact`);

        return;
      }
    }

    this.setState(prevState => ({
      contacts: [contactObj, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };


  getVisiblContact = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  };

  render() {
    const contactList = this.getVisiblContact();

    return (
      <Container>
        <Section title='Phonebook'>
          <ContactsForm onDataSubmit={this.addContacts} />
        </Section>
        <Section title='Contacts'>
          <Filter value={this.state.filter} onFilterChange={this.changeFilter} />
          <ContactList contacts={contactList} onDeleteContact={this.deleteContact} />
        </Section>
      </Container>
    );
  }
}
