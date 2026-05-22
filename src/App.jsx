import './App.css'

import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import JobsItem from './components/JobsItem'
import JobsPage from './components/JobsPage'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <JobsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobs/:id"
        element={
          <ProtectedRoute>
            <JobsItem />
          </ProtectedRoute>
        }
      />

      <Route
        path="/not-found"
        element={<NotFound />}
      />

      <Route
        path="*"
        element={
          <Navigate
            to="/not-found"
            replace
          />
        }
      />

    </Routes>
  )
}

export default App