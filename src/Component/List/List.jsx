import React from 'react'
import './List.css'

const List = ({img,title,des}) => {
  return (
    

    <div class="crop-animal">
        <div class="crop-animal-item">
            <img src={img} alt="" class="crop-animal-item_img"/>
            <div class="crop-animal-item__desc">
                <h3 class="crop-animal-item-desc__title">{title}</h3>
                <p class="crop-animal-item-desc__content">{des}
                </p>
                <a href=" " class="crop-animal-item-desc-link">
                    <button class="crop-animal-item-desc__button">Xem thêm</button>
                </a>
            </div>
        </div>

       

        
    </div>
    
  )
}

export default List