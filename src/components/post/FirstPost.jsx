import React, { useState } from 'react'

const FirstPost = ({ title, date, description }) =>{
  return(
    <div className='columns is-clickable'>
      <div className='column is-three-fifths'>
        <img style={{ borderRadius: '8px'}} src={require('../../assets/img/11299314_4706614.jpg')} alt="First post"/>
      </div>
      <div className='column'>
        <div style={{ width: '66%'}}>
          <p>{date}</p>
          <p className='title-font is-size-1 has-text-weight-bold'>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default FirstPost