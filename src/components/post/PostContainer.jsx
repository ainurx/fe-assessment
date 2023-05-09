import React from 'react'

import PostCard from './PostCard'

const PostContainer = () => {
  return(
    <>
    <div class="columns">
      {
        [0, 1, 2].map((d)=>(
          <div key={d} class="column is-one-third">
            <PostCard/>
          </div>
        ))
      }
    </div>
    <div class="columns">
      {
        [0, 1, 2].map((d)=>(
          <div key={d} class="column is-one-third">
            <PostCard/>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default PostContainer