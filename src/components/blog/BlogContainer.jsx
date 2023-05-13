import React, { useState, useEffect } from 'react'

import FirstBlog from './FirstBlog'
import BlogCard from './BlogCard'
import Skeleton from './Skeleton'

import { data } from '../../assets/data'

const BlogContainer = () => {
  const [firstBlog, setFirstBlog] = useState({})
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      const dataCopy = data.slice(1, 7)
      setFirstBlog(data[0])
      setBlogs(dataCopy)

      setLoading(false)
    }, 1500)
  }, [])

  return(

    <>
      <h1 className='is-family-secondary has-text-black is-size-1 has-text-weight-bold mb-6 primary'>The Blog</h1>
        <FirstBlog
          title={firstBlog.title}
          image={firstBlog.image}
          date={firstBlog.date}
          description={firstBlog.description}
          loading={loading}
        />
      <div className="columns is-multiline">
        {
          blogs.length === 0 && loading ?
            [0, 1, 2].map(d=>(
              <div key={d} className="column is-one-third">
                <Skeleton
                  imgStyle={{ width: '100%', height: '160px'}}
                  dateStyle={{ width: '50px', height: '12px', marginBottom: '2px'}}
                  titleStyle={{ width: '100%', height: '18px', marginBottom: '2px'}}
                  descStyle={{ width: '100%', height: '12px'}}
                />
              </div>
            ))
            :
            blogs.map((b, index)=>(
              <div key={`${index}-b.title`} className="column is-one-third">
                <BlogCard
                  title={b.title}
                  image={b.image}
                  date={b.date}
                  description={b.description}
                  loading={loading}
                  />
              </div>
            ))
        }
      </div>
    </>
  )
}

export default BlogContainer