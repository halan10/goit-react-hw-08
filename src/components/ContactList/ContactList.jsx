import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import ContactSkeleton from '../ContactSkeleton/ContactSkeleton.jsx';

import { selectFiltredContacts } from '../../redux/filters/selectors';
import { selectLoading } from '../../redux/contacs/selectors.js';

import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFiltredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <ul className={css.contactsList}>
      {isLoading &&
        [...Array(12)].map((item, index) => <ContactSkeleton key={index} />)}
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
