import Home from "./Components-Home/home";
import Authenticated from "./validation-token/authenticated"
import { Navigate} from 'react-router';

const ProtectedRoutes = () => {
    const isAuth = Authenticated();

    return isAuth ? <Home /> : <Navigate to='/' />;
}

export default ProtectedRoutes;