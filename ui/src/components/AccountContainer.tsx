import type { ReactNode } from 'react';

import './AccountContainer.css';

type AccountContainerProps = {
  title: string;
  children: ReactNode;
};

const AccountContainer = ({ title, children }: AccountContainerProps) => {
  return (
    <section className="account-container">
      <h1 className="account-container__title">{title}</h1>
      {children}
    </section>
  );
};

export default AccountContainer;
