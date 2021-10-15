import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

const Post = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  if (!postData)
    return (
      <div className="relative text-gray-300 bg-gray-900 min-h-screen p-12">
        Loading...
      </div>
    );

  return (
    <main className="bg-gray-900 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center mb-12 text-gray-300 cursive">
          Gallery
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link
                  to={'/gallery/' + post.slug.current}
                  key={post.slug.current}
                >
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-md object-cover absolute"
                    />
                    <span className="block relative h-full w-full justify-end items-end pb-4">
                      <h3 className=" text-gray-200 text-lg font-bold px-3 py-4 bg-green-900 bg-opacity-75 rounded">
                        {' '}
                        {post.title}{' '}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Post;
