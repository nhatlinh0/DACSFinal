import React from 'react'
import { Link } from 'react-router-dom'
import '../Agri/Agri.css'
import vit from '../../../img/vit.png'
import heo from '../../../img/heo.png'
import bo from '../../../img/bosua.png'
const Ani = () => {
  return (
    <div class="agri">
                    <h2 class="agri__title">
                        Một số vật nuôi
                    </h2>
                    <div class="agri__list">
                        <div class="agri__item">
                            <div class="agri__item-overlay">
                                <Link to='/lon' class="agri__item-seemore">Xem thêm</Link>
                            </div>
                           <img src={heo} class="agri__item-img" alt="" />
                            <h3 class="agri__item-title">
                                Con Lợn
                            </h3>
                            <p class="agri__item-content">
                                Các giai đoạn sinh trưởng của con lợn: <br/>
                                Đàn lợn nuôi lấy thịt sẽ phát triển theo 3 giai đoạn được phân chia dựa vào 
                                đặc điểm sinh lý, quy luật sinh trưởng của con lợn...
                            </p>
                        </div>
                        <div class="agri__item">
                            <div class="agri__item-overlay">
                                <Link to = '/bosua' class="agri__item-seemore">Xem thêm</Link>
                            </div>
                            <img src={bo} class="agri__item-img" alt="" />
                            <h3 class="agri__item-title">
                                Con Bò sữa
                            </h3>
                            <p class="agri__item-content">
                                Các giai đoạn sinh trưởng của con lợn: <br/>
                                Đàn lợn nuôi lấy thịt sẽ phát triển theo 3 giai đoạn được phân chia dựa vào 
                                đặc điểm sinh lý, quy luật sinh trưởng của con lợn...
                            </p>
                        </div>
                        <div class="agri__item">
                            <div class="agri__item-overlay">
                                <Link to='/vit' class="agri__item-seemore">Xem thêm</Link>
                            </div>
                           <img src={vit} class="agri__item-img" alt="" />
                            <h3 class="agri__item-title">
                                Con Vịt
                            </h3>
                            <p class="agri__item-content">
                                Các giai đoạn sinh trưởng của con lợn: <br/>
                                Đàn lợn nuôi lấy thịt sẽ phát triển theo 3 giai đoạn được phân chia dựa vào 
                                đặc điểm sinh lý, quy luật sinh trưởng của con lợn...
                            </p>
                        </div>
                    </div>
                </div>
            

  )
}

export default Ani