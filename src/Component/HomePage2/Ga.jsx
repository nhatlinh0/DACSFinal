import React, { useState } from 'react';
import '../HomePage1/CrChe.css'
import ga1 from '../../img/trungga.png'
import ga2 from '../../img/gamai.png'
import Intro from '../Title/Title'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const Ga = () => {
  
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
          title={'Quy trình phát triển con gà'}
          img={ga1 }
        />
          <div class="crop-animal-item-detail">
            <img src={ga2} alt="" class="crop-animal-item__img"
          />
            <div class="crop-animal-item-desc">
                <ul>
                  <li onClick={() => handleItemClick(1)}>1.Giai đoạn ấp trứng:</li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 1 ? 'active' : ''}`}>
                            -	Thời gian: khoảng 21 ngày.<br/>
                            -	Hình dạng: Trứng gà có hình dạng hình trứng với đầu nhọn hơi vòng cung về một bên, phần thân trứng thon dài và phần đuôi có hình dạng nhọn và nhỏ hơn. Trứng được bao phủ bởi một lớp vỏ trắng bên ngoài, một màng mỏng dính chặt bao quanh lòng đỏ và lòng trắng, cũng như một lớp màng khác bao phủ toàn bộ bên trong trứng.<br/>
                            -	Kích thước: Kích thước của trứng phụ thuộc vào loại gia cầm. Thông thường, trứng gà có kích thước từ 5-6cm chiều dài và 4cm chiều rộng.<br/>
                            -	Sự phát triển: <br/>
                            +Trong quá trình ấp trứng, gà con sẽ phát triển từ một trứng nhỏ đến một con gà con hoàn chỉnh trong vòng 21 ngày. Trong giai đoạn đầu tiên của quá trình phát triển (ngày đầu tiên đến ngày thứ 7), các cơ quan nội tạng quan trọng của con gà con bắt đầu phát triển, bao gồm gan, phổi, tim, ruột và hệ thống thần kinh.<br/>
                            +Trong giai đoạn thứ hai (ngày thứ 8 đến ngày thứ 14), các chi tiết khác của con gà con bắt đầu hình thành, bao gồm lông và móng chân.<br/>
                            + Trong giai đoạn thứ ba (ngày thứ 15 đến ngày thứ 18), con gà con bắt đầu ngoắc đầu và cổ để hít khí trên bề mặt trứng. Cánh và chân tiếp tục phát triển.<br/>
                            +Cuối cùng, trong giai đoạn cuối cùng (ngày thứ 19 đến ngày thứ 21), con gà con hoàn toàn phát triển và sẵn sàng để nở ra khỏi trứng. Trứng bắt đầu rung lắc và mỏ của gà con sẽ đâm thủng phần cuối của trứng để có thể thoát ra.<br/>
                            *Điều kiện: trứng gà được đặt trong môi trường ấm áp, ẩm ướt, với độ ẩm từ 50-60%.<br/>
                            Quy trình chăm sóc: đảm bảo trứng được lật đều 3-5 lần/ngày, vệ sinh lồng ấp, đảm bảo nhiệt độ và độ ẩm ổn định. <br/>
                  </div>
                  <li onClick={() => handleItemClick(2)}>2.Giai đoạn ấp nở:</li>
                  <div
                    id="content-2"
                    className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                                       Giai đoạn 1-4 tuần tuổi:<br/>
                                        Thời gian: từ 1 đến 4 tuần tuổi.<br/>
                                        -	Tuần đầu tiên (tuần đầu tiên sau khi nở): Trong tuần đầu tiên, gà con cần được giữ ấm và ẩm để giúp cho lông mọc nhanh chóng và cho phép các cơ quan nội tạng của chúng phát triển tốt hơn. Trong thời gian này, gà con sẽ ăn và uống ít, thường chỉ khoảng 1/3 số lượng thức ăn và nước so với những tuần sau này. Gà con cũng thường ngủ rất nhiều, tới 90% thời gian ban ngày.<br/>
                                        -	Tuần thứ hai (tuần thứ hai sau khi nở): Trong tuần này, gà con bắt đầu nhanh chóng phát triển lông mới. Chúng cũng bắt đầu tiêu hóa thức ăn tốt hơn và tiêu thụ nước nhiều hơn. Gà con có thể bắt đầu tự lấy thức ăn và uống nước từ các nguồn có sẵn.<br/>
                                        -	Tuần thứ ba (tuần thứ ba sau khi nở): Trong tuần này, gà con sẽ bắt đầu phát triển cánh và bắt đầu thử nhảy và bay nhẹ nhàng. Chúng cũng sẽ tăng cường hoạt động và có xu hướng khám phá môi trường xung quanh.<br/>
                                        -	Tuần thứ tư (tuần thứ tư sau khi nở): Trong tuần này, gà con sẽ bắt đầu thực sự nỗ lực để đứng lên và di chuyển. Chúng cũng sẽ bắt đầu ăn nhiều hơn và tiêu thụ nước nhiều hơn. Trong tuần này, gà con cũng cần được cấp đầy đủ dinh dưỡng để phát triển tốt nhất có thể.<br/>
                                        *Chăm sóc<br/>
                                        Điều kiện: Nhiệt độ và độ ẩm: Nhiệt độ và độ ẩm trong môi trường phải được điều chỉnh để đảm bảo sự thoải mái và sức khỏe của gà con. Nhiệt độ phải được giữ ở mức độ từ 35 đến 37 độ C và độ ẩm từ 60 đến 70%.<br/>
                                        Quy trình chăm sóc: Đảm bảo trứng đã nở hoàn toàn được đưa ra khỏi lồng ấp và chuyển sang lồng nuôi, đưa gà non tới nguồn nước và thức ăn, đảm bảo nhiệt độ ấm áp.<br/>
                                        Cung cấp thức ăn và nước uống: Gà con cần được cung cấp thức ăn và nước uống đầy đủ và sạch sẽ. Các loại thức ăn dành cho gà con có thể được mua sẵn hoặc tự làm từ các nguyên liệu như bột gạo, bột ngô, trứng gà, vv.<br/>
                                        Sát khuẩn: Môi trường phải được vệ sinh sạch sẽ và tiêm thuốc kháng khuẩn để đảm bảo rằng gà con không bị nhiễm trùng.<br/>
                                        Theo dõi sức khỏe: Các gà con cần được kiểm tra thường xuyên để đảm bảo rằng chúng đang phát triển mạnh mẽ và không có bất kỳ vấn đề sức khỏe nào.<br/>
                                        Bảo vệ: Gà con cần được bảo vệ khỏi các tác nhân gây hại như côn trùng, thú săn mồi, vv.<br/>
                                        <br/>

                    </div>
                    <li onClick={() => handleItemClick(3)}>3. Giai đoạn 5-8 tuần tuổi:</li>
                  <div
                    id="content-3"
                    className={`content-item ${activeContent === 3? 'active' : ''}`} >
                                       
                                    -	Phát triển lông: Trong giai đoạn này, lông của gà sẽ phát triển nhanh chóng. Lông đầu tiên của gà con thường là lông rụng, sau đó là lông lớp phủ. Lông lớp phủ của gà con sẽ bắt đầu rõ ràng hơn và có màu sắc đẹp hơn.<br/>
                                    -	Tăng trưởng: Trong giai đoạn này, gà sẽ tiếp tục phát triển nhanh chóng, tăng trọng lượng và cân nặng của chúng sẽ tăng lên mỗi ngày.<br/>
                                    -	Hành vi và hoạt động: Trong giai đoạn này, gà sẽ trở nên năng động hơn và thường chơi đùa, tấn công và đuổi theo nhau. Gà sẽ bắt đầu học cách sử dụng cánh và bay ngắn khoảng cách.<br/>
                                    -	Tập ăn thức ăn cứng: Trong giai đoạn này, gà sẽ bắt đầu tập ăn thức ăn cứng và khỏe mạnh hơn. Chúng sẽ tập ăn cám, hạt, bột mì và các loại thức ăn khác.<br/>
                                    -	Các thói quen khác: Gà cũng sẽ bắt đầu khám phá môi trường xung quanh và học cách đào và tìm kiếm thức ăn. Chúng cũng sẽ học cách đào hố để làm tổ và chuẩn bị cho giai đoạn tiếp theo của sự phát triển.<br/>
                                    Điều kiện: Điều chỉnh nhiệt độ và độ ẩm: Nhiệt độ phải được điều chỉnh để đảm bảo sức khỏe và sự phát triển của gà. Nhiệt độ nên ở mức từ 24 đến 27 độ C và độ ẩm từ 60 đến 70%.<br/>
                                    Quy trình chăm sóc: <br/>
                                    +Cung cấp thức ăn và nước uống: Gà cần được cung cấp thức ăn và nước uống đầy đủ và sạch sẽ. Các loại thức ăn dành cho gà ở giai đoạn này có thể bao gồm thức ăn hỗn hợp và các loại rau xanh.<br/>
                                    +Vệ sinh chuồng trại: Chuồng trại phải được vệ sinh thường xuyên để đảm bảo môi trường sạch sẽ cho gà. Việc thay thế lót chuồng, làm sạch nước và thức ăn và sát khuẩn chuồng trại là rất quan trọng.<br/>
                                    +Kiểm tra sức khỏe: Gà cần được kiểm tra thường xuyên để phát hiện bất kỳ vấn đề sức khỏe nào và điều trị kịp thời.<br/>
                                    +Tăng cường sinh hoạt: Gà cần được tăng cường sinh hoạt để đảm bảo sức khỏe và sự phát triển của chúng. Bao gồm cung cấp đầy đủ ánh sáng và không gian di chuyển trong chuồng trại.<br/>
                                    +Điều chỉnh môi trường: Nếu cảm thấy gà không thoải mái với môi trường hiện tại, cần điều chỉnh nhiệt độ và độ ẩm để đảm bảo rằng chúng cảm thấy thoải mái và có thể phát triển mạnh mẽ.<br/>
                    </div>

                    <li onClick={() => handleItemClick(4)}>4. Giai đoạn trưởng thành</li>
                    <div
                    id="content-4"
                    className={`content-item ${activeContent === 4 ? 'active' : ''}`}>
                            Thời gian: từ 9 tuần trở lên.
                                -	Tăng trưởng cơ thể: Gà sẽ tiếp tục tăng trưởng về cơ thể và cân nặng. Chúng sẽ trở nên lớn hơn, mạnh mẽ hơn và khỏe mạnh hơn.<br/>
                                -	Phát triển lông: Lông của gà sẽ tiếp tục phát triển và trở nên đẹp hơn. Lông sẽ trở nên mượt mà và bóng bẩy hơn.<br/>
                                -	Đào hố: Gà sẽ tiếp tục đào hố để làm tổ và sẵn sàng cho quá trình đẻ trứng.<br/>
                                -	Hoạt động: Gà sẽ trở nên năng động hơn và thường chơi đùa, tấn công và đuổi theo nhau. Chúng sẽ tập ăn thức ăn khô và chuyển sang thức ăn dành cho gà trưởng thành.<br/>
                                -	Tập trung vào sản xuất trứng: Gà sẽ bắt đầu sản xuất trứng và tự động điều chỉnh lượng ăn và nước uống để đáp ứng nhu cầu sản xuất trứng.<br/>
                                -	Giảm khả năng bay: Gà sẽ mất khả năng bay cao và xa hơn do trọng lượng cơ thể tăng lên.<br/>
                                Điều kiện: Môi trường ấm áp, với nhiệt độ khoảng 18-22 độ C và độ ẩm khoảng 60-70%.<br/>
                                Quy trình chăm sóc: <br/>
                                +Cung cấp đủ thức ăn và nước uống: Gà cần được cung cấp đủ thức ăn và nước uống để phát triển tốt và duy trì sức khỏe.<br/>
                                +Kiểm tra tình trạng sức khỏe: Chăm sóc sức khỏe cho gà bao gồm kiểm tra tình trạng sức khỏe, phòng ngừa và điều trị bệnh nếu cần thiết.<br/>
                                +Vệ sinh chuồng trại: Giữ chuồng trại của gà sạch sẽ, khô ráo và thông thoáng sẽ giúp giảm nguy cơ lây nhiễm bệnh và tăng hiệu quả chăn nuôi.<br/>
                                +Thúc đẩy hoạt động vận động: Gà cần có đủ không gian để di chuyển và tập luyện để phát triển cơ bắp và giữ dáng.<br/>
                                +Kiểm soát môi trường: Đảm bảo điều kiện môi trường như nhiệt độ, độ ẩm, ánh sáng, không khí, ... đều phù hợp với loài gà của bạn để giúp chúng tăng trưởng và phát triển tốt.<br/>
                                +Quản lý giống: Nếu muốn giữ chất lượng giống, bạn cần quản lý cẩn thận việc lai tạo và chọn lọc giống gà để đảm bảo chúng đạt được những tiêu chuẩn chất lượng mong muốn.<br/>
                                <br/>

                    </div>
                   
                  </ul>


              </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Ga;
