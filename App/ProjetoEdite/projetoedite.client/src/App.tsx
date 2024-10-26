import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Route path="/feed" element={<Feed />} />
        </Router>
    );
};

export default App;