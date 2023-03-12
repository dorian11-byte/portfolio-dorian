import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h1 className="footer__title"> Software Engenieer | Dorian Raygoza </h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">Qualifications</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.facebook.com/DdorianSsamuel"
                        className="footer__social-link"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a
                        href="https://www.instagram.com/doriansam11/"
                        className="footer__social-link"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <i class="bx bxl-instagram"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Dorian Raygoza Dev - All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer