import { Outlet, useLocation, Navigate } from "react-router-dom";

const useAuth = () => {
    const { user } = {loggedIn: false}
    return user && user.loggedIn;
};

const Protectedroutes = () => {
    const location = useLocation()
    const isAuth = useAuth();
    return isAuth ? ( 
    <Outlet /> ) : ( 
    <Navigate to="/dashBroard" replace 
    state={{ from: location }} />);
}

export default Protectedroutes;