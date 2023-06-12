import React, { useState } from 'react';
import './CrChe.css'
import Caphe3 from '../../img/caphe.png'
import Caphe from '../../img/caphe1.png'
import Intro from '../Title/Title'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const CaPhe = () => {
  
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
          title={'Quy trình phát triển cây cà phê'}
          img={Caphe }
        />
          <div class="crop-animal-item-detail">
            <img src={Caphe3} alt="" class="crop-animal-item__img"
            
          />
            <div class="crop-animal-item-desc">
                <ul>
                  <li onClick={() => handleItemClick(1)}>1. Giai đoạn sinh trưởng:</li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 1 ? 'active' : ''}`}>
                                    Giai đoạn này được tính từ khi hạt nảy mầm đến trước khi 
                                cây có hoa ( thời kỳ KTCB). <br/>
                                     + Thời kỳ vườn ươm:<br/>
                                Sự nảy mầm của hạt và thời kỳ cây trong vườn ươm: Sau khi gieo hạt khoảng 2-3 
                                tuần rễ sẽ xuất hiện, tiếp theo khoảng 20-25 ngày trục thân vươn thẳng đẩy 2 lá mầm 
                                còn Nằm trong vỏ trấu vượt lên khỏi mặt đất. Sau 10-15 ngày lớp vỏ trấu bị hai lá 
                                mầm đẩy rời ra, hai lá mầm xoè ngang được gọi là giai đoạn "lá sò". Giữa hai lá sò là 
                                một đỉnh sinh trưởng của thân cây cà phê, đến đây được xác định kết thúc quá trình nảy 
                                mầm của hạt cà phê. <br/>
                                   
                                    Khoảng 20-25 ngày sau thân tăng trưởng và có đốt thân đầu tiên mang một đôi lá 
                                thật thứ nhất. Sau 15-20 ngày sẽ có thêm một cặp lá. Cùng với sự tăng thêm các cặp lá 
                                là sự tăng trưởng chiều cao cây, khi cây có từ trên 5-7 cặp lá chiều cao cây biến động 
                                từ 20-30cm, tương đương thời gian là 6-8 tháng kể từ khi gieo hạt nảy mầm vào túi 
                                bầu. Đây chính là những chỉ tiêu tiêu chuẩn của cây giống trong vườn ươm, ở thời kỳ 
                                này bộ rễ cà phê phát triển trong phạm vi của túi bầu, chiều dài rễ cọc khoảng trên 
                                20cm, xấp xỉ 30 cm. Vì vậy, túi bầu để ươm cây giống phải có chiều cao từ 25-30cm 
                                mới phù hợp.<br/>
                                    + Những yêu cầu ngoại cảnh cần cho sự nảy mầm và cây trong vườn ươm:<br/>
                                    Hạt cà phê không có tính ngủ và rất nhanh mất sức nảy mầm. Nếu hạt cà phê 
                                phơi, sấy đến ẩm độ hạt thương phẩm là 12% thì hạt không còn khả năng nảy mầm. Để 
                                hạt có tỷ lệ nảy mầm cao thì sau khi thu hái xát vỏ quả, loại nhớt đem ngâm ủ ngay là 
                                tốt nhất. Điều kiện khi chưa làm được hoặc phải vận chuyển đi xa thì có thể bảo quản 
                                hạt cà phê vối còn ướt 40-45% hàm lượng nước, bằng cách gói trong bột than ẩm và để 
                                ở nơi mát sẽ kéo dài được khả năng nảy mầm 7 tháng, với cà phê chè cũng bằng cách 
                                trên đã kéo dài khả năng nảy mầm của cà phê chè là 1 năm (Bouharmont 1971). Theo 
                                kết quả nghiên cứu của Vander Vossen (1979) tại Kenya và của Couturon (1980) tại 
                                Côtđivoa thì hạt cà phê có hàm lượng nước từ 40-41% được bảo quản trong các túi 
                                Nilon thật kín và giữ ở nhiệt độ 150C-190C tỷ lệ nảy mầm vẫn có thể đạt tới 80% sau 
                                thời gian 30 tháng. Tại Việt Nam bảo quản hạt cà phê giống bằng cách bảo quản ở 
                                dạng cà phê thóc (còn vỏ trấu) trong môi trường ẩm độ không khí 85-90%, nhiệt độ từ 
                                22-250C, ẩm độ trong hạt từ 22-25%, lớp hạt rải mỏng khoảng 10cm thì hạt vẫn có thể 
                                nảy mầm khoảng 80-90% sau khi bảo quản 2-3 tháng. Một điều rất cần chú ý là hạt cà 
                                phê không thể bảo quản trong tủ lạnh lâu ngày ở nhiệt độ 10OC ( hàm lượng nước trong 
                                hạt là 40 - 41% được giữ trong Pôlythine thật kín)<br/>
                                    * Nhiệt độ: Khi hạt nảy mầm nhiệt độ thích hợp là 30-32OC, nhiệt độ dưới 15OC 
                                hạt không nảy mầm. Vì vậy, khi ủ hạt trong mùa Đông chú ý thúc mầm để hạt nhanh 
                                chóng nảy mầm. Thời kỳ từ sau nảy mầm đến hết tuổi vườn ươm (sau 6-8 tháng) cần 
                                nhiệt độ từ 24 đến 250C.
                                    * Nước: Khi nảy mầm hạt cần hút một lượng nước để đảm bảo hàm lượng nước 
                                khoảng 50% trọng lượng hạt, sau khi nảy mầm đến suốt trong thời kỳ vườn ươm cần 
                                ẩm độ đất khoảng 70-75%, ẩm độ không khí từ 75-80%. 
                                    * Ánh sáng: Thời kỳ này cây cà cây ưa ánh sáng tán xạ, vì vậy vườn ươm giống 
                                phải làm dàn che, đồng thời phải điều chỉnh ánh sáng cho phù hợp theo tuổi cây trong 
                                vườn ươm.<br/>
                                    * Chế độ dinh dưỡng: Cần bón đầy đủ và cân đối các nguyên tố đa lượng, đặc 
                                biệt chú ý nguyên tố lân vì thời kỳ này cũng là thời kỳ bộ rễ cần phát triển đầy đủ. 
                                    + Thời kỳ tăng trưởng (thời kỳ KTCB): Được tính từ khi cây cà phê đưa ra 
                                vườn sản xuất đến trước khi xuất hiện hoa. <br/>
                                Giai đoạn này cây phát triển các cặp cành ngang trên thân cây để tạo nên khung 
                                tán của cây và đó chính là các cành cho quả sau này. Tuỳ vào điều kiện thời tiết của 
                                vùng sinh thái, từng mùa khác nhau trong năm cũng như chế độ dinh dưỡng mà tốc độ 
                                ra lá mà phân cành sớm muộn khác nhau. Nếu chăm sóc tốt, khí hậu thuận lợi các 
                                giống cà phê chè thấp cây một năm có thể phát sinh từ 10-12 cặp cành, các giống cà 
                                phê chè cao cây và cà phê vối ít hơn, khoảng 8-10 cặp cành.<br/>
                                Trong giai đoạn tăng trưởng chiều cao và hình thành khung tán của cây cũng là 
                                thời kỳ phát triển bộ rễ. Vì vậy, cần giữ ẩm và chăm sóc tốt để bộ rễ phát triển bình 
                                thường. Một hoặc hai năm tiếp theo cây cà phê vẫn tiếp tục phát sinh cành và tăng 
                                trưởng chiều cao cây, bộ rễ ăn sâu và rộng hơn. Trong thời gian này cây cần đủ dinh 
                                dưỡng để phát triển tối đa về khung tán, thiếu dinh dưỡng cành kém phát triển, tán hẹp, 
                                đốt cành ít cà phê chè ít phát sinh cành cấp 2, dẫn tới khả năng cho hoa quả kém vào 
                                các năm sau.<br/>
                                    Khâu công việc bắt buộc trong thời kỳ này là tạo bộ khung tán cân đối và quy 
                                định độ cao phù hợp để tiện cho thu hoạch sau này.<br/>

                  </div>
                  <li onClick={() => handleItemClick(2)}>2. Giai đoạn sinh trưởng và phát triển hoa quả:</li>
                <div
                    id="content-2"
                    className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                            2.1. Thời kỳ năng suất cao và ổn định: <br/> 
                                         Từ khi cây bắt đầu ra hoa quả đến thời kỳ cho
                                    năng suất cao và ổn định khoảng 15-25 năm tuỳ thuộc vào sự chăm sóc và ngoại cảnh. 
                                    Sau năm đầu cây cho hoa quả bói lần đầu, bộ rễ đã phát triển mạnh, hệ rễ tơ đã phát 
                                    triển thành mạng rễ trong vùng tán cây, rễ trụ gần mặt đất to dần. Vào năm thứ 4 hoặc 
                                    thứ 5 sau khi ra hoa các rễ trụ phần gần cuối của rễ cọc phát triển sâu theo chiều dày 
                                    tầng đất mặt và thu hút lượng nước khá lớn cho cây. Sức phát triển mạnh của bộ rễ đã 
                                    tạo điều kiện cho cành phát triển. Thời kỳ này đòi hỏi có sự đầu tư rất lớn các biện 
                                    pháp kỹ thuật.<br/>
                                     2.2. Thời kỳ cây già cỗi:<br/>
                                    Đây là thời kỳ cuối của chu kỳ sinh học, được thể hiện ở chỗ 
                                    cành lá khô rụng dần, khả năng ra cành lá mới rất kém, cành mang quả gầy yếu vươn 
                                    dài chỉ còn lại một số chùm quả thưa thớt phía ngoài đầu cành, các chồi vượt mọc trên 
                                    thân ít, cằn cỗi, lá nhỏ và chuyển vàng. Bộ rễ bị thoái hoá, các rễ trụ ngắn dần, rễ tơ ít 
                                    thu nhỏ bán kính hoạt động và khả năng thu hút dinh dưỡng kém dần. Đồng thời nhiễm 
                                    sâu bệnh nhiều, năng suất giảm sút nhiều không đem lại hiệu quả kinh tế. Thời kỳ này 
                                    nên phá bỏ để cải tạo lại đất, vệ sinh đồng ruộng để trồng mới.          
                        
                </div>
                   
                </ul>


            </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CaPhe;
