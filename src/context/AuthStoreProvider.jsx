/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';

export const AuthUserContext = createContext();

export function AuthUserProvider({ children }) {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
    phone_number: '',
    password: '',
    role: '',
  });

  const setUser = (data) => setUserData(data);

  return (
    <AuthUserContext.Provider value={{ userData, setUser }}>
      {children}
    </AuthUserContext.Provider>
  );
}

// Hook untuk mengakses context
export const useUser = () => useContext(AuthUserContext);
