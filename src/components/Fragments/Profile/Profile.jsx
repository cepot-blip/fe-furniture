/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { User } from 'lucide-react';

import useDataUser from '../../../hooks/users/useUserData';

function Profile({ id }) {
  console.log('data user:', id);
  const { userData } = useDataUser();

  if (!userData || !userData.id) {
    return (
      <div className="flex items-center gap-2">
        <User className="text-lg cursor-pointer" />
        null
      </div>
    );
  }

  console.log('data user:', userData.id);

  //  jika tes data user nya, hapus saja dlu token nya
  //  lalu login dari awal atau register dari awal
  //  apakah data user nya udh dapet atau belum
  function nonamed() {
    console.log(userData);
  }
  return (
    <div className="text-lg cursor-pointer">
      <User className="text-lg cursor-pointer" />
    </div>
  );
}

export default Profile;
