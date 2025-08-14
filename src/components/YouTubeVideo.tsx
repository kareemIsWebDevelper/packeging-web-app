import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';

interface YouTubeVideoProps {
  videoUrl: string;
  title?: string;
  className?: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ 
  videoUrl, 
  title = "Company Video",
  className = "" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string): string => {
    const videoId = url.includes('youtu.be') 
      ? url.split('youtu.be/')[1]?.split('?')[0]
      : url.split('v=')[1]?.split('&')[0];
    
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  // Get video thumbnail
  const getThumbnailUrl = (url: string): string => {
    const videoId = url.includes('youtu.be') 
      ? url.split('youtu.be/')[1]?.split('?')[0]
      : url.split('v=')[1]?.split('&')[0];
    
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`relative aspect-video rounded-lg overflow-hidden shadow-xl ${className}`}>
      {!isPlaying ? (
        // Video Thumbnail with Play Button
        <motion.div
          className="relative w-full h-full cursor-pointer group"
          onClick={handlePlay}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={getThumbnailUrl(videoUrl)}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="bg-red-600 hover:bg-red-700 rounded-full p-4 shadow-2xl group-hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlayIcon className="w-12 h-12 text-white ml-1" />
            </motion.div>
          </div>
          
          {/* YouTube Logo */}
          <div className="absolute top-4 right-4">
            <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
              YouTube
            </div>
          </div>
          
          {/* Video Title */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white text-lg font-semibold drop-shadow-lg">
              {title}
            </h3>
          </div>
        </motion.div>
      ) : (
        // Embedded YouTube Video
        <iframe
          src={getEmbedUrl(videoUrl)}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default YouTubeVideo;
