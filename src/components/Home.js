import React from 'react';
import image from '../quilt7.jpg';

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="Quilt and tools"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-white font-bold leading-none lg:leading-snug">
          Welcome to my Quilts Gallery
        </h1>
      </section>
    </main>
  );
};

export default Home;
