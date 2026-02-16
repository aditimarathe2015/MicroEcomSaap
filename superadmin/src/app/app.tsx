import { Route, Routes, Link } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import Adminuser from './createAdminuser';

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
          path="/createAdminuser"
          element={
          <Adminuser/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
