import React from 'react';
import './ScrollButton.css';

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={handleClick} className='scroll__button'>
      🔝
    </button>
  );
};

export default ScrollToTopButton;
