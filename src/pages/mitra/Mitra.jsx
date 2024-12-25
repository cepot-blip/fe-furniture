import React from 'react';

import FormMitra from '../../components/Fragments/Auth/Mitra';
import AuthTemplate from '../../components/Template/Auth/AuthTemplate';

function Mitra() {
  return (
    <AuthTemplate
      title="Daftar Sebagai Mitra Kami"
      subtitle="Bergabunglah untuk memasarkan produk furniture berkualitas kepada jutaan pelanggan kami. Isi form berikut untuk memulai kerja sama!"
    >
      <FormMitra />
    </AuthTemplate>
  );
}

export default Mitra;
