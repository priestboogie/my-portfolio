import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
        <a 
            href="https://www.linkedin.com/in/zablon-ombiri-6a7ab2254" 
            className="home__social-icon" 
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="uil uil-linkedin"></i>
        </a>
        <a 
            href="https://github.com/Zambagarrah" 
            className='home__social-icon' 
            target='_blank'
            rel="noopener noreferrer"
        >
            <i class="uil uil-github-alt"></i>
        </a>
        <a 
            href="mailto:zablonombiri001@gmail.com" 
            className='home__social-icon' 
            target='_blank'
            rel="noopener noreferrer"
        >
            <i class="bx bx-mail-send"></i>
        </a>
    </div>
  );
};

export default Social;
