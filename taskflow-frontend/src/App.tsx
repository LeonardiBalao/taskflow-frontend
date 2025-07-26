import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/RoutesConfig';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;