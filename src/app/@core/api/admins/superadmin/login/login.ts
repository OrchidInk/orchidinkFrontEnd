import axios from 'axios';

const superAdminLogin = async (username: string, password: string) => {
  try {
    const response = await axios.post('/superadmin/login', {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export default superAdminLogin;
