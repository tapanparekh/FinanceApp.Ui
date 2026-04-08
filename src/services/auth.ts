import axios from "axios";

const API_URL = "http://localhost:5036/api/auth";

export const login = (email: string, password: string) => axios.post(`${API_URL}/login`, { email, password });

export const setUserToken = (token: string) => {
    localStorage.setItem('token', token);
};

export const getUserToken = () => {
    return localStorage.getItem('token');
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const isAuthenticated = () => {
    return !!getUserToken();
}