import { createContext, useState } from 'react';
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setIsLoggedIn(true);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.setItem('token', token);
    getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
