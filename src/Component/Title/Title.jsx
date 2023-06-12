import React from 'react'
import './Title.css'

const Intro = ({title,img}) => {
  return (
    <div className="title main-ellipse">
                    <div class="title__first-ellipse"></div>
                    <div class="title__second-ellipse"></div>
                    <h1 class="title__text">
                      {title}
                    </h1>
                    <img src={img} class="title__img title__img--mainpage" alt="" />
    </div>
  )
}

export default Intro