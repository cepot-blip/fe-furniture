/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Elements/Button/Button';
import useUser from '../../hooks/useUser';

function HomePage() {
  const navigate = useNavigate();
  const isUser = useUser();

  const handleLogout = () => {
    const conf = window.confirm('Anda yakin ingin keluar?');

    if (conf) {
      localStorage.removeItem('userFurniture');
      navigate('/');
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <h1 className="font-semibold">
        Hello {isUser ? `${isUser.username} Welcome 👋` : 'Lu siape'}
      </h1>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default HomePage;
