import React from 'react';

interface VideoData {
  id: number;
  src: string;
  poster: string;
  title: string;
}

const VideoGrid: React.FC = () => {
  // Sample video data - replace with your actual data
  const videos: VideoData[] = [
    { 
      id: 1, 
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', 
      poster: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'AI Generated Video 1'
    },
    { 
      id: 2, 
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4', 
      poster: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'AI Generated Video 2'
    },
    { 
      id: 3, 
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4', 
      poster: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'AI Generated Video 3'
    },
    { 
      id: 4, 
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', 
      poster: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'AI Generated Video 4'
    },
    { 
      id: 5, 
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4', 
      poster: 'https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'AI Generated Video 5'
    },
    { 
      id: 6, 
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4', 
      poster: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'AI Generated Video 6'
    },
  ];

  const handleVideoClick = (index: number, video: VideoData) => {
    console.log('video_card_click', { index, src: video.src, poster: video.poster });
  };

  const handleVideoHover = (videoElement: HTMLVideoElement, isHovering: boolean) => {
    if (isHovering) {
      videoElement.play().catch(() => {
        // Ignore autoplay errors
      });
    } else {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="group relative rounded-md overflow-hidden cursor-pointer transition duration-200 ease-out hover:scale-95"
            onClick={() => handleVideoClick(index, video)}
          >
            <video
              poster={video.poster}
              className="w-full h-auto object-cover transition duration-200 ease-out group-hover:scale-100"
              muted
              loop
              playsInline
              onMouseEnter={(e) => handleVideoHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleVideoHover(e.currentTarget, false)}
              aria-label={video.title}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition duration-200 ease-out" />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200 ease-out">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <svg 
                  className="w-8 h-8 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;