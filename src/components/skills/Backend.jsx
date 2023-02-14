import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title"> Backend Developer </h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bxl-python skills__icon'></i>
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxl-php skills__icon'></i>
                        <div>
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxs-data skills__icon'></i>
                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bxl-django skills__icon'></i>
                        <div>
                            <h3 className="skills__name">Django</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxl-firebase skills__icon'></i>
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check skills__icon'></i>
                        <div>
                            <h3 className="skills__name">REST API</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxl-nodejs skills__icon'></i>
                        <div>
                            <h3 className="skills__name">Node JS</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Backend