import React from 'react';

function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='gallary-container'>
      {posts.map((post, index) => (
          <div className='blog-card' key={index}>
              <img className='blog-img' src={post.image} alt="" />

              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <a href="#" className='btn contact-btn'>Contact Us</a>
          {/* Display other properties of the post as needed */}
          </div>
      ))}
    </div>
  );
}

export default Posts;
