import React from 'react';

const ImageTag = ({ src, title }) => {
  return (
    <div>
        <img className='imageTag' src={src} alt={title} />
    </div>
  )
}

export default ImageTag