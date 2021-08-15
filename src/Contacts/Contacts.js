import style from './Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsAction from '../redux/contacts-action';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className={style.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={style.item}>
        <p className={style.text}>{name}:</p>
        <span>{number}</span>
        <button className={style.button} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
