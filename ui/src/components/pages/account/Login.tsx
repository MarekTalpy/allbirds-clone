import { useState, type FormEvent } from 'react';

import CustomInput from '../../ui/CustomInput';
import CustomLink from '../../ui/TextLink';
import CustomButton from '../../ui/CustomButton';
import './Login.css';
import './account.css';
import AccountContainer from './AccountContainer';

interface ILoginForm {
  eMail: string;
  password: string;
}

const Login = () => {
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    eMail: '',
    password: '',
  });

  const handleChange = (field: keyof ILoginForm) => (value: string) => {
    setLoginForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('loginForm', loginForm);
  };

  return (
    <AccountContainer title="Login">
      <form onSubmit={handleLogin}>
        <section className="account__main">
          <CustomInput
            inputType="email"
            placeholder="E-mail"
            containerClasses={['account__input']}
            value={loginForm.eMail}
            onChange={handleChange('eMail')}
          />
          <CustomInput
            inputType="password"
            placeholder="Password"
            containerClasses={['account__input']}
            value={loginForm.password}
            onChange={handleChange('password')}
          />
          <CustomLink navigateTo="/account/login-recover" label="Forgot your password?" className="login__link" />
          <CustomButton label="LOGIN" buttonClasses={['account__submit-btn']} />
          <CustomLink navigateTo="/account/register" label="Sign up" />
        </section>
      </form>
    </AccountContainer>
  );
};

export default Login;
