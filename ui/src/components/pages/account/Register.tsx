import { useState, type FormEvent } from 'react';

import CustomInput from '../../ui/CustomInput';
import CustomLink from '../../ui/TextLink';
import CustomButton from '../../ui/CustomButton';
import './account.css';
import './register.css';
import AccountContainer from './AccountContainer';

interface IRegisterForm {
  firstName: string;
  lastName: string;
  eMail: string;
  password: string;
}

const Register = () => {
  const [registerForm, setRegisterForm] = useState<IRegisterForm>({
    firstName: '',
    lastName: '',
    eMail: '',
    password: '',
  });

  const handleChange = (field: keyof IRegisterForm) => (value: string) => {
    setRegisterForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('registerForm', registerForm);
  };

  return (
    <AccountContainer title="Sign up">
      <form onSubmit={handleRegister}>
        <section className="account__main">
          <CustomInput
            placeholder="First name"
            containerClasses={['account__input']}
            value={registerForm.firstName}
            onChange={handleChange('firstName')}
          />
          <CustomInput
            placeholder="Last name"
            containerClasses={['account__input']}
            value={registerForm.lastName}
            onChange={handleChange('lastName')}
          />
          <CustomInput
            inputType="email"
            placeholder="E-mail"
            containerClasses={['account__input']}
            value={registerForm.eMail}
            onChange={handleChange('eMail')}
          />
          <CustomInput
            inputType="password"
            placeholder="Password"
            containerClasses={['account__input register__password']}
            value={registerForm.password}
            onChange={handleChange('password')}
          />
          <CustomButton label="CREATE ACCOUNT" buttonClasses={['account__submit-btn']} />
          <CustomLink navigateTo="/account/login" label="Login" />
        </section>
      </form>
    </AccountContainer>
  );
};

export default Register;
