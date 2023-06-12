import React, { useState } from 'react';
import './CrChe.css'
import tuong from '../../img/daunanh.png'
import tuong1 from '../../img/daunanh1.png'
import Intro from '../Title/Title'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const DauTuong = () => {
  
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
          title={'Quy trình phát triển cây đậu tương'}
          img={tuong }
        />
          <div class="crop-animal-item-detail">
            <img src={tuong1} alt="" class="crop-animal-item__img"
          />
            <div class="crop-animal-item-desc">
                <ul>
                  <li onClick={() => handleItemClick(1)}>1. Thời kỳ nảy mầm</li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 1 ? 'active' : ''}`}>
                               Sau khi hạt đậu tương hút được một lượng nước khoảng 50% trọng lượng hạt thì 
                                bắt đầu nảy mầm . Hạt đậu tương đủ nước có thể nảy mầm trong điều kiện nhiệt độ 8-
                                120C, nhưng thích hợp là nhiệt độ từ 18-260C, trong phạm vi này nhiệt độ cnàg cao 
                                nảy mầm càng nhanh. Nhiệt độ cao trên 350C làm hạt nảy mầm yếu (Hoàng Đức 
                                Phương). Thời gian nảy mầm ngắn sẽ thuận lợi cho sự phát triển ở các giai đoạn sau; 
                                hạn chế được tác hại của sâu bệnh hại, đảm bảo mật độ cây. Trên đồng ruộng đậu 
                                tương trồng vụ Xuân ở các tỉnh phía Bắc thưoì gian mọc mầm khoảng 4-5 ngày tương 
                                đương với đậu tương vụ Hè ở các tỉnh phía Bắc.<br/>
                                1. Đoạn thân dưới 2 lá mầm; 2. Thân trên lá mầm; 3. Lá mầm, 4. Lá đơn; 5. Chồi; 
                                6. Lá kép; 7. Rễ cọc; 8. Rễ phụ; 9. Nốt sần; 10. Đỉnh sinh trưởng; 11. Chùm quả<br/>
                                Khi rễ cọc dưới đất dài khoảng 2-3 cm thì đoạn thân dưới lá mầm đã dài ra, 
                                vươn qua lớp đất phủ hạt đẩy 2 lá mầm trồi lên khỏi mặt đất. Hai lá mầm xoè ra chuyển 
                                dần từ màu vàng ngà sang màu xanh và để lộ cặp lá đơn.<br/>
                                Để hạt đậu tương nảy mầm tốt thì độ ẩm đất lúc gieo thích hợp là 65-70%, đất 
                                có cấp hạt nhỏ, tơi xốp. Độ sâu lấp hạt từ 3-5 cm. Chất lượng giống tốt, đảm bảo tỷ lệ 
                                nảy mầm lớn hơn 85 %.<br/>
                  </div>
                  <li onClick={() => handleItemClick(2)}>2.Thời kỳ cây con:</li>
                  <div
                    id="content-2"
                    className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                                        Thời kỳ này được tính từ khi hạt đã mọc tối đa đến khi cây nở hoa 
                                        đầu tiên. Thời kỳ này còn gọi là thời kỳ sinh trưởng dinh dưỡng, cây tăng nhanh số 
                                        đốt, phát sinh cành và đốt cành nên số lá tăng nhanh; đối với các giống đậu tương ra 
                                        hoa hữu hạn thì khi cây có chùm hoa trên đốt tận cùng thì không còn khả năng tăng 
                                        chiều cao và số đốt. Ở cuối thời kỳ cây con cũng là lúc cây phân hoá mầm hoa nên có 
                                        tầm quan trọng tạo tiền đề cho sự ra hoa và tạo quả sau này.<br/>
                                        Thời kỳ cây con cần được chăm sóc chu đáo kịp thời đảm bảo đủ số cây/đơn vị 
                                        diện tích; xới xáo lần 1, lần 2 và vun gốc để cho đất tơi xốp, rễ phát triển mạnh, vi 
                                        khuẩn cố định đạm hoạt động tốt, bón phân kịp thời cho cây phát triển cân đối tránh 
                                        sinh trưởng dinh dưỡng quá mạnh, cây yếu, phân hoá mầm hoa kém. Thời kỳ cây con 
                                        nhiệt độ thích hợp cho phát triển thân cành là 20-250C. Ẩm độ thích hợp là 65-700C khi 
                                        cây mọc đến 2 lá kép; 70-750C từ 3 lá kép đến trước khi ra hoa.<br/>

                    </div>
                    <li onClick={() => handleItemClick(3)}>3. Thời kỳ ra hoa</li>
                  <div
                    id="content-3"
                    className={`content-item ${activeContent === 3? 'active' : ''}`} >
                                        Đây là thời kỳ quan trọng vì ảnh hưởng đến năng suất, thời kỳ ra hoa cây bước 
                                        vào giai đoạn sinh trưởng sinh thực, là sự phát sinh phát triển nhanh của hoa và nở hoa. 
                                        Hoa nở sớm hay muộn không phụ thuộc vào đặc tính của giống, mà còn phụ thuộc vào 
                                        thời vụ gieo trồng, vùng sinh thái khác nhau. Những giống có thời gian sinh trưởng 
                                        ngắn (chín sớm) như Cúc Lục Ngạn, Nam Vang trồng vụ Xuân tại Văn Điển (Hà nội) 
                                        thời gian sinh trưởng 80-84 ngày, nhưng khi trồng vụ Hè chỉ còn 70 ngày (Trần Đình 
                                        Long, 1991); <br/>
                                        Thời gian từ gieo đến ra hoa cũng ngắn lại; giống chín sớm trong vụ hè 
                                        dưới 30 ngày, vụ Xuân là 30 ngày hoặc tới 32 ngày. Thời gian từ gieo đến ra hoa của 
                                        các giống có thời gian trên 110 ngày sau gieo từ 45-50 ngày mới ra hoa.
                                        Thời gian ra hoa của đậu tương có thể rất tập trung nhưng cũng có thể rải rác 
                                        tuỳ thuộc vào giống và thời vụ trồng. Giống chín sớm như Cúc Lục Ngạn, tỉnh Bắc 
                                        Giang gieo vụ Xuân ra hoa trong thời gian từ 10-15 ngày, gieo vụ hè từ 7-12 ngày 
                                        (Hoàng Đức Phương, 1992); trong khi các giống chín muộn ra hoa kéo dài 40-45 ngày. 
                                        Thời gian ra hoa dài là đặc tính có lợi đối với cây đậu tương, vì gặp thời tiết bất thuận 
                                        làm rụng đợt hoa này thì còn có những đợt hoa nở sau. Tuy nhiên, những hoa nở trong 
                                        các đợt rộ thường có tỷ lệ đậu quả cao. Do đặc tính ra hoa cua rđâụ tương những điều 
                                        kiện ngoại cảnh nên tỷ lệ đậu quả thấp. Khi nghiên cứu yếu tố hạn chế đến số quả trên 
                                        cây đậu tương (K.Hinson và E.E. Hartwig, 1982) đã xác định: Yếu tố hạn chế đến số 
                                        quả trên cây không phải là tổng số hoa mà là những yếu tố khác hạn chế khả năng hình 
                                        thành và phát triển quả từ số hoa đã có.<br/>
                                        Hoa đậu tương của hầu hết các giống thường chỉ phát sinh trên các đốt từ 4-10 
                                        của thân. Các giống ra hoa hữu hạn bắt đầu ra hoa từ đốt thứ 10 cuả thân, một số giống 
                                        ra trên đốt tận ngọncuả thân cành thì số hoa quả nhiều hơn. Các giống ra hoa vô hạn 
                                        hoa nở từ đốt thứ 4 trở lên thì rất ít hình thành quả và các quả đó khi thu hoạch vẫn 
                                        chưa chín. Vì vậy, một số giống đậu tương do lai tạo với giống đậu tương dại có thân 
                                        leo thưuờng phải bấm ngọn sớm để hạn chế khả năng sinh trưởng và ra hoa ở các đốt 
                                        quá cao.<br/>
                                        Trên một chùn hoa các hoa nở rải rác có thể tới 4 - 5 ngày, vì vậy trên cây đậu 
                                        tương độ chín của các quả cũng rất khác nhau.<br/>
                                        * Nhân tố ảnh hưưỏng đến thời kỳ ra hoa: Đây là thời kỳ mẩm cảm với yếu 
                                        tố môi trường . Nhiệt độ thích hợp cho đậu tương ra hoa từ 22 - 280C, nhiệt độ cao trên 
                                        350C ảnh hưởng xấu đến quá trình thụ phấn, thụ tinh, đặc biệt khi nhiệt độ cao và có 
                                        kèm theo gió nóng, độ ẩm không khí xuống thấp 70%. Thời kỳ này tưới nước có tác 
                                        dụng làm tăng được ẩm độ không khí trong ruộng đậu tương.<br/>
                                        Ẩm độ không khí thích hợp cho sự ra hoa là 75 - 85%, ẩm độ đất từ 70-75%; 
                                        Nếu ẩm độ không khí và ẩm độ đất quá cao hoặc quá thấp sẽ làm cho nụ hoa rụng 
                                        nhiều, số hoa phát sinh ít, số hoa không thụ phấn, thụ tinh tăng lên, sẽ dẫn tới quả ít, 
                                        quả 1 hạt và tỷ lệ kép cao.<br/>
                                        Thời kỳ ra hoa cây tiêu thụ rất nhiều dinh dưỡng và nước nên cuối thời kỳ cây 
                                        con phải bón đủ phân và tưới nước hợp lý ở thời kỳ ra hoa, đồng thời chú ý phòng trừ 
                                        sâu hại khi mới bắt đầu ra hoa.<br/>
                                       

                    </div>

                    <li onClick={() => handleItemClick(4)}>4. Thời kỳ hình thành quả, hạt và chín</li>
                    <div
                    id="content-4"
                    className={`content-item ${activeContent === 4 ? 'active' : ''}`}>
                        Sự ra hoa làm quả, hạt trên cây đậu tương đan xen nhau, bởi vì sự ra hoa kế tiếp
                        nhau trên cùng một chùm hoa và trên nhiều chùm ở các đốt của thân, cành. Sau khi hoa 
                        nở 5-7 ngày quả bắt đầu hình thành, phát triển rất chậm và thường rất nhỏ, Trong điều 
                        kiện hoa ra tập trung, thời tiết thuận lợi quả lớn nhanh nhưng hạt chưa phát triển nên 
                        quả mỏng dẹt, chiều dài đã gần đạt kích thước tối đa. Khoảng 10 ngày tiếp theo hạt lớn 
                        nhanh nên bề dày quả tăng nhanh, những phần chứa hạt của quả nổi khá rõ, vỏ quả còn 
                        xanh và mềm, hàm lượng nước trong quả, trong hạt cao tới 80-90 %. Hạt càng lướn 
                        hàm lượng nước càng giảm, còn 60-70%. Đồng thời sự tích luỹ chất khô tăng dần.Giai 
                        đoạn cuối sự tích luỹ chất khô gần hoàn thành, hàm lượng nước trong hạt giảm nahnh 
                        và đột ngột, trong vài ngày có thể giảm từ 30% đến 15 - 20%. Lúc này tán lá vàng 
                        nhanh và cũng là thời kỳ chín sinh lý của hạt, trong khoảng 7-10 ngày đã có tới 1/2 số 
                        lá trên cây rụng, có một số ít giống lá ít rụng. Vỏ và lông quả đậu tương chuyển vàng 
                        rồi đạt tới màu sắc đặc trưng của giống (vàng đậm, nâu, xám hoặc đen) và khô dần, 
                        lông quả cứng nháp. Tuỳ điều kiện thời tiết khi chín, lá đậu tương rụng hết, quả chín 
                        khô, ẩm độ trong hạt còn 14-15%. Khi chín nên thu hoạch kịp thời vì để lâu vỏ quả sẽ 
                        nẻ tách hạt làm giảm đến năng suất. <br/>
                        + Nhân tố ảnh hưởng đến quá trình hình thành quả, hạt và chín
                        Khi quả, hạt hình thành cây đậu tương cần cung cấp đầy đủ nước, đảm bảo ẩm 
                        độ đất 70-75%, ẩm độ không khí 80-85%, đủ dinh dưỡng quả và hạt sẽ phát triển 
                        nhanh hơn, hạt sẽ mẩy hơn. Khi làm quả gặp khô hạ, gió nóng, ẩm độ không khí thấp 
                        quả dễ bị thui chột và rụng, hạt phát triển được cũng không đạt kích thước tối đa. Khi 
                        hạt chín ẩm độ đất chỉ cần 6,5%, ẩm độ không khí 70-75%.<br/>
                        Nhiệt độ cần cho sự hình thành qủa và hạt là 21-280C, thích hợp là 21-230C. Khi 
                        hạt chín cần nhiệt độ 17- 250C , thích hợp 19 - 200C.<br/>
                        Thời kỳ làm quả và hạt đậu tương có nhiều đối tượng có nhiều đối tượng sâu 
                        hại, đặc biệt là loại sâu đục quả gây hại từ bắt đầu ra quả đến lúc thu hoạch, vì vậy cần 
                        phát hiện sớm để phòng trừ.<br/>

                    </div>
                  </ul>


              </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DauTuong;
