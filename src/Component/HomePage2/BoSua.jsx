import React, { useState } from 'react';
import '../HomePage1/CrChe.css'
import bosua1 from '../../img/bosua.png'
import bosua2 from '../../img/bosua2.png'
import Intro from '../Title/Title'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const BoSua = () => {
  
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
          title={'Quy trình phát triển con bò sữa'}
          img={bosua1 }
        />
          <div class="crop-animal-item-detail">
            <img src={bosua2} alt="" class="crop-animal-item__img"
          />
            <div class="crop-animal-item-desc">
                <ul>
                  <li onClick={() => handleItemClick(1)}>1. Thời kì bắt đầu sinh sản:</li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 1 ? 'active' : ''}`}>
                              -	Bò cái thường được giao phối với bò đực để sản xuất sữa sau khi sinh con.<br/>
                                -	Thời gian mang thai của bò khoảng 9 tháng.<br/>
                                -	Tăng cân và phát triển thể chất: Bò sữa sẽ tăng cân và phát triển thể chất trong suốt thời gian mang thai. Chúng cũng có thể trở nên mất thăng bằng do tăng trọng lượng.<br/>
                                -	Thay đổi trong hành vi ăn uống: Bò sữa có thể có thay đổi trong hành vi ăn uống như ăn nhiều hơn hoặc ít hơn so với trước đó. Điều này có thể do sự tăng cân hoặc các vấn đề sức khỏe khác.<br/>
                                -	Sữa vú: Trong khoảng 1-2 tháng trước khi sinh, sữa vú của bò sữa sẽ phát triển và có thể sản xuất sữa. Tuy nhiên, sản lượng sữa sẽ không đủ để cho con bú.<br/>
                                -	Biểu hiện lạc quan hoặc bất an: Một số bò sữa có thể có biểu hiện lạc quan hoặc bất an trong suốt thời gian mang thai. Điều này có thể phụ thuộc vào các yếu tố như sức khỏe, môi trường sống, điều kiện chăm sóc và giống bò.<br/>
                                *Để chăm sóc cho bò sữa trong thời gian mang thai, cần cung cấp cho chúng một chế độ ăn uống và chăm sóc sức khỏe phù hợp. Đồng thời, cần đảm bảo bò sữa có môi trường sống an toàn, sạch sẽ và thoải mái để giảm stress và tăng khả năng sinh sản của chúng.<br/>
                                <br/>
                  </div>
                  <li onClick={() => handleItemClick(2)}>2.Thời kỳ sơ sinh:</li>
                  <div
                    id="content-2"
                    className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                                        - Bò con mới sinh ra có trọng lượng khoảng 25-45kg   <br/>
                                        - Thân thể còn nhỏ bé và yếu ớt  <br/>
                                        - Chưa có răng, chỉ có răng sữa  <br/>
                                        - Sức đề kháng còn yếu, dễ mắc bệnh  <br/>
                                        - Thường xuyên uống sữa, tập ăn dần thức ăn rắn khi trưởng thành hơn  <br/>
                                        *Để chăm sóc bò sữa trong thời kì sơ sinh, cần cung cấp đủ sữa mẹ và đảm bảo vệ sinh, vệ sinh miệng và môi trường sống của chúng. Ngoài ra, cũng cần thực hiện các biện pháp phòng bệnh và tiêm phòng định kỳ để đảm bảo sức khỏe cho bò sữa.
                                        <br/>

                    </div>
                    <li onClick={() => handleItemClick(3)}>3. Thời kỳ tiền trưởng thành:</li>
                  <div
                    id="content-3"
                    className={`content-item ${activeContent === 3? 'active' : ''}`} >
                                        - Khoảng thời gian từ 2 đến 18 tháng.<br/>
                                        - Tăng trưởng nhanh chóng: Trong giai đoạn này, bò sữa sẽ phát triển nhanh chóng về cân nặng và chiều cao. Trung bình, bò sữa tăng trọng lượng khoảng 0,5 đến 1,5 kg mỗi ngày.<br/>
                                        - Tiêu thụ sữa nhiều: Bò sữa ở độ tuổi này sẽ tiêu thụ lượng sữa rất lớn mỗi ngày, để đáp ứng nhu cầu dinh dưỡng và tăng trưởng của chúng.<br/>
                                        - Phát triển hệ tiêu hóa: Hệ tiêu hóa của bò sữa trong giai đoạn này sẽ phát triển để tiêu hóa và hấp thụ chất dinh dưỡng tốt hơn.<br/>
                                        - Tăng cường miễn dịch: Bò sữa trong độ tuổi này sẽ được tiêm phòng và có đầy đủ dinh dưỡng để tăng cường hệ miễn dịch, giúp chúng chống lại các bệnh tật.<br/>
                                        - Phát triển xương và cơ: Bò sữa sẽ phát triển xương và cơ để có thể chịu được trọng lượng và sức ép trong quá trình phát triển.<br/>
                                        - Tăng cường sức khỏe: Bò sữa trong độ tuổi này cần được chăm sóc đúng cách, bao gồm cung cấp đầy đủ dinh dưỡng và chăm sóc sức khỏe để đảm bảo chúng phát triển tốt và không bị mắc các bệnh tật.<br/>
                                        *Chăm sóc : Bò sữa cần được cung cấp chế độ ăn uống đạm và dinh dưỡng để đảm bảo phát triển khỏe mạnh và tăng cân nhanh chóng.Bò sữa được đưa vào chương trình tiêm phòng và chăm sóc sức khỏe định kỳ để đảm bảo tránh được các bệnh tật và đảm bảo sức khỏe của bò.
                                        <br/>
                    </div>

                    <li onClick={() => handleItemClick(4)}>4. Thời kỳ sản xuất sữa:</li>
                    <div
                    id="content-4"
                    className={`content-item ${activeContent === 4 ? 'active' : ''}`}>
                       -	Khoảng thời gian từ 18 tháng đến 4-5 năm, tùy thuộc vào loại bò. <br/>
                        -	Bò sữa đạt độ tuổi sản xuất sữa và được cho bú hoặc bơm sữa bằng máy móc sản xuất. <br/>
                        -	Khi bắt đầu sản xuất sữa, bò sữa sẽ cho ra một lượng sữa nhỏ và lượng sữa này sẽ tăng dần theo thời gian
                        -	Sữa bò có mùi thơm, vị ngọt và có màu trắng đục. <br/>
                        -	Bò sữa sẽ có nhu cầu dinh dưỡng cao hơn so với các giai đoạn khác, vì vậy chúng sẽ ăn nhiều hơn. <br/>
                        -	Bò sữa cũng có thể trở nên khó tính và có thể trở nên bất mãn nếu họ không được cung cấp đủ dinh dưỡng hoặc nếu môi trường nuôi chăn không tốt. <br/>
                        -	Ngoài ra, bò sữa có thể bị các bệnh liên quan đến sản xuất sữa như viêm vú hoặc sưng vú, vì vậy chủ trang trại cần chú ý đến sức khỏe của bò và vệ sinh vùng đồng cỏ, chuồng nuôi để tránh các bệnh lây lan. <br/>
                        Bò sữa cần được chăm sóc đặc biệt và cung cấp chế độ ăn uống và chăm sóc sức khỏe phù hợp để đảm bảo sản xuất sữa chất lượng cao và đảm bảo sức khỏe của bò. <br/>
                        <br/>

                    </div>
                    <li onClick={() => handleItemClick(5)}>5. SAU KHI HẾT SỮA</li>
                    <div
                    id="content-4"
                    className={`content-item ${activeContent === 5? 'active' : ''}`}>
                      -	Khi bò sữa hết đời sản xuất sữa, việc tiếp tục nuôi bò có thể đem lại nhiều lợi ích <br/> 
                        +Sử dụng bò làm công cụ làm việc: Bò có thể được sử dụng để kéo cày, kéo xe và thực hiện các công việc nông nghiệp khác, giúp giảm chi phí lao động và sử dụng năng lượng tiết kiệm hơn so với sử dụng máy móc. <br/>
                        +Bò làm vật nuôi giải trí: Đối với một số người, nuôi bò có thể là một sở thích hoặc một hoạt động giải trí. Chúng có thể được dùng để chơi đùa hoặc tham gia các cuộc thi về đua bò, trình diễn kỹ năng và vẻ đẹp. <br/>
                        +Bán bò để kiếm lợi nhuận: Chủ trang trại có thể bán bò cũ để kiếm lợi nhuận hoặc trao đổi bò với các nông dân khác để nâng cao chất lượng giống của đàn bò của mình. <br/>
                        +Bảo vệ môi trường: Nuôi bò để duy trì cỏ xanh trên đồng bằng, đồng thời giúp duy trì độ ẩm, phân hủy các thảo mộc, tăng sinh khí hậu và giảm sự phát triển của cỏ dại. <br/>
                        +Xử lý khác
                        + Việc lấy thịt bò sữa sẽ được thực hiện thông qua quy trình giết mổ và chế biến giống như các loài gia súc khác. Thịt bò sữa có thể được sử dụng cho các món ăn như thịt nướng, bò kho, bò hầm, bò viên, v.v. <br/>
                        +Sử dụng bò cũ để sản xuất phân bón hữu cơ cho cây trồng. <br/>
                        +Bán bò cho các nhà chăn nuôi khác hoặc nhà máy sản xuất thức ăn gia súc. <br/>
                        +Đưa bò đến các trung tâm tái chế để chuyển đổi thành sản phẩm khác, chẳng hạn như da và lông bò.

                        <br/>

                    </div>
                  </ul>


              </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BoSua;
