/* eslint-disable react/react-in-jsx-scope */
import FormRegister from '../../components/Fragments/Auth/Register';
import AuthTemplate from '../../components/Template/Auth/AuthTemplate';

function RegisterPage() {
  return (
    <AuthTemplate
      title="Hello, lets create an new account in Furniture"
      subtitle="Please enter our details"
      type="register"
    >
      <FormRegister />
    </AuthTemplate>
  );
}

export default RegisterPage;
