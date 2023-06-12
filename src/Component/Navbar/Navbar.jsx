import React from 'react'
import './Navbar.css'
import logo1 from '../../img/logo1.png'
import user from '../../img/admin.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (

    <div className="n-wrapper nav">
      <div className="n-left">
          <div className="n-name">Farm</div>
          <img src={logo1} class="im1"alt="" />
      </div>
      <div className="n-right">
          <div className="n-list">
              <ul style={{listStyleType:'none' ,color:'black'}}>

                  <li><Link to='/' class="header__navbar-item-link"  href=" ">Trang Chủ</Link></li>
                  <li><Link to='/caytrong' class="header__navbar-item-link" href=" " >Cây trồng</Link></li>
                  <li><Link to='/vatnuoi' class="header__navbar-item-link" href=" " >Vật Nuôi</Link></li>
              </ul>
          </div>
           <Link to='/login'>
            <img class="img2" src={user} alt="" />
           </Link>
          
      </div>
     </div>
    

  )
}

export default Navbar