import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function LoginPage() {
  return (
    <>
      <PageTitle
        title={'Welcome Back!'}
        description={'Enter your personal details to use all of site features'}
      />
      <LoginForm />
    </>
  );
}
