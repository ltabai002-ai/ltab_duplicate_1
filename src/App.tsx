import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AiGallery from './pages/AiGallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AiGallery />} />
          <Route path="/ai-gallery" element={<AiGallery />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;