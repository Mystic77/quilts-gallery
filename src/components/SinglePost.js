import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import ImageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      dimensions,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url,
        }
      },
      body,
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div className="bg-black">Loading...</div>;

  return (
    <main className="bg-black min-h-screen p-12">
      <article className="container shadow-lg mx-auto rounded-lg">
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full grid lg:grid-cols-2">
          <div className="mr-8">
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="w-full object-cover rounded"
              style={{ height: '400px' }}
            />
          </div>
          <div className="max-w-4xl text-gray-200">
            <h1 className="mb-2">
              <span>Title: </span>
              {singlePost.title}
            </h1>
            <h3 className="mb-2">
              <span>Dimensions: </span> {singlePost.dimensions}
            </h3>
            <BlockContent
              blocks={singlePost.body}
              projectId="c6ge4zek"
              dataset="production"
            />
          </div>
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
