import React from 'react';

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">BRAHAM.O.M.</h1>
        <h3 className="home__subtitle">Software Developer</h3>
        <p className="home__description">I'm a software developer specializing in React, Next.js, and Django, creating fast, secure, and scalable web solutions. I blend performance with cybersecurity best practices to build smarter digital experiences.</p>
        <a href="#contact" className="button button--flex">
            Say Hello
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill='none'
                class='button__icon'
            >
                <path 
                    d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"
                    fill='var(--container-color)'
                ></path>
            </svg>
        </a>
    </div>
  );
};

export default Data;
