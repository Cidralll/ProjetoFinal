import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components-Home/home';
import Login from './Components/login';
import ProtectedRoutes from './ProtectedRoutes';
import Register from './register/register';



export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                
                <Route path='/registro' element={<Register />} />

                <Route element={<ProtectedRoutes />}>
                    <Route path='/home' element={<Home />} />
                </Route>
                
            </Routes>
        </Router>
    )
}