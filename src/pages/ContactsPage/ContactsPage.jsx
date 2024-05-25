import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import { Divider } from '../../components/Divider/Divider.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import PageTitle from '../../components/PageTitle/PageTitle';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';

import { fetchContacts } from '../../redux/contacs/operations.js';
import { selectError } from '../../redux/contacs/selectors.js';

import css from './ContactsPage.module.css';

function App() {
  const mobileSize = useMediaQuery('only screen and (max-width : 768px)');

  const dispatch = useDispatch();
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PageTitle
        title={'PhoneBook'}
        description={
          'A convenient contacts book for all your needs! Store information about important contacts and quickly find the information you need without any hassle.'
        }
      />
      <Divider />
      <div className={css.SearchBox}>
        <SearchBox />
      </div>
      <div className={mobileSize ? css.mobileMainContainer : css.mainContainer}>
        <ContactForm />
        {isError && <ErrorMessage />}
        <ContactList />
      </div>
    </div>
  );
}

export default App;
