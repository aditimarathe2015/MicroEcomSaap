import { Route, Routes, Link } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';

import TenentUsers from './tenentUsers';
import TenentUser from './createUser';


export function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Login/>
          }
        />
        <Route
          path="/dashboard"
          element={
          <Dashboard/>
          }
        />
          <Route
          path="/tenetuser"
          element={
          <TenentUsers/>
          }
        />
         <Route
          path="/adduser"
          element={
          <TenentUser/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
