import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { User, Menu } from "lucide-react";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { Button } from "./components/ui/button";

const App: React.FC = () => (
  <Router>
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Taskflow</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                About
              </Link>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Pricing
              </a>
            </div>

            {/* Login Button */}
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
              <Link to="/register">
                <Button 
                  size="sm"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Sign Up
                </Button>
              </Link>
              
              {/* Mobile menu button */}
              <Button 
                variant="ghost" 
                size="sm"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;