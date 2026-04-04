import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../components/login';
import { Register } from '../components/register';
import { Dashboard } from '../components/dashboard';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/register" element={<Register />}></Route> 
            </Routes>
        </BrowserRouter>
    );
}