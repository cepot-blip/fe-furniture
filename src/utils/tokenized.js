import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const savedToken = (token, secret) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, secret).toString();
  Cookies.set('token', encryptedToken, {
    expires: 7,
    sameSite: 'None',
    secure: true,
  });
};

const getToken = (secret) => {
  const token = Cookies.get('token');
  if (token) {
    return CryptoJS.AES.decrypt(token, secret).toString(CryptoJS.enc.Utf8);
  }
  return null;
};

export { getToken, savedToken };
