import { useState } from 'react';
import shortid from 'shortid';
import style from './Form.module.css';
import { connect } from 'react-redux';
import contactsAction from '../redux/contacts-action';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../redux/contacts-selection';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

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

  const handelSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(contactsAction.addContact({ name, number }));
    reset();
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
  onSubmit: (name, number) => dispatch(contactsAction.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);
