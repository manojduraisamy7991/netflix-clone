
import React from 'react';

interface MovieCardProps {
  title: string;
  image: string;
  year?: string;
  rating?: string;
}

const MovieCard = ({ title, image, year, rating }: MovieCardProps) => {
  return (
    <div className="group relative min-w-[250px] cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-md flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
            <h3 className="font-bold text-sm mb-1">{title}</h3>
            {year && <p className="text-xs text-gray-300">{year}</p>}
            {rating && <p className="text-xs text-yellow-400">★ {rating}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
