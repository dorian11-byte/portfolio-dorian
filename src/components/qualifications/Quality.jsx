import React from 'react'
import { useState } from 'react'
import './quality.css'

const Quality = () => {


const [toggleState, settoggleState] = useState(1)

const toggleTab = (index) => {
    settoggleState(index)
}

  return (
    <section className="qa section" id="qualification">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My Profesional Career</span>

        <div className="qa__container container">
            <div className="qa__tabs">
                <div className={toggleState === 1 ? 
                    "qa__button qa__active button--flex" 
                    : "qa__button button--flex"}
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap 
                    qa__icon"></i>
                    Education
                </div>

                <div className={toggleState === 2 ? 
                    "qa__button qa__active button--flex" 
                    : "qa__button button--flex"}
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt 
                    qa__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qa__sections">
                {/* Qualification Content Education */}
                <div className={toggleState === 1 ? "qa__content qa__content-active" : "qa__content"}>
                    <div className="qa__data">
                        <div>
                            <h3 className="qa__title"> Software Engineer</h3>
                            <span className="qa__subtitle">Manzanillo - Universidad de Colima</span>
                            <div className="qa__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> 2023 - Present 
                            </div>
                        </div>
                        <div>
                            <span className="qa__rounder"></span>
                            <span className="qa__line"></span>
                        </div>
                    </div>

                    <div className="qa__data">
                        <div></div>
                        <div>
                            <span className="qa__rounder"></span>
                            <span className="qa__line"></span>
                        </div>
                        <div>
                            <h3 className="qa__title"> FrontEnd Specialist</h3>
                            <span className="qa__subtitle">Online - Alura Latam | Oracle Next Education</span>
                            <div className="qa__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> 2022 - 2023
                            </div>
                        </div>
                    </div>

                    <div className="qa__data">
                        <div>
                            <h3 className="qa__title"> Technical Programmer Analyst</h3>
                            <span className="qa__subtitle">Manzanillo - Universidad de Colima</span>
                            <div className="qa__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> 2017 - 2020
                            </div>
                        </div>
                        <div>
                            <span className="qa__rounder"></span>
                            <span className="qa__line"></span>
                        </div>
                    </div>

                    <div className="qa__data">
                        <div></div>

                        <div>
                            <span className="qa__rounder"></span>
                            <span className="qa__line"></span>
                        </div>

                        <div>
                            <h3 className="qa__title"> Master in React</h3>
                            <span className="qa__subtitle">Online - Udemy Courses</span>
                            <div className="qa__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> 2021 - 2022
                            </div>
                        </div>
                    </div>
                </div>

                {/* Qualification Content Experience */}
                <div className={toggleState === 2 ? "qa__content qa__content-active" : "qa__content"}>
                    <div className="qa__data">
                        <div>
                            <h3 className="qa__title"> Web Application Developer</h3>
                            <span className="qa__subtitle">DOHA Logistics - Remote Work</span>
                            <div className="qa__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> 2023 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qa__rounder"></span>
                            <span className="qa__line"></span>
                        </div>
                    </div>

                    <div className="qa__data">
                        <div></div>

                        <div>
                            <span className="qa__rounder"></span>
                            <span className="qa__line"></span>
                        </div>

                        <div>
                            <h3 className="qa__title"> WordPress Programmer</h3>
                            <span className="qa__subtitle">UX Neighbor - Remote Work</span>
                            <div className="qa__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> Nov. 2022 - Dic. 2022
                            </div>
                        </div>
                    </div>

                    <div className="qa__data">
                        <div>
                            <h3 className="qa__title"> Graphic Designer </h3>
                            <span className="qa__subtitle">Varca Sports SA de CV - Manzanillo, Col.</span>
                            <div className="qa__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> 2019 - 2022
                            </div>
                        </div>
                        <div>
                            <span className="qa__rounder"></span>
                            <span className="qa__line"></span>
                        </div>
                    </div>

                    <div className="qa__data">
                        <div></div>

                        <div>
                            <span className="qa__rounder"></span>
                            <span className="qa__line"></span>
                        </div>

                        <div>
                            <h3 className="qa__title"> Web and Mobile Designer</h3>
                            <span className="qa__subtitle">Ilimita - Remote Work with Figma</span>
                            <div className="qa__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> 2022 - 2023
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quality