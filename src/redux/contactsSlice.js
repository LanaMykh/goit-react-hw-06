import { createSlice } from "@reduxjs/toolkit";
//  import contactsData from '../contacts.json';

// const INITIAL_STATE = 
// {
//     contacts: contactsData,
//     //items: [],
// };

//  console.log(INITIAL_STATE);

const contactsSlice = createSlice({
  name: 'contacts',
    initialState: { items: [], },
        // INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;