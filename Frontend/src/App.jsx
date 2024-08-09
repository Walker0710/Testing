import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { GameProvider } from './context/GameContext';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import ScorePage from './pages/ScorePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <GameProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<PrivateRoute><GamePage /></PrivateRoute>} />
            <Route path="/score" element={<PrivateRoute><ScorePage /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </GameProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
