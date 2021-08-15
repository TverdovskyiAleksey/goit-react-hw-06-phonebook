import { useState } from 'react';
import shortid from 'shortid';
import style from './Form.module.css';
import { connect } from 'react-redux';
import contactsAction from '../redux/contacts-action';
import Contacts from '../Contacts/Contacts';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const id = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const currentContact = { name, number, id };

  const handelSubmit = e => {
    e.preventDefault();
    if (currentContact !== name) {
      onSubmit(currentContact);
      reset();
    }
    alert(`${name} is already in contacts`);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handelSubmit} className={style.form}>
      <label>
        <span>Name</span>
        <input
          id={shortid.generate()}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <span>Number</span>
        <input
          id={shortid.generate()}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={handleChange}
          required
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  onSubmit: name => dispatch(contactsAction.addContact(name)),
});

export default connect(null, mapDispatchToProps)(Form);
