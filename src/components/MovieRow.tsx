
import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  image: string;
  year?: string;
  rating?: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow = ({ title, movies }: MovieRowProps) => {
  return (
    <div className="px-4 md:px-8 mb-8">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
