import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from '../../redux/ContactsSlice';
import { selectFilter } from '../../redux/FiltersSlice';
const ContactList = () => {
const contactState = useSelector(selectContacts);
const filtersState = useSelector(selectFilter);
const dispatch = useDispatch();
        const visibleContacts = contactState.filter(item =>
            item.name.toLowerCase().includes(filtersState.toLowerCase())
    );
        const onDelete = contactId => {
            dispatch(deleteContact(contactId));
    };
    return (
        <ul className={css.list}>
            {visibleContacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact data={contact} onDelete={onDelete} />
            </li>
            ))}
        </ul>
    )
 
}
export default ContactList;