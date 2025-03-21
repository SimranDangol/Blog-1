import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom"; // Navigate = component

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
