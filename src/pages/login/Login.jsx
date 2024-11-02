/* eslint-disable react/react-in-jsx-scope */
import FormLogin from '../../components/Fragments/Auth/Login';
import AuthTemplate from '../../components/Template/Auth/AuthTemplate';

function LoginPage() {
  return (
    <AuthTemplate
      title="Welcome back, lets explore our collection"
      type="login"
    >
      <FormLogin />
    </AuthTemplate>
  );
}

export default LoginPage;
