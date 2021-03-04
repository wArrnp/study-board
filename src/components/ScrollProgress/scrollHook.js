/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'

function getDocumentHeight() {
  return Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
}


function scrollHook () {
  const [scrollPer, setScrollPer] = React.useState(0);

  const scrollEventListener = () => {
    const documentHeight = getDocumentHeight();
    const scrollPosition = window.pageYOffset;
    const viewHeightSize = window.innerHeight;
    
    setScrollPer(scrollPosition / (documentHeight - viewHeightSize) * 100);
  }

  return [scrollPer, scrollEventListener];
}

export default scrollHook;