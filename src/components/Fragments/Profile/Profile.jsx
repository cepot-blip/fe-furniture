/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { User } from 'lucide-react';

import useDataUser from '../../../hooks/users/useUserData';

function Profile({ id }) {
  const user = useSelector((state) => state.auth.userAuth);

  if (!user || !user?.loginData) {
    return (
      <div className="flex items-center gap-2">
        <User className="text-lg cursor-pointer" />
        Unknown
      </div>
    );
  }

  return (
    <div className="text-lg cursor-pointer flex items-center gap-2">
      <User className="text-lg cursor-pointer" />
      <span>{user?.loginData}</span>
    </div>
  );
}

export default Profile;
