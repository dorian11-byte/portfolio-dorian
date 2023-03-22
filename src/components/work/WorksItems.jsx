import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      
        <img src={item.img} alt="" className="work__img" />
        <h3 className="work__title">{item.title} | <span className="work__subtitle">{item.category}</span> </h3>
        
        <a href=" " className="work__button">
            View <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorksItems