import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import BookDetails from './pages/BookDetails';
import BookForm from './pages/BookForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/books/new" element={
                <PrivateRoute>
                  <BookForm />
                </PrivateRoute>
              } />
              <Route path="/books/:id" element={
                <PrivateRoute>
                  <BookDetails />
                </PrivateRoute>
              } />
              <Route path="/books/:id/edit" element={
                <PrivateRoute>
                  <BookForm />
                </PrivateRoute>
              } />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;