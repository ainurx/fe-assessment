import React from 'react'

const BlogCard = ({ title, date, description, image}) => {
  return(
    <div className="card transform-card is-clickable is-transparent mt-1 mb-1">
      <div className="card-image">
        <figure className="image is-5by3">
          <img className='has-ratio' style={{ borderRadius: '8px'}} src={image} alt={title}/>
        </figure>
      </div>
      <div className="card-content pr-0 pl-0">
        <div className="media">
          <div className="media-content">
            <p className="subtitle is-6 mb-2">{date}</p>
            <p className='is-family-secondary has-text-black is-size-4 mb-2 has-text-weight-bold'>{title}</p>
            <p>{description}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BlogCard