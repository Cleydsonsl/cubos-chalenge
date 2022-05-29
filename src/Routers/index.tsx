import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Details } from '../pages/Details';

export function Routers(){
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/movie' element={<Details/>}>
        <Route path=':id' element={<Details/>}/>
      </Route>
    </Routes>
  );
};