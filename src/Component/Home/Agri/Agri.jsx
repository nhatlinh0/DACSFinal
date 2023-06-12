import React from 'react'
import { Link } from 'react-router-dom'
import './Agri.css'
import caosu from "../../../img/caycaosu.png"
import caphe from "../../../img/caphe.png"
import che from "../../../img/che.png"
const Agri = () => {
  return (
    <div class="agri">
         <h2 class="agri__title">
                        Một số loại cây
         </h2>
                    <div class="agri__list">
                        <div class="agri__item">
                            <div class="agri__item-overlay">
                                <Link to='/caosu' class="agri__item-seemore">Xem thêm</Link>
                            </div>
                        <img src={caosu} class="agri__item-img" alt="" />
                            <h3 class="agri__item-title">
                                Cây Cao Su
                            </h3>
                            <p class="agri__item-content">
                                CÁC GIAI ĐOẠN SINH TRƯỞNG CỦA CÂY CAO SU: <br/>
                                Cây cao su sau một thời gian trồng từ 3-5 năm tuỳ theo giống, loại cây con 
                                và điều kiện ... 
                            </p>
                        </div>
                      
                        
                        <div class="agri__item">
                            <div class="agri__item-overlay">
                                <Link to='/caphe' class="agri__item-seemore">Xem thêm</Link>
                            </div>
                           <img src={caphe} class="agri__item-img" alt="" />
                            <h3 class="agri__item-title">
                                Cây Cà phê
                            </h3>
                            <p class="agri__item-content">
                                CÁC GIAI ĐOẠN SINH TRƯỞNG CỦA CÂY CÀ PHÊ: <br/>
                                Cây cao su sau một thời gian trồng từ 3-5 năm tuỳ theo giống, loại cây con 
                                và điều kiện...
                            </p>
                        </div>
                        <div class="agri__item">
                            <div class="agri__item-overlay">
                                <Link to='/che' class="agri__item-seemore">Xem thêm</Link>
                            </div>
                            <img src={che} class="agri__item-img" alt="" />
                            <h3 class="agri__item-title">
                                Cây Chè
                            </h3>
                            <p class="agri__item-content">
                                CÁC GIAI ĐOẠN SINH TRƯỞNG CỦA CÂY CAO SU: <br/>
                                Cây cao su sau một thời gian trồng từ 3-5 năm tuỳ theo giống, loại cây con 
                                và điều kiện...
                            </p>
                        </div>
                    </div>           
    </div>

  )
}

export default Agri