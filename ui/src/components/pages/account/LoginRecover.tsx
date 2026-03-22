import { useState, type FormEvent } from 'react';

import CustomInput from '../../ui/CustomInput';
import CustomLink from '../../ui/TextLink';
import CustomButton from '../../ui/CustomButton';
import './account.css';
import './LoginRecover.css';
import AccountContainer from './AccountContainer';

interface ILoginRecoverForm {
  eMail: string;
}

const LoginRecover = () => {
  const [loginRecoverForm, setLoginRecoverForm] = useState<ILoginRecoverForm>({
    eMail: '',
  });

  const handleChange = (field: keyof ILoginRecoverForm) => (value: string) => {
    setLoginRecoverForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLoginRecover = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('loginRecoverForm', loginRecoverForm);
  };

  return (
    <AccountContainer title="Recover password">
      <form onSubmit={handleLoginRecover}>
        <section className="account__main">
          <CustomInput
            inputType="email"
            placeholder="E-mail"
            containerClasses={['account__input login-recover__email']}
            value={loginRecoverForm.eMail}
            onChange={handleChange('eMail')}
          />
          <CustomButton label="RECOVER" buttonClasses={['account__submit-btn']} />
          <CustomLink navigateTo="/account/login" label="Back to login" />
        </section>
      </form>
    </AccountContainer>
  );
};

export default LoginRecover;
