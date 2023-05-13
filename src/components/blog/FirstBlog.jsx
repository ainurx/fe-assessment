import React from 'react'

const Skeleton = ({style}) => <div className='skeleton' style={{...style}}></div>

const FirstBLog = ({ title, date, description, image, loading }) =>{

  return(
    <div className={`card is-transparent mb-2 ${!loading && 'transform-card'}`}>
      <div className='columns is-clickable'>
        <div className='column is-three-fifths'>
          {
            loading ? 
            <Skeleton style={{height: '360px', width: '100%'}}/>
            :
            <img style={{ borderRadius: '8px'}} src={image} alt="First post"/>
          }
        </div>
        <div className='column'>
          <div style={{ width: '66%'}}>
            {
              loading ?
              <>
                <Skeleton style={{ width: '62px', height: '14px', marginBottom: '4px'}}/>
                <Skeleton style={{ width: '100%', height: '32px', marginBottom: '4px'}}/>
                <Skeleton style={{ width: '60%', height: '64px'}}/>
              </>
              :
              <>
                <p className="subtitle is-6 mb-2">{date}</p>
                <p className='is-family-secondary has-text-black is-size-2 has-text-weight-bold'>{title}</p>
                <p>{description}</p>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstBLog