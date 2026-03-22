import { useNavigate } from 'react-router';

import CustomButton from '../ui/CustomButton';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__main">
        <h1 className="not-found__title">Page not found</h1>
        <CustomButton label="CONTINUE SHOPPING" onClick={() => navigate('/collections/all')} />
      </div>
    </section>
  );
};

export default NotFound;
