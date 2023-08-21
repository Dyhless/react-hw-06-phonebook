import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import {
  List,
  ListItem,
  ContactInfo,
  Name,
  Number,
  DeleteButton,
} from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactInfo>
            <Name>{name}</Name>
            <Number>{number}</Number>
          </ContactInfo>
          <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
