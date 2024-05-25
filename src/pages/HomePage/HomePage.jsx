import PageTitle from '../../components/PageTitle/PageTitle';
import WhyContactBookList from '../../components/WhyContactBookList/WhyContactBookList';

import css from './HomePage.module.css';
import data from '../../assets/data.json';

export default function HomePage() {
  return (
    <>
      <div className={css.main}>
        <PageTitle
          title={'Welcome to Contacts book Application'}
          description={
            'Welcome to our website for storing phone contacts! We offer a convenient and secure way to manage your contacts online. Forget aboutlosing or mixing up phone numbers – with our service, your contactswill always be in place, accessible from any device. Start storingyour contacts now – simply sign up and begin adding your numbers!Welcome to our website for storing phone contacts! We offer aconvenient and secure way to manage your contacts online. Forget aboutlosing or mixing up phone numbers – with our service, your contactswill always be in place, accessible from any device. Start storingyour contacts now – simply sign up and begin adding your numbers!Welcome to our website for storing phone contacts! We offer aconvenient and secure way to manage your contacts online. Forget aboutlosing or mixing up phone numbers – with our service, your contactswill always be in place, accessible from any device. Start storingyour contacts now – simply sign up and begin adding your numbers!Welcome to our website for storing phone contacts! We offer aconvenient and secure way to manage your contacts online. Forget aboutlosing or mixing up phone numbers – with our service, your contactswill always be in place, accessible from any device. Start storingyour contacts now – simply sign up and begin adding your numbers!'
          }
        />
      </div>
      <WhyContactBookList data={data} />
    </>
  );
}
