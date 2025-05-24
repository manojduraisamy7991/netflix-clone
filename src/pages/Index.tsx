
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';

const Index = () => {
  // Sample movie data
  const trendingMovies = [
    {
      id: 1,
      title: "The Matrix",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop",
      year: "1999",
      rating: "8.7"
    },
    {
      id: 2,
      title: "Inception",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=225&fit=crop",
      year: "2010",
      rating: "8.8"
    },
    {
      id: 3,
      title: "Interstellar",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
      year: "2014",
      rating: "8.6"
    },
    {
      id: 4,
      title: "Blade Runner 2049",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop",
      year: "2017",
      rating: "8.0"
    },
    {
      id: 5,
      title: "Dune",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop",
      year: "2021",
      rating: "8.0"
    }
  ];

  const actionMovies = [
    {
      id: 6,
      title: "John Wick",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
      year: "2014",
      rating: "7.4"
    },
    {
      id: 7,
      title: "Mad Max: Fury Road",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=225&fit=crop",
      year: "2015",
      rating: "8.1"
    },
    {
      id: 8,
      title: "Mission Impossible",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=225&fit=crop",
      year: "2018",
      rating: "7.7"
    }
  ];

  const comedyMovies = [
    {
      id: 9,
      title: "The Grand Budapest Hotel",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=225&fit=crop",
      year: "2014",
      rating: "8.1"
    },
    {
      id: 10,
      title: "Knives Out",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
      year: "2019",
      rating: "7.9"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      
      <div className="relative z-10 -mt-32">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Action & Adventure" movies={actionMovies} />
        <MovieRow title="Comedies" movies={comedyMovies} />
        <MovieRow title="My List" movies={trendingMovies.slice(0, 3)} />
      </div>
    </div>
  );
};

export default Index;
