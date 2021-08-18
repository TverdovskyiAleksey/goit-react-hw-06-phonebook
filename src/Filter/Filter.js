import style from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsAction from '../redux/contacts-action';

const Filter = ({ value, onChange }) => (
  <label>
    <p className={style.text}>Find contacts by name</p>
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsAction.ChangeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
