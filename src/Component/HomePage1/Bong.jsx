import React, { useState } from 'react';
import './CrChe.css'
import bong1 from '../../img/bong.png'
import bong2 from '../../img/bong1.png'
import Intro from '../Title/Title'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const Bong = () => {
  
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
          title={'Quy trình phát triển cây bông'}
          img={bong1 }
        />
          <div class="crop-animal-item-detail">
            <img src={bong2} alt="" class="crop-animal-item__img"
            
          />
            <div class="crop-animal-item-desc">
                <ul> <p>CÁC THỜI KỲ SINH TRƯỞNG PHÁT TRIỂN<br/>
                    Cây bông vốn là cây lâu năm, sau khi được di chuyển lên vùng khí hậu lạnh 
                    mùa đông trở thành cây hàng năm. Nhưng nếu trồng ở vùng nhiệt đới, ẩm và mưa 
                    nhiều thì có thể phục hồi tập tính lưu niên. Một số nơi người ta khai thác đặc tính này 
                    bằng cách đốn để ra chồi và thu hoạch bông trong nhiều năm.<br/>
                    Đời sống cây bông hàng năm có thể chia năm thời kỳ.<br/></p>
                  <li onClick={() => handleItemClick(1)}>1.Thời kỳ mọc.</li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 1 ? 'active' : ''}`}>
                                    Từ khi nảy mầm đến khi xòe tử diệp. Thời kỳ này dài ngắn tùy phẩm chất hạt 
                                    giống, kỹ thuật xử lý hạt giống và gieo hạt, ẩm độ và nhiệt độ đất. Ẩm độ đất tối thích 
                                    là 90% và nhiệt độ là 25- 300C. Trong điều kiện thuận lợi thì sau gieo 24- 36 giờ là nảy 
                                    mầm. Trên đồng ruộng thì sau gieo 3- 5 ngày là mọc đều. Yêu cầu mọc càng nhanh 
                                    càng tốt, vì mọc chậm càng mất sức và dễ bị sâu bệnh gây hại. Để đảm bảo mọc nhanh 
                                    cần chú ý các khâu: chọn hạt giống và ngâm ủ hạt đúng phương pháp, làm đất tơi xốp, 
                                    giữ ẩm, tránh gieo các tiết rét. <br/>             

                  </div>
                  <li onClick={() => handleItemClick(2)}>2. Thời kỳ cây con</li>
                <div
                    id="content-2"
                    className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                           Từ khi xòe tử diệp đến khi ra nụ đầu tiên. Từ nảy mầm đến ra lá thật đầu tiên 
                            nếu trời ấm (250C) chỉ cần 5- 6 ngày. Về sau cứ 5- 6 ngày ra thêm 1 lá. Thời kỳ này rễ 
                            bắt đầu phát triển nhanh nhưng thân thì còn chậm. Vì vậy, để xúc tiến ra rễ tốt cần chú 
                            ý tăng cường xới xáo và cung cấp đủ phân bằng bón lót khi làm đất và khi gieo, và nói 
                            chung không cần tưới nếu không bị hạn nặng. Thời kỳ này các mô cơ giới còn non, dễ 
                            bị sâu bệnh xâm hại, cần đặc biệt chú ý phòng trừ.<br/>
                </div>
                <li onClick={() => handleItemClick(3)}>3. Thời kỳ ra nụ</li>
                <div
                    id="content-3"
                    className={`content-item ${activeContent === 3 ? 'active' : ''}`} >
                           Thời kỳ ra nụ đầu tiên đến khi ra hoa đầu tiên. Cây bông có 4 - 8 lá thật thì bắt 
                            đầu ra nụ. Thời kỳ này chênh lệch rất lớn tùy giống bông và mùa vụ gieo. Kỹ thuật 
                            chăm bón cũng có ảnh hưởng. Thời gian từ mọc đến ra nụ đầu vào khoảng 30- 40 ngày. 
                            Trong thời kỳ ra nụ bộ rễ vẫn tiếp tục sinh trưởng mạnh, do đó nhu cầu về nước và chất 
                            dinh dưỡng ngày càng tăng.
                            <br/>
                </div>

                <li onClick={() => handleItemClick(4)}>4. Thời kỳ ra hoa đậu quả. </li>
                <div
                    id="content-4"
                    className={`content-item ${activeContent === 4 ? 'active' : ''}`} >
                           Từ khi ra hoa đầu tiên đến quả đầu tiên chín. Thời gian từ ra nụ đến ra hoa dài 
                            ngắn tùy giống và các điều kiện ngoại cảnh. Nói chung ở bông Cỏ là 16-20ngày, bông 
                            Luồi là 21- 25 ngày, bông Hải Đảo là 30-33 ngày. Ở vùng nhiệt đới ẩm từ gieo đến ra 
                            hoa đầu là 50- 60 ngày. <br/>
                            Quy luật ra hoa của cây bông là từ gốc dần lên phía ngọn, từ trong thân chính ra 
                            mút cành theo hai trình tự: Trình tự ngắn và trình tự dài. Trình tự ngắn là thời gian ra 
                            hoa cách nhau của hai hoa cùng vị thứ trên cành kế tiếp nhau, ở bông Luồi là 2 - 4 
                            ngày. Trình tự dài là thời gian ra hoa cách nhau của hai hoa ở vị thứ kề nhau trên cùng 
                            một cành, ở bông luồi là khoảng 6 - 8 ngày. Kết quả nghiên cứu cho biết là các quả ở 
                            nội vị (gần gốc và gần thân chính) thì trọng lượng quả, tỷ lệ xơ, phẩm chất xơ, phẩm 
                            chất hạt giống đều cao hơn các quả ở ngoại vị (phía ngọn và mút cành). <br/>
                            Sau khi hoa đầu tiên nở thì thân chính cao nhanh, ra nhiều cành mới, hoa nở 
                            ngày càng nhiều và đậu quả, nụ mới tiếp tục ra. Trong khi đó bộ rễ phát triển chậm hơn 
                            trước, song khối lượng rễ thì khá hơn và cường độ hoạt động khá mạnh. Do đó thời kỳ 
                            này nhu cầu về nước và chất dinh dưỡng rất lớn, nhất là khi hoa nở rộ. Lúc này, nếu bị 
                            hạn, đói phân hoặc bất cứ biến động nào về thời tiết sẽ bị rụng nụ, rụng đài nghiêm 
                            trọng. Khi ra hoa gặp mưa quá trình thụ phấn bị trở ngại, cũng sẽ rụng đài nhiều. Mặt 
                            khác, nếu đạm nhiều, nước đầy đủ, cây sum xuê, ruộng bông thiếu ánh sáng thì dễ phát 
                            sinh bông lốp.
                            <br/>
                </div>
                <li onClick={() => handleItemClick(5)}>5.Thời kỳ chín.</li>
                <div
                id="content-5"
                className={`content-item ${activeContent === 5 ? 'active' : ''}`}>
                    Từ khi quả đầu tiên chín đến khi tận thu. Thời gian từ hình thành đến chín của 
                    quả bông là 40 - 80 ngày tùy giống, tùy điều kiện ngoại cảnh và vị trí qủa trên cây. Khi 
                    chín vỏ quả khô nhanh, nứt toác ra và sau đó teo lại, các múi bông bung ra ngoài. 
                    Nguyên nhân của sự chín là sự thoát hơi nước của quả bông, trước tiên là hạt bông và 
                    xơ bông thoát nước, tiếp đến là các mô ở lớp trong của vỏ qủa, rồi các mô ở lớp ngoài 
                    vỏ quả và sau cùng là các bộ phận của quả bông đều thoát nước mãnh liệt. Sự thoát hơi 
                    nước trong quả bông có liên quan đến sự hình thành xenlulô trong xơ và dầu trong hạt, 
                    là những hợp chất không giữ nước. Để xúc tiến quả chín đầy đủ cần tạo điều kiện cho 
                    quả thoát nước thuận lợi bằng các biện pháp: ngưng tưới nước và bón phân (nhất là 
                    đạm), tỉa bớt lá phía gốc.<br/>

                </div>
                </ul>


            </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Bong;
