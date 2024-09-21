import React from 'react'
import { AuthenticationForm } from './AuthenticationForm'
import { MantineProvider } from '@mantine/core';

/////////////////////////////////////////////////////////
import { useEffect, useRef, useContext } from 'react';
import { LoginContext } from '../contextapi/LoginContext';
/////////////////////////////////////////////////////////



const Authentication = () => {
  /////////////////////////////////////////////////////////
  // const {showLogin}  = useContext(LoginContext);

  const { isLoginVisible, hideLogin } = useContext(LoginContext);
  const popupRef = useRef(null);

  // Handle clicks outside the popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        hideLogin();
      }
    };

    // Handle Escape key press
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        hideLogin();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [hideLogin]);

  if (!isLoginVisible) return null;

  /////////////////////////////////////////////////////////
  return (
    <div className={"authentication"} >
      <div className='myform'>
        <MantineProvider defaultColorScheme="dark">
          <AuthenticationForm />
        </MantineProvider>
      </div>
      <div className='escape' onClick={hideLogin}></div>
    </div>
  )
}

export default Authentication