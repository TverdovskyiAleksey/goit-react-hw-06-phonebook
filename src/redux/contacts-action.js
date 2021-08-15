import types from './contacts-types';
import shortid from 'shortid';

const addContact = ({ number, name }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = deletedContactId => ({
  type: types.DELETE,
  payload: deletedContactId,
});

const ChangeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const exportedObject = {
  addContact,
  deleteContact,
  ChangeFilter,
};

export default exportedObject;
