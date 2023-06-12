import React, { useState } from 'react';
import './CrChe.css'
import Che1 from '../../img/che1.png'
import Che from '../../img/che.png'
import Intro from '../Title/Title'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
const App = () => {
  
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
          title={'Quy trình phát triển cây chè'}
          img={Che1 }
        />
          <div class="crop-animal-item-detail">
            <img src={Che} alt="" class="crop-animal-item__img"
          />
            <div class="crop-animal-item__desc">
                <ul><p class="title_phu" > Chè là cây lâu năm có 2 chu kỳ phát triển: Chu kỳ phát triển lớn và chu kỳ phát 
                      triển nhỏ.</p>
                  <li onClick={() => handleItemClick(1)}>1.Chu kỳ phát triển lớn</li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 1 ? 'active' : ''}`}>
                                Chu kỳ phát triển lớn hay còn gọi là chu kỳ phát dục cá thể của cây chè bao gồm 
                                cả đời sống của cây chè, kể từ khi tế bào trứng được thụ tinh bắt đầu phân chia (đối với 
                                chè hạt) hoặc từ khi phôi mầm bắt đầu phân hóa đến khi hình thành một cây mới (nhân 
                                giống vô tính) cho đến khi cây già cỗi và chết. Cây chè là cây lâu năm có chu kỳ sinh 
                                trưởng rất dài và có thể đạt tới 100 năm hoặc lâu hơn. Chè là cây có khả năng ra hoa 
                                kết quả nhiều lần trong chu kỳ sống của mình. Theo một số tác giả của Trung Quốc thì 
                                chu kỳ lớn của chè được chia làm 5 giai đoạn:<br/>
                                + Giai đoạn phôi thai: Giai đoạn phôi hạt được tính từ khi tế bào trứng được thụ 
                                tinh bắt đầu phân chia, hình thành hạt, đến khi hạt chín (giai đoạn này kéo dài khoảng 
                                15 tháng) hoặc từ khi phôi mầm bắt đầu phân hóa đến khi hình thành một cây mới đối 
                                với nhân giống vô tính (giai đoạn này kéo dài 60 - 80 ngày). Đây là giai đoạn đầu tiên 
                                của cây chè chủ yếu nằm ở vườn ở chè giống lấy hạt hoặc chè cành.<br/>
                                + Giai đoạn cây con: Giai đoạn cây con được tính từ khi hạt chè hoặc cành chè
                                bắt đầu nẩy mầm cho đến khi cây chè ra hoa kết quả lần đầu. Giai đoạn này kéo dài từ 
                                1 - 2 năm (chè hạt), 3-6 tháng (cành giâm). Ở Việt Nam cây chè gieo hạt 1 tuổi đã có 
                                khả năng ra hoa kết quả lần đầu.<br/>
                                Ở giai đoạn cây con, sinh trưởng dinh dưỡng phát triển mạnh, tán cây, bộ rễ chủ 
                                yếu phát triển theo chiều cao, chiều sâu hơn chiều ngang gọi là ưu thế sinh trưởng hai 
                                đầu. Giai đoạn này cần chú ý chăm sóc tốt để cây sinh trưởng khoẻ.<br/>
                                + Giai đoạn cây non: Giai đoạn cây non được tính từ khi cây chè ra hoa kết quả
                                lần đầu tiên đến khi cây chè định hình (có bộ khung tán ổn định). <br/>
                                Thời gian này thường kéo dài từ 2 - 3 năm. Trong điều kiện Việt Nam giai đoạn 
                                này từ năm thứ 2 đến năm thứ 4.<br/>
                                Đặc điểm của giai đoạn này là tuy cây chè đã có hoa, quả nhưng sinh trưởng dinh 
                                dưỡng vẫn chiếm ưu thế, cùng với sự vươn cao của thân và sự đâm sâu của rễ thì các 
                                cành bên, rễ bên cũng bắt đầu phát triển (tuy nhiên ưu thế đỉnh vẫn còn).<br/>
                                Cần thực hiện tốt các biện pháp kỹ thuật chăm sóc chè non, trồng giặm, làm cỏ, 
                                bón phân, bảo vệ thực vật (thâm canh ngay từ đầu). Tiến hành đốn tạo hình nhằm hạn 
                                chế sinh trưởng đỉnh, kích thích mầm nách và cành ngang phát triển, tạo cho cây chè có 
                                bộ khung tán to, khỏe, vững chắc, hái tạo tán là chủ yếu, không tận thu làm kiệt sức.
                                + Giai đoạn chè lớn: Giai đoạn chè lớn được tính từ khi cây chè có bộ khung tán 
                                ổn định, bước vào giai đoạn kinh doanh, thu hoạch búp đến khi cây chè có biểu hiện 
                                thay tán mới, phía gốc mọc lên những cành vượt thay thế lớp cũ đã già cỗi. Giai đoạn 
                                này thường kéo dài thường 20 - 30 năm hoặc lâu hơn tùy theo giống, đất đai, khí hậu, 
                                chế độ quản lý, chăm sóc và khai thác.<br/>
                                Giai đoạn chè lớn là giai đoạn dài nhất và là giai đoạn kinh doanh sản xuất. Trong 
                                giai đoạn này hai quá trình sinh trưởng dinh dưỡng và sinh trưởng sinh thực diễn ra 
                                song song. Ở giai đoạn này các biểu hiện về bản chất của giống thể hiện rõ rệt nhất.
                                + Giai đoạn già cỗi: Giai đoạn già cỗi bắt đầu được tính từ khi nương chè có 
                                biểu hiện thay tán đến khi cây chè già và chết. Ở giai đoạn này cây suy yếu dần, ra 
                                hoa, kết quả nhiều, cành tăm hương nhiều, các mầm chè mọc lên nhanh chóng bị mù 
                                xòe, lá chè nhỏ, tuổi thọ lá giảm, tán mỏng, cành chè có nhiều mấu, dưới gốc xuất hiện 
                                nhiều cành vượt.<br/>
                                Giai đoạn này cần tiến hành đốn đau, đốn trẻ lại nhằm tạo tán mới, bón phân, 
                                chăm sóc tốt nhằm kéo dài thời gian thu hoạch búp.<br/>
                  </div>
                  <li onClick={() => handleItemClick(2)}>2. Chu kỳ phát triển nhỏ: </li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                                          Chu kỳ phát triển nhỏ hay còn gọi là chu kỳ phát triển 
                                          hàng năm được tính từ khi mầm chè bắt đầu phân hóa sau đốn cho đến khi mầm chè 
                                          ngừng sinh trưởng vào thời kỳ cuối năm. Ở Việt Nam thời kỳ này thường kéo dài 1 
                                          năm, từ tháng 1 đến tháng 12 hàng năm.<br/>
                                          Chu kỳ phát triển hàng năm của cây chè bao gồm 2 quá trình phát triển song 
                                          song: sinh trưởng dinh dưỡng và sinh trưởng sinh thực. Trong mùa xuân, mùa hè, trên 
                                          cây chè quá trình sinh trưởng dinh dưỡng chiếm ưu thế. Mùa Thu và mùa Đông sinh 
                                          trưởng sinh thực chiếm ưu thế. Quá trình sinh trưởng dinh dưỡng và sinh trưởng sinh 
                                          thực của cây chè có ảnh hưởng qua lại với nhau và phụ thuộc rất nhiều vào điều kiện tự 
                                          nhiên (khí hậu, đất đai...), giống và chế độ canh tác.<br/>
                                          + Quá trình sinh trưởng dinh dưỡng: Quá trình sinh trưởng dinh dưỡng của
                                          cây chè bao gồm sinh trưởng búp, sinh trưởng cành và sinh trưởng rễ.<br/>
                                          * Sinh trưởng búp chè: Búp chè hoạt động sinh trưởng theo một quy luật nhất 
                                          định và hình thành nên các đợt sinh trưởng theo thứ tự thời gian. Thời gian hình thành 
                                          1 đợt sinh trưởng phụ thuộc vào giống, điều kiện khí hậu và chế độ canh tác.
                                          Trong điều kiện tự nhiên (không đốn, không hái búp) một năm cây chè có từ 3 – 5 
                                          đợt sinh trưởng. Trong điều kiện có đốn và hái búp một năm cây chè có từ 6 – 8 đợt 
                                          sinh trưởng. Số đợt sinh trưởng càng nhiều thì số lứa hái càng nhiều và sản lượng 
                                          nương chè càng cao.<br/>
                                          * Sinh trưởng cành chè: Khi còn nhỏ cây chè có đặc tính phân cành một trục, 
                                          theo kiểu phân đơn, có thân chính rõ rệt, tán cây không to (đặc biệt là chè trồng bằng 
                                          hạt). Cây chè lớn tuổi và chè già có đặc tính phân cành hợp trục và thân chính không 
                                          rõ. Sau khi hái búp hay đốn thì cành chè phân nhánh theo kiểu trục hợp nhiều giả. Dựa 
                                          vào đặc tính này người ta sử dụng biện pháp đốn, hái để tạo tán cho cây chè (đặc biệt là 
                                          thời kỳ kiến thiết cơ bản), làm tăng mật độ cành chè, mật độ búp chè (thời kỳ kinh 
                                          doanh sản xuất) tạo điều kiện cho cây chè có khả năng cho năng suất cao, chất lượng 
                                          nguyên liệu tốt. <br/>
                                          * Sinh trưởng của bộ rễ chè: Khi hạt chè nảy mầm, mầm rễ phát triển thành rễ 
                                          trụ, sau 6 - 7 tháng rễ trụ phát triển chậm lại và các rễ nhánh (rễ bên) mới phát triển 
                                          mạnh lên. Đối với chè cành thì rễ nhánh là chủ yếu.<br/>
                                          Quá trình phát triển của bộ rễ chè lúc nhanh, lúc chậm xen kẽ với sự phát triển 
                                          của bộ phận trên mặt đất lúc chậm, lúc nhanh. Theo các nhà khoa học Trung Quốc thì 
                                          về mùa Đông cành lá sinh trưởng chậm lại còn bộ rễ phát triển mạnh lên, đến tháng 5 
                                          búp chè sinh trưởng mạnh thì bộ rễ phát triển chậm lại. Trong một năm rễ chè có từ 3 -
                                          4 đợt sinh trưởng, xen kẽ với các đợt sinh trưởng búp.<br/>
                                          Các biện pháp kỹ thuật: Làm đất, bón phân, điều tiết chế độ nước, dinh dưỡng và 
                                          khí hậu sẽ ảnh hưởng đến sự phát triển của bộ rễ chè.<br/>
                                          - Sinh trưởng sinh thực của cây chè: Quá trình sinh trưởng sinh thực của cây 
                                          chè bao gồm : Sự hình thành chồi hoa, nở hoa, thụ phấn và kết quả.
                                          Chè là cây thân gỗ nở hoa nhiều lần. Ở Liên Xô, Trung Quốc, cây chè 3 - 4 tuổi 
                                          ra hoa, kết quả lần đầu. Ở Việt Nam, thời kỳ này ngắn hơn: Cây chè 1- 3 tuổi đã nở 
                                          hoa, kết quả lần đầu. Từ khi mầm hoa bắt đầu phân hóa đến khi quả chín là 15 tháng. Ở 
                                          Việt Nam mầm hoa bắt đầu từ tháng 6, 7; quả chín vào tháng 10, tháng 11. 
                                          Như vậy trên cây chè luôn luôn tồn tại hai quá trình sinh trưởng dinh dưỡng và 
                                          sinh trưởng sinh thực. Đây là một đặc điểm riêng của cây chè.<br/>
                                          + Quá trình hình thành nụ hoa: Cây chè không có cành chuyên ra hoa, quả. 
                                          Chồi lá và chồi hoa cùng mọc ở nách lá. Mỗi nách lá thường có một chồi lá (mầm dinh 
                                          dưỡng) và từ 1 - 4 chồi hoa (mầm sinh thực).<br/>
                                          Trong điều kiện Việt Nam sự hình thành nụ thường bắt đầu từ tháng 6. Đầu tiên 
                                          là hình thành đài hoa, tràng hoa, sau đó là hình thành các nhị đực, nhụy cái.<br/>
                                          + Quá trình nở hoa: Hoa chè thường bắt đầu nở từ tháng 10 - 12 (nở rộ vào 
                                          tháng 11). Quá trình nở hoa như sau:<br/>
                                          Nụ bộp -Bắt đầu nở hoa - Nở hoàn toàn - Nhị đực rụng -
                                          Cánh hoa rụng.<br/>
                                          (Quá trình từ nụ bộp đến nở hoa hoàn toàn thường kéo dài khoảng 1 tháng)
                                          Hoa chè nở trong điều kiện nhiệt độ từ 16–25OC, nhiệt độ thích hợp nhất là 18 –
                                          20OC, độ ẩm tương đối của không khí 60 - 70% và trong điều kiện ánh sáng ngày ngắn. 
                                          Hoa chè thường nở từ 6-10 giờ sáng. Trong điều kiện nhiệt độ thấp quá trình nở hoa 
                                          chậm lại, ở - 2OC hoa chè không nở, hoa chè sẽ bị chết, rụng khi nhiệt độ thấp hơn –
                                          4
                                          OC.<br/>
                                          + Quá trình thụ phấn: Hoa chè là hoa lưỡng tính nhưng khả năng tự thụ phấn 
                                          rất thấp. Sự thụ phấn khác hoa cho tỷ lệ đậu quả cao. Do vậy sự thụ phấn của hoa chè 
                                          phải dựa vào côn trùng: Ong mật, ong vàng, ruồi, kiến. Khi hoa chè chưa nở, núm nhụy 
                                          cái còn khô, khi hoa chè nở ở đầu nhụy cái tiết ra một chất dịch đường giống như tuyến 
                                          mật hấp dẫn côn trùng. Chè là cây có rất nhiều hoa, mỗi cây một năm có 200 - 4.000 nụ 
                                          hoa tuy nhiên tỷ lệ đậu quả rất thấp thường chỉ đạt từ 2- 4%.<br/>
                                          + Quá trình hình thành quả: Sau khi hoa chè được thụ phấn, nhụy cái phát dục 
                                          rồi bước vào thời kỳ ngủ nghỉ. Đến mùa xuân năm sau khi nhiệt độ tăng dần, trời ấm 
                                          mới tiếp tục phát triển. Phía ngoài phân hóa thành biểu bì sau đó hình thành vỏ sành, 
                                          vỏ lụa. Phía trong phân hóa thành phôi nhũ (lá mầm) và phôi nguyên (mầm chè). Quả 
                                          chè bắt đầu chín vào cuối tháng 9 và đầu tháng 10. Khi quả chín, vỏ quả nứt ra và hạt 
                                          chè rơi ra ngoài. Khi quả chín, vỏ quả có màu xanh đậm nâu, hạt chè có màu xám đen.
                                          Sự ra hoa kết quả của chè rất khác nhau ở mỗi giống. Các giống chè thuộc biến 
                                          chủng Trung Quốc lá to, Trung Quốc lá nhỏ thường có nhiều hoa quả hơn các giống 
                                          chè Shan-Ấn Độ.<br/>
                                          Sau khi thụ tinh, quả được hình thành. Quả chè non bị rụng rất nhiều do một số 
                                          nguyên nhân sau: Hạt phấn yếu, quá trình thụ phấn không diễn ra, do điều kiện khí hậu 
                                          không thích hợp: Mưa, nhiệt độ thấp, do chế độ dinh dưỡng mất cân đối, bón quá nhiều 
                                          đạm, do hái búp, đốn hàng năm.
                    </div>
                    
                  </ul>


              </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
