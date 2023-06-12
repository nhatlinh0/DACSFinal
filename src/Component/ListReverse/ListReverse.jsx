import React from 'react'
import './ListReverse.css'
import '../List/List.css'
const ListReverse = ({img1,title1,des1}) => {
  return (
      <div class="crop-animal">
          <div class="crop-animal-item crop-animal-item--reverse">
              <img src={img1}alt="" class="crop-animal-item_img"/>
              <div class="crop-animal-item-desc--reverse">
                  <h3 class="crop-animal-item-desc__title">{title1}</h3>
                  <p class="crop-animal-item-desc__content">{des1}
                  </p>
                  <a href=" " class="crop-animal-item-desc-link">
                      <button class="crop-animal-item-desc__button">Xem thêm</button>
                  </a>
          </div>
        </div>
    </div>
  )
}

export default ListReverse