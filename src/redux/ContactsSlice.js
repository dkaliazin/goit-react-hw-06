import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
	name: 'contacts',
	initialState: {
		items: 
        [{ id: 'id-1', name: "Rosie Simpson", number: '459-12-56' },
		{ id: 'id-2', name: "Hermione Kline", number: '443-89-12' },
		{ id: 'id-3', name: "Eden Clements", number: '645-17-79' },
		{ id: 'id-4', name: "Annie Copeland", number: '227-91-26' },]
	},
	reducers: {
		deleteContact(value, action) {
			value.items = value.items.filter(item => item.id !== action.payload);
		},
		addContact(value, action) {
			value.items.push(action.payload);
		}
	}

});
export const selectContacts = value => value.contacts.items;
export const { deleteContact, addContact } = slice.actions;
export default slice.reducer;