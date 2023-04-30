import {Component} from 'react';
import { Formik } from 'formik';
/* import PropTypes from 'prop-types'; */
import {nanoid} from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {

onAddContactSubmit = ({ name },{ resetForm }) => {
    const checkNameIsInList = this.props.contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase());
        if (checkNameIsInList) {
            alert(`localhost:3000 says ${name} is already in contacts`);
            return;   
        }
        const newContact = { id: nanoid(), name };
        this.props.onAddContactSubmit(newContact);
        resetForm();
}

    render() {
        return (
          <Formik
            initialValues={{ name: '',}}
            onSubmit={this.onSubmit}
          >
            <form className={css.form} autoComplete="off">
                <label className={css.label} htmlFor="name">Name
                  <input className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                </label>
              <button type="submit">Add contact</button>
            </form>
          </Formik>
        );
      }
}

export default ContactForm;