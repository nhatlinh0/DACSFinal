import React from 'react'
import Agri from '../Home/Agri/Agri'
import Ani from '../Home/Ani/Ani'
import Footer from '../Footer/Footer'
import Intro from '../Title/Title'
import Atiso from '../../img/atiso.jpg'
import logocfarm from '../../img/logo1.png'
import user from '../../img/admin.png'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>   
         <Intro
          title={'Quy trình phát triển cây trồng vật nuôi'}
          img={Atiso }
    />
      <Agri/>
      <Ani/>
      <Footer/>
    </div>

    
  )
}

export default Home