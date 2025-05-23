import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Braham</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonial" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a 
                    href="https://www.facebook.com/" 
                    className='footer__social-link' 
                    target='_blank'
                >
                    <i class="bx bxs-phone"></i>
                </a>
                <a 
                    href="https://www.instagram.com/" 
                    className='footer__social-link' 
                    target='_blank'
                >
                    <i class="bx bxs-message"></i>
                </a>
                <a 
                    href="https://api.whatsapp.com/send?phone=254705959986&text=Hello, just form your website, more Information!" 
                    className='footer__social-link' 
                    target='_blank'
                >
                    < i class='bx bxl-whatsapp'></i> 
                </a>
            </div>
            <span className="footer__copy">
                &#169; Braham.M.O. All Rights Reserved
            </span>
        </div>
    </footer>
  );
};

export default Footer;
