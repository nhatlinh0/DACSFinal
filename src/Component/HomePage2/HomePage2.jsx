import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../HomePage1/HomePage.css'
import Intro from '../Title/Title'
import Lon from '../../img/heo.png'
import List from '../List/List'
import ListReverse from '../ListReverse/ListReverse'
import Lon1 from '../../img/heo2.png'
import Bothit from '../../img/bothit.png'
import Vit from '../../img/vit.png'
import Ga from '../../img/gamai.png'
import Bosua from '../../img/bosua.png'
import Footer from '../Footer/Footer'
import logocfarm from '../../img/logo1.png'
import user from '../../img/admin.png'

const HomePage2 = () => {
  return (
    <div className="animal">
      <Navbar></Navbar>

    <Intro
          title={'Quy trình phát triển vật nuôi'}
          img={Lon }
    />
    <Link  className='custom-link'  to="/lon">
      <List
          img={Lon1}
          title={'Con lợn'}
          des={'Đàn lợn nuôi lấy thịt sẽ phát triển theo 3 giai đoạn được phân chia dựa vào đặc điểm sinh lý, quy luật sinh trưởng của lợn'}
      />
    </Link>
    <Link  className='custom-link'  to="/bothit">
    <ListReverse   img1={Bothit}
        title1={'Con bò thịt'}
        des1={'- Bò sơ sinh có cân nặng trung bình khoảng 30kg và cao khoảng 70-80cm. T Trong giai đoạn này, bò phát triển rất nhanh trong khoảng 3 tháng.Tăng chiều cao và kích thước cơ thể: Bò ấu trùng cũng tăng chiều cao và kích thước cơ thể, '}
    />
    </Link>
    <Link  className='custom-link'  to="/bosua">
     <List
        img={Bosua}
        title={'Con bò sữa'}
        des={'- Bò con mới sinh ra có trọng lượng khoảng 25-45kg. Thân thể còn nhỏ bé và yếu ớt. Chưa có răng, chỉ có răng sữa. Sức đề kháng còn yếu, dễ mắc bệnh'}
    />
    </Link>
    <Link  className='custom-link'  to="/ga">
    <ListReverse
        img1={Ga}
        title1={'Con gà'}
        des1={'- Thời gian: khoảng 21 ngày. - Hình dạng: Trứng gà có hình dạng hình trứng với đầu nhọn hơi vòng cung về một bên, phần thân trứng thon dài và phần đuôi có hình dạng nhọn'}
    />
    </Link>
    <Link  className='custom-link'  to="/vit">
     <List
        img={Vit}
        title={'Con vịt'}
        des={'Trứng vịt cần được ấp trứng trong vòng khoảng 28-35 ngày để nở ra thành vịt con.Trứng vịt: Trứng vịt thường có màu trắng hoặc kem, bề mặt có màng bảo vệ bóng loáng và cảm giác trơn tru khi sờ vào. Trong quá trình ấp trứng,'}
      />
      </Link>
    <Footer/>
   </div>
  )
}

export default HomePage2