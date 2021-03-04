import React from 'react'
import scrollHook from './scrollHook';

import './index.scss'

const ScrollProgess =  () => {
  const [scrollPer, scrollEventListener] = scrollHook();

  React.useEffect(() => {
    const scrollEvent = document.addEventListener('scroll', () => {
      requestAnimationFrame(scrollEventListener);
    });

    return document.removeEventListener('scroll', scrollEvent);
  }, [scrollEventListener])

  return (
    <div className="scroll-progress-wrapper">
      <div className="scroll-progress-outer">
        <div className="scroll-progress" style={{width: `${scrollPer}%`}}></div>
      </div>
    </div>
  )
}

export default ScrollProgess