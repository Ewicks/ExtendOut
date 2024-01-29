import React from 'react';

function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='d-flex gap-5 flex-wrap justify-content-center align-items-center'>
      {posts.map((post, index) => (
          <div className='blog-card' key={index}>
              <img className='blog-img' src={post.image} alt="" />

              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <a href="#" className='blog-btn'>Contact Us</a>
          </div>
      ))}
    </div>
  );
}

export default Posts;
