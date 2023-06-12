import React, { useState } from 'react';
import '../HomePage1/CrChe.css'
import vit1 from '../../img/trungvit.png'
import vit2 from '../../img/vit1.png'
import Intro from '../Title/Title'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const Vit = () => {
  
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
          title={'Quy trình phát triển con vịt'}
          img={vit1 }
        />
          <div class="crop-animal-item-detail">
            <img src={vit2} alt="" class="crop-animal-item__img"
          />
            <div class="crop-animal-item-desc">
                <ul>
                  <li onClick={() => handleItemClick(1)}>1.Trứng:</li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 1 ? 'active' : ''}`}> 
                          Trứng vịt cần được ấp trứng trong vòng khoảng 28-35 ngày để nở ra thành vịt con. <br/>
                            +Trứng vịt: Trứng vịt thường có màu trắng hoặc kem, bề mặt có màng bảo vệ bóng loáng và cảm giác trơn tru khi sờ vào. Trong quá trình ấp trứng, trứng sẽ dần phát triển và có kích thước lớn hơn. <br/>
                            -	Điều kiện chăm sóc như sau: <br/>
                            +Đảm bảo nhiệt độ khoảng từ 37,5 đến 38 độ C và độ ẩm phù hợp trong chuồng ấp trứng. <br/>
                            +Cung cấp đủ nước và thức ăn cho vịt non. <br/>
                            +Giữ vệ sinh sạch sẽ, tránh tình trạng bẩn, ẩm ướt trong chuồng ấp trứng. <br/>
                  </div>
                  <li onClick={() => handleItemClick(2)}>2. Giai đoạn nở trứng</li>
                  <div
                    id="content-2"
                    className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                                       Sau khi trứng được ấp đủ thời gian, vịt con sẽ bắt đầu rỉ máu và chui ra khỏi vỏ trứng. <br/>
                            -Sơ sinh: <br/>
                            Vịt con mới nở sẽ có lông màu vàng nhạt hoặc màu nâu, và còn khá yếu. Chúng cần được giữ ấm, sưởi ấm và được nuôi dưỡng đúng cách để có thể phát triển khỏe mạnh. <br/>
                            Vịt con mới nở ra có trọng lượng khoảng 60-100g và cần được giữ ấm và cung cấp nước và thức ăn đủ để phát triển khỏe mạnh. <br/>
                            Vịt con sẽ ở gần mẹ để được nuôi dưỡng và học hỏi hành vi ăn uống và tự bảo vệ. <br/>
                            <br/>
                    </div>
                    <li onClick={() => handleItemClick(3)}>3. Thời kỳ ăn uống:</li>
                  <div
                    id="content-3"
                    className={`content-item ${activeContent === 3? 'active' : ''}`} >
                                   -	Khoảng thời gian từ 2 đến 4 tuần, tùy thuộc vào loại vịt.<br/>
                                    +Tăng trưởng nhanh chóng: Vịt sẽ tiếp tục tăng trưởng về cân nặng và kích thước. Lúc này, vịt đã đủ sức khỏe để di chuyển nhanh và chơi đùa với các vịt bạn.<br/>
                                    +Lông bắt đầu mọc: Lông của vịt bắt đầu mọc ra và có màu sắc khác nhau tùy vào giống vịt.<br/>
                                    +Thay đổi lối ăn: Vịt sẽ thay đổi lối ăn, từ chế độ ăn uống đặc biệt của giai đoạn ấp trứng sang chế độ ăn hỗn hợp thức ăn giàu dinh dưỡng và nước uống sạch.<br/>
                                    -	Vịt con từ 1-3 ngày tuổi<br/>
                                    Những con vịt con mới nở cho đến 3 ngày tuổi sẽ có sức đề kháng rất yếu. Vì thế, thời gian này bạn cần hết sức quan tâm và chăm sóc chúng. Bạn có thể tập cho vịt con ăn bằng bột bắp hoặc tấm, cho vịt uống nước có pha Vime C Electrolyte, B.complex C, Vimevit Electrolyte trong ngày đầu sau khi nở. Bắt đầu từ ngày thứ 2 bạn có thể cho vịt ăn thức ăn hỗn hợp được bán trên thị trường dành cho vịt con. Đối với vịt con trong giai đoạn từ 1-3 ngày tuổi thì lượng nước chúng cần cho 1 ngày là khoảng 120ml/con.<br/>
                                    -	Vịt con từ 4 – 10 ngày tuổi<br/>
                                    Trong giai đoạn này thì bạn có thể cho vịt con ăn thêm rau xanh trộn với cơm. Ngoài ra thì thức ăn chính của những con vịt con này cần được bổ sung thêm chất đạm như: bột cá lạt, phân tôm (số lượng ít để tránh việc vịt con bị ngộ độc muối trong phân tôm).<br/>
                                    -	Vịt con trong giai đoạn 4-10 ngày tuổi này có thể bơi lội nhưng bạn chú ý là không nên cho vịt con bơi nhiều. Cách nuôi vịt con nhanh lớn hiệu quả nhất là nên cho vịt bơi khoảng 10 phút cho những ngày đầu. Sau đó thì bạn tăng thời gian bơi nhiều lên. Sau 10 ngày tuổi thì vịt con có thể tự do xuống nước khi chúng muốn.<br/>
                                    Thời điểm này bạn có thể thực hiện việc phòng bệnh tả cho vịt bằng vacxin dịch tả vịt đông khô TW2. Thời gian tốt nhất để tiêm phòng là khi vịt con được 7 ngày tuổi.<br/>
                                    -	Vịt con từ 11 – 20 ngày tuổi<br/>
                                    Cách nuôi vịt con tốt nhất trong giai đoạn này là bạn nên cho vịt ăn thức ăn hỗn hợp. Việc kết hợp chăn thả với cữ ăn 2 lần/ngày từ khi vịt đủ 15 ngày tuổi sẽ giúp những con vịt con có điều kiện phát triển nhanh hơn. Ngoài thức ăn tấm, cám bình thường thì vịt con cần bổ sung thêm chất đạm từ ốc, hến hay tôm… để có thể tăng trưởng nhanh. Lưu ý là giai đoạn vịt từ 11-20 ngày tuổi thì dạ dày của vịt con còn non nên không nên cho ăn lúa. Từ 20 ngày tuổi trở đi bạn cho vịt ăn lúa sẽ tốt hơn. Đây cũng là giai đoạn phù hợp để bạn tiêm vacxin phòng dịch tả lần 2 cho vịt.<br/>

                    </div>

                    <li onClick={() => handleItemClick(4)}>4. Thời kỳ tiền trưởng thành:</li>
                    <div
                    id="content-4"
                    className={`content-item ${activeContent === 4 ? 'active' : ''}`}>
                            -	Vịt từ 30 – 80 ngày tuổi<br/>
                        Khoảng thời gian từ 4 đến 12 tuần, tùy thuộc vào loại vịt.<br/>
                        + Tăng trưởng nhanh về kích thước cơ thể, đặc biệt là cơ bắp và xương.<br/>
                        + Đôi chân và chân được phát triển, giúp vịt đi lại dễ dàng và ổn định hơn.<br/>
                        + Lông của vịt tiếp tục phát triển và mọc đều trên toàn thân.<br/>
                        + Hệ tiêu hóa của vịt được cải thiện và vịt có thể tiêu hóa thức ăn tốt hơn.<br/>
                        Giai đoạn này những con vịt con hoàn toàn có thể tự kiếm mồi và ăn lúa. Thời gian này nên cho vịt con chạy đồng để tiết kiệm chi phí chăn nuôi. Đặc biệt là vào thời điểm mùa gặt xong thì nguồn thức ăn của vịt sẽ dồi dào hơn. Khi vịt ăn no sẽ lớn nhanh hơn. <br/>


                    </div>
                   
                    <li onClick={() => handleItemClick(5)}>5. Thời kỳ trưởng thành:</li>
                    <div
                    id="content-5"
                    className={`content-item ${activeContent === 5 ? 'active' : ''}`}>
                           -	Khoảng thời gian từ 12 đến 16 tuần.<br/>
                                + Tăng trưởng nhanh: Vịt sẽ phát triển nhanh chóng về kích thước và cân nặng, với tốc độ tăng trưởng hàng ngày dao động từ 30-50g.<br/>
                                + Tăng cường hoạt động: Vịt sẽ có xu hướng di chuyển nhiều hơn và tăng cường hoạt động khám phá môi trường xung quanh.<br/>
                                +Thay lông: Vịt sẽ thay lông lần đầu tiên, từ bộ lông trẻ sang bộ lông trưởng thành.<br/>
                                -	Để chăm sóc cho vịt trong thời kì này, bạn có thể thực hiện các công việc sau:<br/>
                                + Cung cấp thức ăn đầy đủ dinh dưỡng và nước uống sạch đủ cho vịt, để đảm bảo sự phát triển và tăng trưởng của chúng.<br/>
                                +Cung cấp môi trường sống sạch sẽ, khô ráo, thoáng mát và đủ ánh sáng để vịt có môi trường sống tốt nhất.<br/>
                                +Cung cấp đầy đủ các loại khoáng chất và vitamin cho vịt, để giúp cơ thể chúng hoạt động tốt hơn.<br/>
                                +Tạo điều kiện cho vịt tập thể dục và vận động, để giúp chúng khỏe mạnh và tăng cường hoạt động.<br/>
                                +Theo dõi sức khỏe và phòng bệnh cho vịt, đảm bảo chúng không mắc bất kỳ bệnh tật nào. Nếu phát hiện vịt bị bệnh, bạn nên đưa chúng đi khám và điều trị kịp thời.<br/>
                                Vịt trưởng thành đến ngày tuổi thứ 80 thì đây là thời điểm thích hợp nhất  để sản xuất trứng hoặc thịt.<br/>
                     </div>
                  </ul>


              </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Vit;
