import React, { useState } from 'react';
import '../HomePage1/CrChe.css'
import bothit1 from '../../img/bo2.png'
import bothit2 from '../../img/bo1.png'
import Intro from '../Title/Title'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const BoThit = () => {
  
  const [activeContent, setActiveContent] = useState(1);

  const handleItemClick = (index) => {
    if (activeContent === index) {
      setActiveContent(null);
    } else {
      setActiveContent(index);
    }
  };
  

  return (
    <div>
      <Navbar></Navbar>
        <Intro
          title={'Quy trình phát triển con bò thịt'}
          img={bothit1 }
        />
          <div class="crop-animal-item-detail">
            <img src={bothit2} alt="" class="crop-animal-item__img"
          />
            <div class="crop-animal-item-desc">
                <ul>
                  <li onClick={() => handleItemClick(1)}>1. sơ sinh (0-3 tháng tuổi):</li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 1 ? 'active' : ''}`}>
                             -	Bò sơ sinh có cân nặng trung bình khoảng 30kg và cao khoảng 70-80cm. T Trong giai đoạn này, bò phát triển rất nhanh trong khoảng 3 tháng. <br/>
                            -	Tăng chiều cao và kích thước cơ thể: Bò ấu trùng cũng tăng chiều cao và kích thước cơ thể, tuy nhiên, chúng vẫn còn yếu và dễ bị ảnh hưởng bởi môi trường xung quanh <br/>
                            -	Hệ tiêu hoá còn yếu: Hệ tiêu hoá của bò ấu trùng còn yếu, chúng cần được cung cấp chế độ ăn uống đúng cách để phát triển khỏe mạnh. <br/>
                            -	Các hoạt động chính trong giai đoạn này bao gồm bú sữa, vận động và phát triển các cơ quan.

                            * Yêu cầu chăm sóc <br/>
                            +Đảm bảo điều kiện sống: Cung cấp môi trường sống sạch sẽ, thoáng mát, không quá ồn ào và bụi bặm. <br/>
                            +Cung cấp thức ăn đầy đủ: Cung cấp thức ăn đủ dinh dưỡng, bao gồm thức ăn khô, cỏ khô, cỏ tươi, hạt và các loại rau củ, đảm bảo cung cấp đủ sữa mẹ hoặc sữa thay thế <br/>
                            +Cung cấp nước sạch: Đảm bảo cung cấp nước sạch, tươi để bò uống hàng ngày. <br/>
                            Đảm bảo sức khỏe: Thực hiện các biện pháp phòng bệnh, tiêm phòng định kỳ và kiểm tra sức khỏe định kỳ để đảm bảo sức khỏe cho bò. <br/>
                            +Tăng cường giám sát: Tăng cường giám sát, quan sát các biểu hiện bất thường của bò để kịp thời xử lý và giảm thiểu tỉ lệ tử vong.
                            <br/>
                  </div>
                  <li onClick={() => handleItemClick(2)}>2.Giai đoạn 3-6 tháng tuổi:</li>
                  <div
                    id="content-2"
                    className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                                        -	Tăng trọng lượng: Bò ở giai đoạn ấu dưỡng có thể tăng trọng lượng từ 100-200 kg , cao khoảng 1-1,2 m. Việc ăn uống và chăm sóc dinh dưỡng cần được quan tâm đặc biệt trong giai đoạn này.<br/>
                                        -	Thay đổi răng: Trong giai đoạn ấu dưỡng, bò bắt đầu thay đổi răng và sẽ có 28 răng lớn hoàn chỉnh vào cuối giai đoạn này.<br/>
                                        -	Phát triển cơ bắp và xương: Bò ở giai đoạn này phát triển cơ bắp và xương, giúp cho chúng có thể chuyển động linh hoạt hơn.<br/>
                                        -	Thay đổi lông: Trong giai đoạn này, bò cũng có thể thay đổi lông, một số loài bò sẽ đổi màu lông.<br/>
                                        -	Hoạt động chính trong giai đoạn này là tăng trưởng và phát triển cơ thể.
                                        -	Yêu cầu chăm sóc: cung cấp đủ thức ăn chất đạm và tinh bột đủ, cung cấp đủ nước uống sạch và thường xuyên được chăm sóc sức khỏe, tiêm phòng định kỳ để tránh các bệnh truyền nhiễm, đảm bảo vệ sinh để tránh bệnh tật.<br/>        

                    </div>
                    <li onClick={() => handleItemClick(3)}>3.Giai đoạn 6-18 tháng tuổi:</li>
                  <div
                    id="content-3"
                    className={`content-item ${activeContent === 3? 'active' : ''}`} >
                                        <br/>
                                        -	Bò ở giai đoạn này có cân nặng ( tăng trung bình từ 0,7 đến 1,2 kg/ngày) trung bình khoảng 300-600kg và cao khoảng 1,3-1,6m.<br/>
                                        -	Phát triển cơ bắp: Bò thịt phát triển các cơ bắp chủ yếu là cơ ngực, lưng và hông, giúp tạo nên hình dáng thịt đẹp và hấp dẫn.<br/>
                                        -	Thay đổi về hành vi ăn uống: Bò thịt có thể ăn được nhiều loại thức ăn khác nhau, bao gồm cả cỏ và ngũ cốc. <br/>
                                        *Để chăm sóc bò thịt trong giai đoạn này, cần cung cấp đầy đủ dinh dưỡng và chất xơ, kiểm tra sức khỏe và tiêm phòng định kỳ. Ngoài ra, việc giữ gìn vệ sinh, cung cấp nước sạch và không khí trong lành cũng rất quan trọng<br/>
                </div>              

                    <li onClick={() => handleItemClick(4)}>4. Giai đoạn 18-36 tháng tuổi: <br/></li>
                    <div
                    id="content-4"
                    className={`content-item ${activeContent === 4 ? 'active' : ''}`}>
                       
                                        -	Bò thịt đã đạt đến trọng lượng cân nặng trưởng thành và sẵn sàng cho giai đoạn thu hoạch thịt<br/>
                                        -	Tăng trưởng chậm hơn so với giai đoạn trước đó.<br/>
                                        -	Tỷ lệ tăng trưởng thịt giảm dần, thay vào đó là sự tăng trưởng mỡ và sụn.<br/>
                                        *Chúng cần được chăm sóc kỹ càng về dinh dưỡng và sức khỏe để đảm bảo sự phát triển khỏe mạnh, giảm thiểu nguy cơ bệnh tật. Chế độ ăn uống và chăm sóc sức khỏe phải được đảm bảo để đạt được trọng lượng thịt tối đa.<br/>
                    </div>
                  </ul>


              </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BoThit;
