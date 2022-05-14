import React from 'react';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { Users } from '../components/Users';

export const AppRoute = () => {




  return (
    <Router>
        <Routes>
            <Route path='/' element={<Users />} />
        </Routes>
    </Router>
  )
}
