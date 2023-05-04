import {Component} from 'react';
import Contactslist from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import {nanoid} from 'nanoid';

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: ''
  }

  onContactFormSubmit = ({ name, number }) => {

    const { contacts } = this.state;

    const checkedNameIsInList = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (checkedNameIsInList) {
      alert(`localhost:3000 says ${name} is already in contacts`);
      return;   
    }
      const newContact = { id: nanoid(), name, number };
          this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
          }) 
          );
  }

  onContactDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id )
    }))
  }

  render() {

    const { contacts } = this.state;

    return (
      <div
        style={{
          marginTop: 40,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
          borderColor: '#000000'
        }}
      >
          <div>Phonebook
            <ContactForm name={contacts.name} onSubmit={this.onContactFormSubmit}/>
          </div>
          <div>Contacts
            <Contactslist contacts={contacts} onDelete={this.onContactDelete}></Contactslist>
          </div>
      </div>
    );
  }
};
