import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function RegistrationPage() {
  return (
    <>
      <PageTitle
        title={'Hello, Friend!'}
        description={
          'Register with your personal details to use all of site features'
        }
      />
      <RegistrationForm />
    </>
  );
}
