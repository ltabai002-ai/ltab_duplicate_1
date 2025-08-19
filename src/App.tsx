@@ .. @@
 import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
+import AiGallery from './pages/AiGallery';
 
 function App() {
   return (
     <Router>
       <div className="App">
+        </nav>
          <Route path="/" element={<AiGallery />} />
           <Route path="/" element={<div className="p-8"><h1 className="text-2xl font-bold">Welcome to the App</h1></div>} />
+          <Route path="/ai-gallery" element={<AiGallery />} />
         </Routes>
       </div>
     </Router>