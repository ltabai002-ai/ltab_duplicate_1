import React from 'react';

interface GalleryTabsProps {
  activeTab: 'images' | 'videos';
  onTabChange: (tab: 'images' | 'videos') => void;
}

const GalleryTabs: React.FC<GalleryTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex rounded-lg bg-gray-100 p-1">
        <button
          onClick={() => onTabChange('images')}
          aria-label="View image generation gallery"
          className={`px-6 py-2 rounded-md text-sm font-medium transition duration-200 ease-out ${
            activeTab === 'images'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          Image Generation
        </button>
        <button
          onClick={() => onTabChange('videos')}
          aria-label="View video generation gallery"
          className={`px-6 py-2 rounded-md text-sm font-medium transition duration-200 ease-out ${
            activeTab === 'videos'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          Video Generation
        </button>
      </div>
    </div>
  );
};

export default GalleryTabs;