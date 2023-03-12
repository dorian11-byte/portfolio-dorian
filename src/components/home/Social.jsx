import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a 
            href="https://www.linkedin.com/in/dorian-raygoza/" 
            className="home__social-icon" 
            target="_blank" rel="noopener noreferrer"
        >
            <i class="uil uil-linkedin"></i>
        </a>

        <a 
            href="https://github.com/dorian11-byte/" 
            className="home__social-icon" 
            target="_blank" rel="noopener noreferrer"
        >
            <i class="uil uil-github"></i>
        </a>

        <a 
            href="https://www.behance.net/dorianraygoza11" 
            className="home__social-icon" 
            target="_blank" rel="noopener noreferrer"
        >
            <i class="uil uil-behance"></i>
        </a>
    </div>
  )
}

export default Social