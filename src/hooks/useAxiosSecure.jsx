import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext)
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000', // Replace with your base URL
    });

    useEffect(() => {
         axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access_token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // Logout user asynchronously
                    await logoutUser();
                    // Redirect to login page
                    navigate('/login'); // Replace with your login route
                }
                return Promise.reject(error);
            }
        );
    }, [logoutUser,navigate,axiosSecure]);
    return [axiosSecure];
};

export default useAxiosSecure;
