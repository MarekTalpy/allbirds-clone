import { useState, type FormEvent } from 'react';

import CustomInput from '../ui/CustomInput';
import CustomLink from '../ui/CustomLink';
import CustomButton from '../ui/CustomButton';
import './Login.css';

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
    <form className="login" onSubmit={handleLogin}>
      <h1 className="login__title">Login</h1>
      <section className="login__main">
        <CustomInput
          inputType="email"
          placeholder="E-mail"
          containerClasses={['login__input']}
          value={loginForm.eMail}
          onChange={handleChange('eMail')}
        />
        <CustomInput
          inputType="password"
          placeholder="Password"
          containerClasses={['login__input']}
          value={loginForm.password}
          onChange={handleChange('password')}
        />
        <CustomLink navigateTo="/account/login-recover" label="Forgot your password?" className="login__link" />
        <CustomButton label="LOGIN" buttonClasses={['login__submit-btn']} />
        <CustomLink navigateTo="/account/login-recover" label="Sign up" className="login__link-signup" />
      </section>
    </form>
  );
};

export default Login;
