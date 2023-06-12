import React, { useState } from 'react';
import "./CrChe.css"
import Intro from '../Title/Title';
import Caosu1 from '../../img/caosu.png';
import Caycaosu from '../../img/caycaosu.png';
import Navbar from '../Navbar/Navbar';
const Caosu = () => {
  
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
          title={'Quy trình phát triển cây cao su'}
          img={Caosu1 }/>
          <div class="crop-animal-item-detail">
            <img src={Caycaosu} alt="" class="crop-animal-item__img"/>
            <div class="crop-animal-item-desc">
      <ul>
        <li onClick={() => handleItemClick(1)}>GĐ Cây con trong vườn ươm</li>
        <div
          id="content-1"
          className={`content-item ${activeContent === 1 ? 'active' : ''}`}>
                      Giai đoạn này bắt đầu từ khi gieo hạt cho đến lúc xuất khỏi vườn, có thể kéo dài
                      từ 6 tháng (bầu non không tầng lá) đến 24 tháng (stump lở, stump bầu...). Đặc điểm của
                      giai đoạn này là cây con tăng trưởng theo chiều cao, sự sinh trưởng các tầng lá theo
                      chu kỳ và mọc ra trên thân chính. Đường kính thân tăng trưởng chậm hơn là chiều cao
                      rất nhiều. Trong vòng 20-30 ngày cây có thể tăng cao 10-15cm trong điều kiện thuận
                      lợi. Bình quân mổi tháng cây có thể cho thêm một tầng lá mới. Trong điều kiện bị lạnh
                      (lớn hơn 180C), khô hạn, hay bị bệnh lá thì tốc độ tăng trưởng chiều cao, số tầng lá và đường
                      kính thân bị chậm lại rất nhiều. Đây là khó khăn cho việc sản xuất cây con trong những
                      vùng có mùa đông lạnh.<br/>
                      Cây con trong giai đoạn này cần được chăm sóc cẩn thận với đầy đủ dinh dưỡng
                      và nước để nhanh chóng đạt được đường kính lớn đủ kích thước để ghép và để dự trử
                      dinh dưỡng trong thân nhằm sinh trưởng mạnh sau khi xuất vườn và trồng mới. Tốc độ
                      phát triển tầng lá và đường kính thân được xem là hai chỉ tiêu quan trọng để xác định
                      sức sinh trưởng của cây con trong thời kỳ này.
        </div>
        <li onClick={() => handleItemClick(2)}>GĐ kiến thiết cơ bản</li>
        <div
          id="content-2"
          className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                                Giai đoạn này được tính từ khi cây con được trồng ngoài đại trà cho đến lúc bắt
                                đầu khai thác mủ. Giai đoạn KTCB có thể kéo dài 10 năm hoặc chỉ ngắn có 6 năm tuỳ
                                thuộc vào giống, loại cây con đem trồng, điều kiện đất đai, thời tiết khí hậu và chế độ
                                chăm sóc. Nhiều giống có tốc dộ tăng trưởng nhanh như PB235, RRIV2 (LH82/156),
                                RRIV4 (LH82/182).v.v. trong điều kiện thuận lợi có thể thu mủ sau 6 năm trồng.
                                Ngược lại những giống có tốc độ tăng trưởng trung bình hoặc kém như GT1, PR261
                                hay RRIM600. Những cây con có thời gian dài trong vườn ươm (trên 18 tháng) có khả
                                năng tăng trưởng nhanh hơn những cây con dưới 12 tháng trong vườn ươm, vì thế có
                                thể rút ngắn thời gian KTCB đến 6 tháng. Những vùng có đất đai kém màu mỡ, khí hậu
                                khắc nghiệt (lạnh và thiếu ánh sáng, gió mạnh) cây thường sinh trưởng chậm hơn cao
                                su trồng trong Cơ vùng thuận lợi rất nhiều đặc biệt trong giai đoạn đầu (trồng mới).
                                Cao su KTCB tại Cơ vùng Bắc Miền Trung thường chỉ cho tăng trưởng mạnh ở năm
                                thứ 3-4 sau khi trồng mới. Vì thế, thời kỳ này có thể kéo dài thêm 1-3 năm. Chế độ bón
                                phân và làm cỏ tốt có thể rút ngắn khoảng 1 năm.<br/>
                                Sau một năm tuổi cao su có thể phân cành, tuy nhiên thời kỳ rộ nhất vẫn là 3 năm
                                sau trồng. Trong năm, cao su thường phân cành trong những tháng có biên độ nhiệt
                                ngày và đêm lớn, ở nhiều vùng trong cả nước cao su thường phân cành mạnh mẽ từ
                                tháng 1-4. Cành cao su thường gây cản trở cho việc cạo mủ khi chúng xuất hiện trong
                                khoảng từ 0-3m tính từ mặt đất. Vì thế, nó thường được tỉa loại ngay khi vừa thấy xuất
                                hiện trong đoạn thân từ 0-3m. Trong thời kỳ tạo tán rộ nhiều giống cao su như
                                RRIM600 rất mẩn cảm với bệnh nấm hồng rất nguy hiểm. Vào giữa hoặc cuối thời kỳ
                                KTCB là giai đoạn cây cây su bắt đầu thành thục có thể cho hoa và quả (khoảng 5 năm

                                39

                                sau khi trồng). Cây cao su vào lúc này sinh trưởng khoẻ về đường kính thân, cành lá
                                phát triển mạnh về tổng diện tích lá và số lượng lá. Tuy nhiên, kích thước lá có nhỏ
                                lại. Trong khi vào đầu thời kỳ KTCB cây thường phát triển mạnh về chiều cao hơn, tốc
                                độ ra lá chậm hơn, số lượng lá cũng ít hơn rất nhiều nhưng diện tích mỗi lá lại lớn hơn.
                                Phần dưới mặt đất có sự phát triển chậm trong 1-2 năm đầu nhưng sau đó sinh trưởng
                                rất mạnh. Khi cây cao su giao tán, các rễ tơ có thể được nhìn thấy ở giữa hai hàng cao
                                su (3-5 năm sau trồng). Nhu cầu dinh dưỡng của cây trong thời kỳ này đặc biệt cần
                                thiết, vì nếu thiếu dinh dưỡng trong thời kỳ này cây sẽ cho mủ kém và sinh trưởng
                                kém. Hơn thế nữa, việc bù đắp những thiếu hụt dinh dưỡng của cây khi cây đã bước
                                vào giai đoạn kinh doanh thường không mang lại hiệu quả cao và tốn kém hơn nhiều.
                                Cây cao su ở giai đoạn này có thể tự cân đối nhu cầu nước của mình trong điều kiện
                                mùa khô kéo dài 4-5 tháng. Vì thế, không cần phải cung cấp nước cho cây như đối với
                                nhiều cây công nghiệp dài ngày khác như tiêu và cà-phê.<br/>
                                Thời kỳ KTCB là một thời kỳ dài mà nhà nông chỉ đầu tư chứ không thu lợi từ
                                cây cao su. Vì thế, việc tìm mọi cách để rút ngắn giai đoạn này là hướng quan trọng
                                trong việc phát triển diện tích cao su tại nước ta hiện nay. Những giải pháp về giống và
                                cây con được xem là then chốt nhất có thể đáp ứng những đòi hỏi trên.
        </div>
        <li onClick={() => handleItemClick(3)}>GĐ Khai thác mủ</li>
        <div
          id="content-3"
          className={`content-item ${activeContent === 3 ? 'active' : ''}`}>
                                 Đây là giai đoạn dài nhất, bắt đầu từ khi cây có thể khai thác mủ đến lúc cây bị
                                thanh lý (loại bỏ). Căn cứ vào sự biến thiên về năng suất hằng năm người ta chia thành
                                3 thời kỳ là: thời kỳ khai thác cao su non (tơ- KTCSN), thời kỳ khai thác cao su trung
                                niên (KTCSTN) và thời kỳ khai thác cao su già (KTCSG).<br/>
                                +Thời kỳ KTCSN: Cây vẫn tiếp tục sinh trưởng mạnh về số lượng cành nhánh,
                                chu vi thân (vanh), độ dày vỏ, sản lượng mủ tăng nhanh theo năm. Tốc độ tăng sãn
                                lượng hằng năm phụ thuộc nhiều vào giống, chế độ khai thác và chăm sóc. Thời kỳ này
                                kéo dài chừng 10-12 năm. Nhiều giống có thể đạt đến năng suất cao chỉ trong vòng vài
                                năm từ khi khai thác như giống PB235, RRIV1... trong khi GT1 lại cần đến 6-7 năm để
                                có thể đạt được năng suất cao. Đặc tính cho năng suất cao chậm làm cho người trồng
                                dể nản lòng và hiển nhiên là kém hiệu quả kinh tế.<br/>
                                Do vỏ của thân trong thời kỳ này còn mỏng, đang tăng trưởng mạnh nên việc khai
                                thác mủ cần có tay nghề cao để tránh phạm vào thân. Vườn cây trong giai đoạn này
                                thường trở nên âm u và ẩm thấp nên rất thuận lợi cho nhiều loại bệnh lá phát triển
                                mạnh thành dịch, đặc biệt là bệnh Phấn Trắng (Oidium hevea) và bệnh rụng lá mùa
                                mưa (Phytophtora palmivora và P. botrioza). Bệnh thường xuất hiện nhiều trong mùa
                                mưa tại khu vực Bắc Miền Trung làm thiệt hại nặng nề đến sản lượng mủ.<br/>
                                + Thời kỳ khai thác cao su trung niên (KTCSTN): Khi năng suất không còn
                                tăng thêm nữa và giử vững mức năng suất đó theo năm thì cây cao su đã bước vào thời
                                kỳ CSTN. Tuỳ theo chế độ chăm sóc, khai thác trước đó, hiện tại và giống mà thời kỳ

                                40

                                này dài hay ngắn. Nếu vườn cây không được chăm bón tốt trong giai đoạn KTCB và
                                KTCSN khi cây bước vào thời kỳ này chỉ duy trì năng suất cao trong một khoảng thời
                                gian ngắn và sau đó giảm năng suất. Việc khai thác thái quá trong giai đoạn trước cũng
                                có thể làm cho tỷ lệ cây khô mủ nhiều hơn xảy ra trong thời kỳ này. Lớp vỏ tái sinh
                                trên đoạn thân khai thác bị thương tổn nhiều sẽ là trở ngại lớn cho việc khai thác mủ
                                trong thời kỳ này.
                                + Thời kỳ khai thác cao su già (KTCSG): Khi vườn cây có hiện tượng giảm
                                năng suất trong nhiều năm liền thì vườn cây đã bước vào thời kỳ này. Tốc độ giảm
                                năng suất nhanh hay chậm còn tuỳ vào giống và chế độ chăm sóc và khai thác trước đó.
                                Vườn cây lúc này thường rất âm u, ẩm độ không khí cao nên để mẩn cảm với bệnh
                                rụng lá mùa mưa, có thể làm giảm sản lượng nhanh chóng.
        </div>
      </ul>


    </div>
    </div>
    </div>
  )
}

export default Caosu