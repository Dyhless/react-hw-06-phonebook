import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    addContact(state, action) { 
      state.contacts.push(action.payload);
    }, 
    deleteContact(state, action) { 
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    }, 
  },
});

export const { addContact, deleteContact } = userSlice.actions;
export default userSlice.reducer;
