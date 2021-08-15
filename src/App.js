import { useState } from 'react';
import Container from './Container';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);

  const formSubmitHandler = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [data, ...prevState]);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
}
