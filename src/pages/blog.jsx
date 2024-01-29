import React from 'react'
import { useEffect, useState } from 'react';
import Posts from '../components/Posts';
import { blogData } from '../dummy';




function Blog() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = () => {
      const data = blogData();
      setLoading(true)
      setPosts(data)
      console.log(data)
      setLoading(false)

    };

    fetchPosts()

  }, [])

  return (
    <div className='gallary-padding'>
      <div className="row">
        <div className="col">
          <h1>blog posts</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Posts posts={posts} loading={loading} />
        </div>
      </div>
    </div>
  )
}

export default Blog