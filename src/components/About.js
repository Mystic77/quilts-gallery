import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import ImageUrlBuilder from '@sanity/image-url';
import Blockcontent from '@sanity/block-content-to-react';

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className="relative text-gray-300 bg-gray-900 min-h-screen p-12">
        Loading...
      </div>
    );

  return (
    <main className="relative bg-gray-900 min-h-screen p-12">
      <h1 className="text-5xl flex justify-center mb-12 text-gray-300 cursive">
        About
      </h1>
      <div className="p-10 lg:pt-12 container mx-auto relative">
        <section className="text-gray-300 lg:flex p-20 ">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-100 lg:w-64 lg:h-100 mr-8 object-cover"
            alt={author.name}
          />
          <div className="text-lg flex flex-col ">
            <h1 classname="text-6xl">
              Hey there, I'm <span>{author.name}</span>
            </h1>
            <div classname="prose lg:prose-xl">
              <Blockcontent
                blocks={author.bio}
                projectId="c6ge4zek"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
