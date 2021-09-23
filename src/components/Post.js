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

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center mb-12">Blog Posts Page</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my blog
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full w-full justify-end items-end pb-4">
                      <h3 className="text-gray-200 text-lg font-bold px-3 py-4 bg-red-700 bg-opacity-75 rounded">
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
