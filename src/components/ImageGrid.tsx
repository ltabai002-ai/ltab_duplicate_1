import React, { useState, useEffect, useRef } from 'react';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const ImageGrid: React.FC = () => {
  const [useMasonry, setUseMasonry] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  // Sample image data - replace with your actual data
  const images: ImageData[] = [
    { id: 1, src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'AI Generated Art 1' },
    { id: 2, src: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'AI Generated Art 2' },
    { id: 3, src: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'AI Generated Art 3' },
    { id: 4, src: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'AI Generated Art 4' },
    { id: 5, src: 'https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'AI Generated Art 5' },
    { id: 6, src: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'AI Generated Art 6' },
    { id: 7, src: 'https://images.pexels.com/photos/3861971/pexels-photo-3861971.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'AI Generated Art 7' },
    { id: 8, src: 'https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'AI Generated Art 8' },
    { id: 9, src: 'https://images.pexels.com/photos/3861974/pexels-photo-3861974.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'AI Generated Art 9' },
  ];

  const checkImageAspectRatios = () => {
    let hasNonSquareImage = false;
    
    imageRefs.current.forEach((img) => {
      if (img && img.naturalWidth && img.naturalHeight) {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        // Near-square definition: aspect ratio between 0.92-1.08 (±8% of 1:1)
        if (aspectRatio < 0.92 || aspectRatio > 1.08) {
          hasNonSquareImage = true;
        }
      }
    });

    setUseMasonry(hasNonSquareImage);
  };

  useEffect(() => {
    if (imagesLoaded === images.length) {
      checkImageAspectRatios();
    }
  }, [imagesLoaded, images.length]);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  const handleImageClick = (index: number, src: string) => {
    console.log('image_card_click', { index, src });
  };

  const renderGridLayout = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="group relative rounded-md overflow-hidden cursor-pointer transition duration-200 ease-out hover:scale-95"
          onClick={() => handleImageClick(index, image.src)}
        >
          <img
            ref={el => imageRefs.current[index] = el}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover transition duration-200 ease-out group-hover:scale-100"
            onLoad={handleImageLoad}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition duration-200 ease-out" />
        </div>
      ))}
    </div>
  );

  const renderMasonryLayout = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-2">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="group relative rounded-md overflow-hidden cursor-pointer transition duration-200 ease-out hover:scale-95 break-inside-avoid mb-2"
          onClick={() => handleImageClick(index, image.src)}
        >
          <img
            ref={el => imageRefs.current[index] = el}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover transition duration-200 ease-out group-hover:scale-100"
            onLoad={handleImageLoad}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition duration-200 ease-out" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full">
      {useMasonry ? renderMasonryLayout() : renderGridLayout()}
    </div>
  );
};

export default ImageGrid;