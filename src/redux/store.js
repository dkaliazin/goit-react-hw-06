import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './ContactsSlice';
import filterReducer from './FiltersSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistedContactsReducer = persistReducer({
	key: 'contacts',
	storage,
}, contactsReducer)


const persistedFiltersReducer = persistReducer({
	key: 'search',
	storage,
}, filterReducer)


export const store = configureStore({
	reducer: {
		contacts: persistedContactsReducer,
		search: persistedFiltersReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);