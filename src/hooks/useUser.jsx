import { useEffect, useState } from 'react';

const useUser = () => {
  const [isUser, setIsUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('userFurniture');
    if (userData) {
      setIsUser(JSON.parse(userData));
    }
  }, []);

  return isUser;
};

export default useUser;
