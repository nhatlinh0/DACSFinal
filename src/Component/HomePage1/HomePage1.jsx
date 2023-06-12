import React from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css'
import Intro from '../Title/Title'
import Che from '../../img/che1.png'
import List from '../List/List'
import ListReverse from '../ListReverse/ListReverse'
import Caphe from '../../img/caphe.png'
import Caosu from '../../img/caosu.png'
import Che1 from '../../img/che.png'
import Tuong from '../../img/tuong.png'
import Lac from '../../img/lac.png'
import Mia from '../../img/mia.png'
import Bong from '../../img/bong.png'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
import logocfarm from '../../img/logo1.png'
import user from '../../img/admin.png'



const HomePage1 = () => {
  return (
   <div className="crop">
    
<Navbar></Navbar>
    <Intro
          title={'Quy trình phát triển cây trồng'}
          img={Che }
    />
    <Link  className='custom-link'  to="/caosu">
        <List className='custom'
            img={Caosu}
            title={'Cây cao su'}
            des={'CÁC GIAI ĐOẠN SINH TRƯỞNG CỦA CÂY CAO SU Cây cao su sau một thời gian trồng từ 3-5 năm tuỳ theo giống, loại cây con và điều kiện ngoại cảnh chúng có thể ra hoa lần đầu và cứ như thế hàng năm cây có thể cho hoa từ 1 đến 2 lần. Tuy nhiên ...'}
        />
    </Link>
    <Link className='custom-link' to="/caphe">
        <ListReverse
            img1={Caphe}
            title1={'Cây cà phê'}
            des1={'Giai đoạn sinh trưởng được tính từ khi hạt nảy mầm đến trước khi cây có hoa Thời kỳ vườn ươm:Sự nảy mầm của hạt và thời kỳ cây trong vườn ươm: Sau khi gieo hạt khoảng 2-3 tuần rễ sẽ xuất hiện, tiếp theo...'}
        />
    </Link>
    <Link  className='custom-link' to="/che">
        <List
            img={Che1}
            title={'Cây chè'}
            des={'Chè là cây lâu năm có 2 chu kỳ phát triển: Chu kỳ phát triển lớn và chu kỳ phát triển nhỏ. - Chu kỳ phát triển lớn: Chu kỳ phát triển lớn hay còn gọi là chu kỳ phát dục cá thể của cây chè bao gồm cả đời sống của cây chè, kể từ khi ...'}
        />
    </Link>
    <Link  className='custom-link' to="/mia">
        <ListReverse   
            img1={Mia}
            title1={'Cây Mía'}
            des1={'Các thời kỳ sinh trưởng phát triển. Chu kỳ sinh trưởng của cây mía thường là một năm ở vùng nhiệt đới và 2 năm ở các vùng có khí hậu đặc biệt . Chu kỳ sinh trưởng của cây mía được chia làm 5 thời kỳ.'}
        />
    </Link>
     <Link className='custom-link'to="/dautuong">
        <List
            img={Tuong}
            title={'Cây Đậu Tương'}
            des={'Sau khi hạt đậu tương hút được một lượng nước khoảng 50% trọng lượng hạt thìbắt đầu nảy mầm . Hạt đậu tương đủ nước có thể nảy mầm trong điều kiện nhiệt độ 8-120C, nhưng thích hợp là nhiệt độ từ 18-260C,'}
        />
    </Link>
    <Link  className='custom-link' to="/lac">
        <ListReverse
            img1={Lac}
            title1={'Cây lạc'}
            des1={'Chu kỳ sinh trưởng phát triển của cây lạc biến động lớn từ 85-160 ngày. Sự biến động này phụ thuộc đặc tính di truyền của từng giống và điều kiện môi trường. Tại Việt Nam bên cạnh các giống lạc địa phương đã có hàng trăm giống và dòng lạc nhập nội. Các giống này hầu hết có chu kỳ sinh trưởng từ 90-135 ngày'}
        />
    </Link>
     <Link    className='custom-link' to="/caybong">
        <List
            img={Bong}
            title={'Cây Bông'}
            des={'Cây bông vốn là cây lâu năm, sau khi được di chuyển lên vùng khí hậu lạnh mùa đông trở thành cây hàng năm. Nhưng nếu trồng ở vùng nhiệt đới, ẩm và mưa nhiều thì có thể phục hồi tập tính lưu niên.'}
        />
    </Link>
    <Footer/>

   </div>
  )
}

export default HomePage1