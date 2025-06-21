
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../assets/AuthProvider/AuthProvider';


const axiosSecure = axios.create({
  baseURL: 'https://marathon-spinner-server.vercel.app',
});

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.request.use((config) => {
      if (user?.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
      }
      return config;
    });

    return () => {  
      axiosSecure.interceptors.request.eject(interceptor);
    };
  }, [user?.accessToken]);

  return axiosSecure;
};

export default useAxiosSecure;
