/* eslint-disable no-console */
function checkRole(role) {
  switch (role) {
    case 'Admin':
      return 'You have admin privileges.';

    case 'User':
      return 'You are a regular user.';

    case 'Mitra':
      return 'You are a Mitra with special privileges.';

    case 'Guest':
      return 'You are a guest with limited access.';

    default:
      return 'Unknown role. Please register.';
  }
}

const userRole = 'User';
const mitraRole = 'Mitra';

console.log('Mitra:', mitraRole, 'User:', userRole);

export default checkRole;
