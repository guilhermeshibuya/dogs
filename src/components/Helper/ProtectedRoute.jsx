import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);

  if (isLoggedIn === true) return children;
  else if (isLoggedIn === false) return <Navigate to="/login" />;
  else return <></>;
};

export default ProtectedRoute;
