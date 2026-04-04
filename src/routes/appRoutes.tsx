import { Routes, Route } from 'react-router-dom';
import { Login } from '../components/login/login';
import { Register } from '../components/register/register';
import { Dashboard } from '../components/dashboard/dashboard';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/register" element={<Register />}></Route> 
        </Routes>
    );
}