import React, { useState, useEffect } from 'react'

import FirstPost from './FirstPost'
import PostCard from './PostCard'

import { data } from '../../assets/data'

const PostContainer = () => {
  const [firstBlog, setFirstBlog] = useState({})
  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
    const dataCopy = data.slice(1, 7)

    setFirstBlog(data[0])
    setBlogs(dataCopy)
  }, [])

  return(
    <>
      <h1 className='title-font is-size-1 has-text-weight-bold mb-6'>The Blog</h1>
      <FirstPost
        title={firstBlog.title}
        date={firstBlog.date}
        description={firstBlog.description}
      />
      <div class="columns is-multiline">
        {
          blogs.map((b)=>(
            <div key={b} class="column is-one-third">
              <PostCard
                title={b.title}
                date={b.date}
                description={b.description}
                />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default PostContainer