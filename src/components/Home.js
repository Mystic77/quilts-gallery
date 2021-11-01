import React from 'react';
import Quilt from '../quilt7.jpg';

const Home = () => {
  return (
    <main className="bg-black min-h-screen">
      <section className="container mx-auto grid grid-cols-2">
        <div>
          <h1 className="text-6xl text-gray-300 flex justify-left font-bold leading-none lg:leading-snug pt-12 poiret">
            Welcome to Art Quilts
          </h1>
          <div className="mx-48">
            <h2 className="text-5xl text-gray-300 flex font-bold leading-none lg:leading-snug pt-12 poiret">
              Artisanal
            </h2>
            <h2 className="text-5xl text-gray-300 flex font-bold leading-none lg:leading-snug pt-12 poiret">
              Patchwork
            </h2>
            <h2 className="text-5xl text-gray-300 flex font-bold leading-none lg:leading-snug pt-12 poiret">
              Art
            </h2>
          </div>
        </div>
        <div className="pt-12">
          <img className="rounded-md" src={Quilt} alt="quilt carousel" />
        </div>
      </section>
    </main>
  );
};

export default Home;
