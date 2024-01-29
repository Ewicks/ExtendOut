import React from 'react';

function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='row row-cols-1 row-cols-md-3'>
      {posts.map((post, index) => (
        <div className='col mb-4' key={index}>
          <div className='card'>
            <img className='card-img-top' src={post.image} alt={post.title} />
            <div className='card-body'>
              <h3 className='card-title'>{post.title}</h3>
              <p className='card-text'>{post.text}</p>
              {/* <a href="#" className='blog-btn'>Contact Us</a> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
