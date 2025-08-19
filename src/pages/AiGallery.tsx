import React, { useState } from 'react';
import GalleryTabs from '../components/GalleryTabs';
import ImageGrid from '../components/ImageGrid';
import VideoGrid from '../components/VideoGrid';

const AiGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');

  const handleCTAClick = () => {
    console.log('cta_click');
    window.location.href = '/create-graphics.html';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8 max-w-screen-xl">
        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Our work gallary
        </h1>

        {/* Gallery Tabs */}
        <GalleryTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Gallery Content */}
        <div className="mt-8">
          {activeTab === 'images' ? <ImageGrid /> : <VideoGrid />}
        </div>
      </div>

      {/* Floating CTA Button */}
      <button
        onClick={handleCTAClick}
        aria-label="Create graphics"
        className="fixed left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-lg transition duration-200 ease-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        style={{ bottom: '3%' }}
      >
        Create a graphics
      </button>
    </div>
  );
};

export default AiGallery;