import axios from "axios";

const API_URL = "http://localhost:5036/api/auth";

export const login = (email: string, password: string) => axios.post(`${API_URL}/login`, { email, password });