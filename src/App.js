import Container from './Container';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
}
