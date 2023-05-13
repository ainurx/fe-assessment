import React from 'react'

const Skeleton = ({imgStyle, dateStyle, titleStyle, descStyle}) =>{
  
  return (
    <div className="card mt-1 mb-1" style={{ height: '100%', width: '100%', boxShadow: 'none'}}>
      <div className='card-image'>
        <div className='skeleton' style={{...imgStyle}}></div>
      </div>
      <div className="card-content pr-0 pl-0">
        <div className="media">
          <div className="media-content">
            <div className='skeleton' style={{...dateStyle}}></div>
            <div className='skeleton' style={{...titleStyle}}></div>
            <div className='skeleton' style={{...descStyle}}></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skeleton