import axios from 'axios';

interface LoginResponse {
  message: string;
  role: string;
  token: string;
  user: string;
}

const superAdminLogin = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>('/superadmin/login', {
      username: username,
      password: password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export default superAdminLogin;
