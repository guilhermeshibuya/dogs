import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost.jsx';
import LoginPasswordReset from './LoginPasswordReset';
import { useContext } from 'react';
import { UserContext } from '../../UserContext.jsx';
import styles from './Login.module.css';

const Login = () => {
  const { isLoggedIn } = useContext(UserContext);

  if (isLoggedIn === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
