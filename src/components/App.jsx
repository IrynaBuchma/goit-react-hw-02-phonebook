import {Component} from 'react';
import Contactslist from './ContactsList/ContactsList';


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

  onDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id )
    }))

  }

  render() {

    const { contacts, name} = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >
        <Contactslist name={name} contacts={contacts} onDelete={this.onDelete}></Contactslist>
      </div>
    );
  }
};
