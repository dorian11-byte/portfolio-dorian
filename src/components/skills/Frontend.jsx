import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h2 className="skills__title"> Frontend Developer </h2>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-javascript skills__icon'></i>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-html5 skills__icon'></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-css3 skills__icon'></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-react skills__icon'></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check skills__icon'></i>
                    <div>
                        <h3 className="skills__name">Boostrap</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-git skills__icon'></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-tailwind-css skills__icon'></i>
                    <div>
                        <h3 className="skills__name">Tailwind</h3>
                        <span className="skills__level">Basics</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend