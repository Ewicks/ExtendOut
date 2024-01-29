import React, { useState, useEffect } from 'react';
import Posts from '../components/Posts';
import { blogData } from '../dummy';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = () => {
      const data = blogData();
      setLoading(true);
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='gallary-padding'>
      <div className="row my-5">
        <div className="col">
          <h1>blog posts</h1>
        </div>
      </div>
      <div className="container">
        <Posts posts={currentPosts} loading={loading} />

        
      </div>
      <ul className="pagination">
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <a href="#!" className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Blog;
