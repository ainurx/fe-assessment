import React from 'react'

const PostCard = ({ title, date, description}) => {
  return(
    <div class="card is-clickable is-transparent" style={{ boxShadow: 'none'}}>
      <div class="card-image">
        <figure class="image is-5by3">
          <img className='has-ratio' style={{ borderRadius: '8px'}} src={require('../../assets/img/11299312_4721189.jpg')} alt={title}/>
        </figure>
      </div>
      <div class="card-content pr-0 pl-0">
        <div class="media">
          <div class="media-content">
            <p class="subtitle is-6 mb-2">{date}</p>
            <p className='title-font is-size-4 mb-2 has-text-weight-bold'>{title}</p>
            <p>{description}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PostCard