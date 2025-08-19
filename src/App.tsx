@@ .. @@
 import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
+import AiGallery from './pages/AiGallery';
 
 function App() {
   return (
     <Router>
       <div className="App">
+        <nav className="bg-white shadow-sm border-b">
+          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+            <div className="flex justify-between h-16">
+              <div className="flex items-center space-x-8">
+                <a 
+                  href="/" 
+                  className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium transition duration-200"
+                >
+                  Home
+                </a>
+                <a 
+                  href="/ai-gallery" 
+                  className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium transition duration-200"
+                >
+                  Ai gallery
+                </a>
+              </div>
+            </div>
+          </div>
+        </nav>
+        
         <Routes>
           <Route path="/" element={<div className="p-8"><h1 className="text-2xl font-bold">Welcome to the App</h1></div>} />
+          <Route path="/ai-gallery" element={<AiGallery />} />
         </Routes>
       </div>
     </Router>