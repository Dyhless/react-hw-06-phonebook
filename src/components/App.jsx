import React, { useCallback, useMemo, useEffect, useState } from 'react';
import { Container, PhoneFrame, Title, ContentContainer } from './App.styled';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = useCallback(
    (name, number) => {
      const isContactExists = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isContactExists) {
        alert(`${name} is already in contacts`);
      } else {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        setContacts(prevState => [...prevState, newContact]);
      }
    },
    [contacts]
  );

  const deleteContact = useCallback(id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  }, []);

  const changeFilter = useCallback(event => {
    setFilter(event.target.value);
  }, []);

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <PhoneFrame>
        <Title>Phonebook</Title>
        <ContentContainer>
          <ContactForm onSubmit={addContact} />
          <Title>Contacts</Title>
          <Filter filter={filter} onChangeFilter={changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={deleteContact}
          />
        </ContentContainer>
      </PhoneFrame>
    </Container>
  );
};
