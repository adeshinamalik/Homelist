import DetailsPage from './Pages/DetailsPage';
import '@mantine/core/styles.css';
import Authentication from './Pages/Authentication';



import React from 'react';
// import Register  from './Pages/NewRegister'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
// import Login from './Pages/Login';
import { AuthProvider } from './Pages/Context';
import RegisterForm from './Pages/Register_form';
import PostHouse from './Pages/PostHouse';
import Search from './Pages/Search';

///////////////////////////////////////
import ListHouse from './Pages/ListHouse';
import { LoginProvider } from './contextapi/LoginContext';
import Mantine from './Pages/Mantine';
import CreateRealtor from './Pages/CreateRealtor';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <LoginProvider>
          <Authentication />
          <Router>
            <Routes>
              <Route path='/' Component={HomePage} />
              {/* <Route path='/register' Component={RegisterForm} /> */}
              <Route path='/search' Component={Search} />
              {/* <Route path='/success' Component={SuccessPage} /> */}

              <Route path='/' element={<HomePage />} />
              {/* <Route path='/login' element={<Login />} /> */}
              <Route path='/house-posting' element={<PostHouse />} />
              <Route path='/DetailsPage' element={<DetailsPage />} />
              <Route path='/authent' element={<RegisterForm />} />
              <Route path='/list' element={<ListHouse />} />
              <Route path='/listhouse' element={<Mantine />} />
              <Route path='/CreateRealtor' element={<CreateRealtor />} />
            </Routes>
          </Router>
        </LoginProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
