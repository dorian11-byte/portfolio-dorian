import React from 'react'
import './about.css'
import AboutImg from '../../assets/Image.png'
import Info from './Info'
import CV from '../../assets/CV.pdf'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">
                    Software Engineer with 3+ years of experience in the IT industry. Working with differents
                    technologies and programming languages. I have a passion for learning new technologies and
                    always looking for new challenges and opportunities. Desing and development of web applications
                    and mobile applications.
                </p>

                <a download="" href={CV} className="button button--flex"></a>
            </div>
        </div>
    </section>
  )
}

export default About