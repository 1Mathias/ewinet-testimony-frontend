import React from 'react';
import './video.css';

export default function video({src, url}) {
  return (
    <div>
              {/* <iframe src={src}
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
        /> */}
        <a href={src} target="_blank">
            <img className='image' src={url} />
        </a>
        </div>
  )
}
