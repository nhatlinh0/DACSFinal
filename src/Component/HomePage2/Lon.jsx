import React, { useState } from 'react';
import '../HomePage1/CrChe.css'
import lon1 from '../../img/heo.png'
import lon2 from '../../img/heo2.png'
import Intro from '../Title/Title'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const Lon = () => {
  
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
          title={'Quy trình phát triển con lợn'}
          img={lon1 }
        />
          <div class="crop-animal-item-detail">
            <img src={lon2} alt="" class="crop-animal-item__img"
          />
            <div class="crop-animal-item-desc">
                <ul>
                  <li onClick={() => handleItemClick(1)}>1.Giai đoạn 0 - 4 tuần tuổi: </li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 1 ? 'active' : ''}`}>
                           - Trong giai đoạn này, lợn con chủ yếu dành thời gian để ăn, ngủ và phát triển cơ thể. lợn con hoàn toàn phụ thuộc vào sữa mẹ để phát triển. Chúng cần được nuôi dưỡng đầy đủ dinh dưỡng và được bảo vệ khỏi các bệnh tật. <br/>
                            -	Cân nặng: Lợn con non thường có cân nặng khoảng từ 0,8 - 2 kg khi sinh ra và tăng trung bình 100-200g mỗi ngày. <br/>
                            -	Thức ăn: Lợn con non cần được cung cấp sữa mẹ để đảm bảo sự phát triển và tăng trưởng. Trong 1 ngày, lợn con có thể tiêu thụ lượng sữa bằng trọng lượng của chúng. <br/>
                            -	Hoạt động: Lợn con non thường chỉ di chuyển trong vòng nhỏ xung quanh mẹ để tìm kiếm sữa. <br/>
                            -	Tập trung vào phát triển cơ thể: Giai đoạn này là giai đoạn phát triển nhanh chóng về cơ thể, các bộ phận của lợn con non chưa hoàn thiện như gan, thận, ruột và đường ruột đang trong quá trình phát triển. <br/>
                            -	Miệng và mũi: Lợn con non thường sử dụng miệng và mũi để tìm kiếm sữa và hít thở. <br/>
                            -	Thành thạo kỹ năng ăn uống: Trong giai đoạn từ 2-4 tuần tuổi, lợn con non bắt đầu học cách ăn thức ăn rắn và uống nước, bên cạnh việc tiếp tục được cho ăn sữa mẹ. <br/>
                            <br/>
                  </div>
                  <li onClick={() => handleItemClick(2)}>2.Giai đoạn 4 - 8 tuần tuổi: </li>
                  <div
                    id="content-2"
                    className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                                       -	Trong giai đoạn này, Lợn con thường tăng trung bình khoảng 300-500g mỗi tuần. Tùy thuộc vào chủng loại và điều kiện chăm sóc, lợn con có thể đạt được trọng lượng từ 8-15kg vào cuối giai đoạn này.<br/>
                                        -	Lợn con bắt đầu học cách ăn thức ăn rắn và phụ thuộc ít hơn vào sữa mẹ.<br/>
                                        -	Các biểu hiện của lợn con trong giai đoạn ăn dặm bao gồm:<br/>
                                        -	Tiêu thụ thức ăn rắn: Lợn con bắt đầu tiêu thụ các loại thức ăn rắn như ngô, đậu nành, lúa mạch, cám ,..v.v. Chúng sẽ học cách nhai và nuốt thức ăn.<br/>
                                        -	Tăng trưởng: Trong giai đoạn này, lợn con tiếp tục tăng trưởng về cơ thể và trở nên khỏe mạnh hơn.<br/>
                                        -	Hoạt động: Lợn con bắt đầu tập thể dục và tìm kiếm thức ăn bằng cách di chuyển và khám phá.<br/>
                                        -	Hấp thu dinh dưỡng: Lợn con bắt đầu hấp thu dinh dưỡng từ thức ăn rắn để tăng trưởng và phát triển cơ thể.<br/>
                                        -	Điều chỉnh nhu cầu ăn uống: Lợn con có thể tự điều chỉnh lượng thức ăn và nước uống theo nhu cầu của cơ thể.<br/>
                                        -	Lông: Lông của lợn con bắt đầu mọc dày và bóng mượt hơn.<br/>
                                        -	Khả năng miễn dịch: Hệ miễn dịch của lợn con bắt đầu phát triển và trở nên mạnh mẽ hơn để chống lại các bệnh tật.<br/>
                                        * Chăm sóc<br/>
                                        -	Cung cấp chế độ ăn uống đầy đủ và đúng cách: Lợn con cần được cung cấp các chất dinh dưỡng đủ, bao gồm các loại thức ăn chứa nhiều protein, tinh bột, đường và vitamin.<br/>
                                        -	Giữ cho môi trường sống khô ráo và sạch sẽ: Lợn con rất nhạy cảm với môi trường bẩn, ẩm ướt và có nhiều vi khuẩn. Vì vậy, bạn nên giữ cho chuồng sạch sẽ, thoáng mát và khô ráo.<br/>
                                        -	Cung cấp đủ nước uống: Lợn con cần được cung cấp đủ nước uống sạch và tươi mỗi ngày để giúp tiêu hóa tốt và tránh bị mất nước cơ thể.<br/>
                                        -	Điều chỉnh nhiệt độ và ánh sáng: Lợn con cần được giữ ở nhiệt độ ấm áp và ánh sáng đủ để giúp cơ thể phát triển tốt.<br/>
                                        -	Tạo điều kiện cho lợn con vận động: Lợn con cần được tạo điều kiện vận động để phát triển cơ bắp và xương khỏe mạnh.<br/>
                                        -	Theo dõi tình trạng sức khỏe của lợn con: Bạn nên theo dõi tình trạng sức khỏe của lợn con để phát hiện sớm các vấn đề và điều trị kịp thời.<br/>

                    </div>
                    <li onClick={() => handleItemClick(3)}>3.Giai đoạn ăn thức ăn khô (8 - 20 tuần tuổi):</li>
                  <div
                    id="content-3"
                    className={`content-item ${activeContent === 3? 'active' : ''}`} >
                                       
                                       - Lợn sẽ tiếp tục ăn thức ăn khô và phát triển nhanh chóng.   <br/>
                                        - Lợn sẽ tiếp tục ăn thức ăn khô và phát triển nhanh chóng.   <br/>

                                        - Trung bình lợn ở giai đoạn này có thể tăng từ 1,5 đến 2,5 kg trọng lượng mỗi tuần, tùy thuộc vào chất lượng thức ăn và điều kiện sống. Do đó, sau khoảng 3 tháng ăn thức ăn khô, lợn có thể đạt trọng lượng từ 20 đến 40 kg.   <br/>

                                        -Ăn nhiều hơn và tăng cân nhanh hơn. Chúng sẽ trở nên năng động và tò mò, tìm hiểu mọi thứ xung quanh. Lợn ở giai đoạn này cũng có xu hướng nổi bật và thể hiện sự độc lập, đòi hỏi nhiều sự chú ý và chăm sóc.   <br/>
                                        *Chăm sóc : Lợn ở giai đoạn này cần được cung cấp đủ lượng nước và thức ăn chất lượng cao để đảm bảo sức khỏe và tăng cân hiệu quả. Chủ trang trại cần theo dõi tình trạng ăn uống và tăng cân của lợn, và điều chỉnh lượng thức ăn phù hợp nếu cần thiết để đảm bảo tăng trưởng và phát triển tốt của đàn lợn.   <br/>
                                        <br/>
                    </div>

                    <li onClick={() => handleItemClick(4)}>4. Giai đoạn trưởng thành (20 - 30 tuần tuổi):</li>
                    <div
                    id="content-4"
                    className={`content-item ${activeContent === 4 ? 'active' : ''}`}>
                           -  Lợn đạt trọng lượng trung bình khoảng 100 - 120kg và sẽ được tiêm phòng để phòng ngừa các bệnh tật. Trong giai đoạn này, lợn sẽ được chuẩn bị cho quá trình sản xuất.<br/>
                        - Tăng trưởng nhanh: Lợn tiếp tục tăng trưởng về cả kích thước lẫn cân nặng.<br/>
                        - Tăng sức đề kháng: Hệ miễn dịch của lợn được phát triển hoàn chỉnh, giúp lợn chống lại các bệnh tật.<br/>
                        - Thay đổi sắc tố da: Da của lợn sẽ chuyển từ màu nâu sang màu hồng.<br/>
                        - Động tác nhanh: Lợn trưởng thành sẽ có động tác nhanh hơn, linh hoạt hơn so với giai đoạn trước.<br/>
                        - Kích thước lớn hơn: Lợn sẽ đạt kích thước lớn hơn và có hình dáng tròn trịa hơn.<br/>
                        - Đốm lông đậm hơn: Lông của lợn có thể có màu sắc đậm hơn và đốm lông cũng nổi bật hơn.<br/>
                        - Sức đề kháng tốt hơn: Sức đề kháng của lợn càng được cải thiện khi chúng trưởng thành, giúp chúng chống lại các bệnh tật và tồn tại trong môi trường nuôi dưỡng tốt hơn.<br/>
                        - Khả năng sinh sản: Lợn đến độ tuổi trưởng thành sẽ có khả năng sinh sản, đàn lợn sẽ được sinh ra để tiếp tục chu trình đời của lợn.<br/>
                        <br/>

                    </div>

                    <li onClick={() => handleItemClick(5)}>5. Giai đoạn sản xuất (30 - 180 tuần tuổi):</li>
                    <div
                    id="content-5"
                    className={`content-item ${activeContent === 5 ? 'active' : ''}`}>
                           - Lợn đạt trọng lượng và kích thước tối đa của mình và sẽ được sử dụng để sản xuất thịt. Trong giai đoạn này, lợn sẽ được nuôi dưỡng và chăm sóc đặc biệt để đảm bảo chất lượng thịt tốt nhất.<br/>
                        - Cân nặng: Lợn trưởng thành có cân nặng trung bình từ 100kg đến 150kg, tùy thuộc vào giống và điều kiện chăm sóc.<br/>
                        - Tốc độ tăng trưởng: Tốc độ tăng trưởng của lợn giảm đi so với giai đoạn trước đó, thường là từ 0,5kg đến 1kg mỗi tuần.<br/>
                        - Sản xuất thịt: Lợn trong giai đoạn này đã đạt đến trọng lượng sản xuất thịt tối ưu và đang sản xuất thịt tốt.<br/>
                        - Sản xuất lợn con: Lợn trong giai đoạn này đã đạt đến độ trưởng thành và có thể sản xuất lợn con. Số lượng lợn con mỗi lứa phụ thuộc vào giống và điều kiện chăm sóc.<br/>
                        - Sức khỏe: Để đảm bảo sức khỏe của lợn, cần cung cấp đủ thức ăn và nước uống, kiểm tra thường xuyên tình trạng sức khỏe của lợn để phát hiện kịp thời các bệnh lý và điều trị kịp thời.<br/>
                        - Tâm trạng: Lợn trong giai đoạn này có thể trở nên ngoan cố và khó chăm sóc hơn so với các giai đoạn trước đó. Việc tạo điều kiện sống và chăm sóc tốt sẽ giúp giảm thiểu sự căng thẳng và cải thiện tâm trạng của lợn.<br/>
                        <br/>

                    </div>

                    <li onClick={() => handleItemClick(6)}>6.Giai đoạn giết mổ và chế biến thịt:</li>
                    <div
                    id="content-6"
                    className={`content-item ${activeContent === 6? 'active' : ''}`}>
                         -  Sau khi đạt đủ trọng lượng và kích thước, lợn sẽ được giết mổ và chế biến thịt để sử dụng trong các món ăn. <br/>
                        - Trước khi đưa lợn vào giai đoạn giết mổ, chủ trang trại cần chú ý đến sức khỏe của lợn để đảm bảo thịt sản xuất ra đạt chất lượng và an toàn cho người tiêu dùng. Việc vận chuyển lợn đến nhà máy giết mổ cũng phải được thực hiện đúng quy trình để tránh gây stress cho lợn và ảnh hưởng tới chất lượng thịt.<br/>
                        - Tại nhà máy giết mổ, lợn sẽ được kiểm tra trước khi bắt đầu giai đoạn giết mổ. Sau khi lợn đã được giết mổ, các bộ phận của lợn sẽ được tách ra và đưa vào các quy trình chế biến khác nhau để sản xuất ra các sản phẩm từ thịt lợn như thịt xông khói, xúc xích, giăm bông, bì lợn, chả lợn và nhiều sản phẩm khác.<br/>
                        - Sau giai đoạn chế biến, thịt lợn sẽ được đóng gói và đưa ra thị trường tiêu thụ. Quy trình giết mổ và chế biến thịt lợn cần được thực hiện đúng quy trình và tuân thủ các tiêu chuẩn vệ sinh an toàn thực phẩm để đảm bảo chất lượng thịt sản xuất ra và an toàn cho người tiêu dùng.<br/>
                        <br/>

                    </div>
                   
                  </ul>


              </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Lon;
