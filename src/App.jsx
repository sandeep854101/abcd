import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CardList from './components/CourseCard';
import CardDetail from './Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CardList />} />
                <Route path="/card/:id" element={<CardDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
