import { useState, useEffect } from 'react'
import initialContacts from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import css from './App.module.css';
//import '../SearchBox/SearchBox'
//import '../ContactList/ContactList'

function App() {
 
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  )
}

export default App;
/*
 const [count, setCount] = useState(0);
  const [contacts, setContacts] = useState(initialContacts);

  const [searchBox, setSearchBox] = useState("");
  
  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
  (
    contact.name.toLowerCase().includes(searchBox.toLowerCase())
    
  ))

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
        return prevContacts.filter((contact) => contact.id !== contactId);
    });
  }
  */