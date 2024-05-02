import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "./useAuth";


const RequireAuth = ({allowedRoles}) => {
    const {auth } =useAuth();
    const location = useLocation();
  return (
    
    //console.log("vv", auth.role,"vv",allowedRoles.includes(auth.role))

    // // Array.isArray(auth?.roles) && auth?.roles?.find(role => allowedRoles?.includes(role))
     allowedRoles.includes(auth.roles)
    ////auth?.roles?.find(role=> allowedRoles?.includes(role))
    ? <Outlet/>
    : auth?.user
         ?<Navigate to="/unauthorised" state={{from:location}} replace />
         :<Navigate to="/login" state={{from:location}} replace />
  
  );
}

export default RequireAuth