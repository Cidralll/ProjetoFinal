import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components-Home/home';
import Login from './Components/login';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
    )
}