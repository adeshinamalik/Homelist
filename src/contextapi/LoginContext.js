// LoginContext.js
import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const showLogin = () => setIsLoginVisible(true);
  const hideLogin = () => setIsLoginVisible(false);

  return (
    <LoginContext.Provider value={{ isLoginVisible, showLogin, hideLogin, setIsLoginVisible }}>
      {children}
    </LoginContext.Provider>
  );
};
