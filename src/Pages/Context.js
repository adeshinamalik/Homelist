import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sessionCookieId, setSessionCookieId] = useState(null); // Rename sessionId to sessionCookieId

  useEffect(() => {
    const savedLoginStatus = localStorage.getItem('isLoggedIn');
    if (savedLoginStatus === 'true') {
      setIsLoggedIn(true);

      // Retrieve sessionCookieId from cookie if user is logged in
      const sessionIdFromCookie = getSessionIdFromCookie();
      setSessionCookieId(sessionIdFromCookie);
    }
  }, []);

  // Monitor sessionCookieId for changes and log it
  useEffect(() => {
    if (sessionCookieId) {
      console.log("Session Cookie ID:", sessionCookieId);
    } else {
      console.log("Session Cookie ID is not set");
    }
  }, [sessionCookieId]);  // Logs whenever sessionCookieId changes

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');

    // Set sessionCookieId upon login
    const sessionIdFromCookie = getSessionIdFromCookie();
    setSessionCookieId(sessionIdFromCookie);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    setSessionCookieId(null);
  };

const getSessionIdFromCookie = () => {
  
  const cookies = document.cookie.split("; ");
  
  // Replace 'sessionId' with the actual cookie name you want to retrieve
  const sessionIdCookie = cookies.find(cookie => cookie.startsWith("_ga="));
  
  console.log(document.cookie );
  return sessionIdCookie ? sessionIdCookie.split("=")[1] : null;
};


  const contextValue = {
    isLoggedIn,
    sessionCookieId,  // Expose sessionCookieId in the context
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
