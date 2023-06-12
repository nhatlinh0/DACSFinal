import React, { useState } from 'react';
import './CrChe.css'
import Mia2 from '../../img/mia2.png'
import Mia1 from '../../img/mia1.png'
import Intro from '../Title/Title'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const Mia = () => {
  
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
          title={'Quy trình phát triển cây mía'}
          img={Mia1 }
        />
          <div class="crop-animal-item-detail">
            <img src={Mia2} alt="" class="crop-animal-item__img"
          />
            <div class="crop-animal-item-desc">
                <ul><p>SINH TRƯỞNG PHÁT TRIỂN VÀ YÊU CẦU SINH THÁI CỦA CÂY MÍA <br/>
                        Các thời kỳ sinh trưởng phát triển. Chu kỳ sinh trưởng của cây mía thường là 
                        một năm ở vùng nhiệt đới và 2 năm ở các vùng có khí hậu đặc biệt. Vùng Natal (Nam 
                        Phi) mía tơ sinh trưởng 24 tháng và mía gốc 18 tháng. Ở Ha Oai, mía sinh trưởng trong 
                        vòng 18 tháng. Nước ta mía trồng trong vụ xuân có thời gian sinh trưởng là 11-12 
                        tháng, vụ thu sinh trưởng trong 14 tháng. Chu kỳ sinh trưởng của cây mía được chia 
                        làm 5 thời kỳ.<br/></p>
                  <li onClick={() => handleItemClick(1)}>1.Thời kỳ nẩy mầm:</li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 1 ? 'active' : ''}`}>
                               Được tính từ khi trồng đến khi mầm mọc khỏi mặt đất và được chia làm 3 giai 
                                đoạn: Bắt đầu mọc (khi có 10 % mọc), mọc rộ (khi có trên 50 % mọc), thời kỳ cuối 
                                (khi có trên 80 % mầm mọc). Quá trình nảy mầm là quá trình chuyển biến từ trạng thái 
                                ngủ của nốt rễ, mầm sang trạng thái hoạt động của cây con và rễ non, sinh sôi nảy nở 
                                thêm nhiều thân mía mới. Một loạt biến đổi sinh hóa xảy ra. Mía hô hấp rất mạnh.
                                Dưới tác dụng của các loại men, đường sacaro, các hợp chất hữu cơ phức tạp 
                                không tan biến thành những chất đơn giản có thể tan được và dễ tiêu cung cấp cho 
                                mầm và rễ.<br/>
                                T + A0
                                <br/>
                                Đường Sacaro --- Đường Glucô.<br/>
                                enzim<br/>
                                To + A 0
                                <br/>
                                Protein Amino axit <br/>
                                enzim<br/>
                                Thời gian các phản ứng trên xảy ra dài hay ngắn tùy thuộc vào ẩm độ và nhiệt 
                                độ. Có thể 15 ngày thì kết thúc (vụ thu) nhưng cũng có thể 30 - 60 ngày (vụ đông). 
                                Nhiều kết quả nghiên cứu cho thấy (Evans) có tương quan nghịch giữa hàm lượng 
                                đường glucô và số ngày cần thiết cho nảy mầm, càng nhiều glucô, sự nảy mầm càng 
                                nhanh; có tương quan thuận giữa hàm lượng đạm tan và tỷ lệ nẩy mầm (N tan càng 
                                nhiều thì tỷ lệ nảy mầm càng cao).<br/>
                                Nhân tố ảnh hưởng:<br/>
                                T
                                oC min. 0-13oC, max. 35-36oC, thích hợp 26-33oC. Âm độ:75-85% thuận lợi 
                                cho nẩy mầm bé hơn 75 % nảy mầm kém, không đều, trên 85 % có thể bị chết vì yếm khí. 
                                Yếu tố nội tại: Các giống khác nhau khả năng nảy mầm khác nhau (F134 lớn hơn Poj 3016). 
                                Chất lượng hom, vị trí hom trên thân cũng ảnh hưởng rất lớn đến tỷ lệ mọc mầm (xem
                                                                    bảng 5). <br/>
                                Bảng 2.1. Sự nẩy mầm của các loại hom non và già<br/>
                                
                                Độ dài hom: Mầm trên hom, bao giờ cũng có hiện tượng ưu thế ngọn, hom càng 
                                nhiều mầm thì hiện tượng đó càng rõ. Thường hom ba mầm là tốt nhất, hom một hoặc 
                                hai mầm ít bị ưu thế ngọn nhưng dễ bị thối và sâu bệnh nên ít dùng trong sản xuất. Kỹ 
                                thuật đặt hom cũng ảnh hưởng đến tỷ lệ nảy mầm, thường đặt hom bằng, mầm ở hai 
                                phía có tỷ lệ nảy mầm cao hơn đặt hom nghiêng, mắt mầm ở phía trên và dưới
                                Loại hom Tỷ lệ mọc (%)<br/>
                                Hom 1 mầm 72,2<br/>
                                Hom 2 mầm 66,6<br/>
                                Hom 3 mầm 57,7<br/>
                                Hom 4 mầm 52,7<br/>
<br/>
                  </div>
                  <li onClick={() => handleItemClick(2)}>2. Thời kỳ cây con: </li>
                  <div
                    id="content-2"
                    className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                                         Bắt đầu từ khi cây có lá thật thứ nhất cho tới khi phần lớn số cây trong ruộng có 
                                        5 lá thật. Rễ cây bắt đầu phát triển khi cây con có 2 lá thật. Như vậy ta thấy rằng ở thời 
                                        kỳ đầu mía sống dựa vào phần rễ hom, dần dần về sau khi rễ cây đã phát triển thì 
                                        nhiệm vụ cung cấp dinh dưỡng chủ yếu là do rễ cây đảm nhiệm. Bởi vậy ở thời kỳ đầu 
                                        cần chú ý đẩy mạnh sự sinh trưởng của lá thật để cây có thể quang hợp tích lũy chất 
                                        dinh dưỡng, đồng thời phải làm cho rễ hom phát triển tốt. <br/>
                                        Những nhân tố ảnh hưởng đến thời kỳ cây con: Thời kỳ cây con yêu cầu ôn độ 
                                        cao hơn thời kỳ nảy mầm, nói chung cần lớn hơn 15oC. Thời kỳ này cây sinh trưởng 
                                        chậm, phát tán ít bởi vậy cần ít nước, độ ẩm đất khoảng 60% là đủ. Ẩm độ quá cao đất 
                                        sẽ thiếu không khí làm cho ôn độ đất tăng chậm do đó rễ phát triển kém, hô hấp yếu 
                                        ảnh hưởng đến sinh trưởng thân lá. Nước ngập quá lâu cây con sẽ chết. Đất quá khô, 
                                        cây con thiếu nước, lâu ngày sẽ chết khô. Về mặt dinh dưỡng, lân có tác dụng rõ rệt với 
                                        bộ rễ. Cần chú ý phối hợp các khâu tưới nước, thoát nước, xới xáo, trừ cỏ để đẩy mạnh
                                        sinh trưởng của cây con. Thời kỳ này cây con cũng dễ bị sâu đục thân, bọ hung phá 
                                        hoại nên chú ý phòng trừ.<br/>
                    
                    </div>
                    <li onClick={() => handleItemClick(3)}>3. Thời kỳ đẻ nhánh:</li>
                    <div
                    id="content-3"
                    className={`content-item ${activeContent === 3 ? 'active' : ''}`}>
                        Khi cây mía có 6 -7 lá thật thì bắt đầu đẻ nhánh, khoảng 10 lá thật mía đẻ rộ, sau 
                        đó giảm dần. Nhánh do những mầm ở phần gốc của cây mía nằm ở dưới mặt đất nảy 
                        mầm thành. Từ thân mẹ đẻ ra nhánh cấp một (cũng có thể gọi cây mẹ là nhánh cấp 1 vì 
                        mía trồng bằng hom), nhánh cấp 1 đẻ ra nhánh cấp 2 vv.. và cứ tiếp tục như vậy thành 
                        một bụi mía. <br/>
                        Thông thường có thể chia ra các thời kỳ như sau: Bắt đầu đẻ có trên 10 % cây 
                        đẻ, đẻ rộ trên 30%, cuối kỳ trên 50%, kết thúc khi 100% cây mẹ có lóng. Trên cơ sở đẻ 
                        nhánh mà trong thực tế sản xuất người ta điều chỉnh số lượng giữa nhánh mẹ và nhánh 
                        con cho thích hợp để đảm bảo năng suất và hiệu quả kinh tế. Ở Việt Nam thường 
                        nhánh mẹ 40%, nhánh con 60%. Ở Đài Loan mía vụ Thu: Nhánh mẹ 15%, C1:50 -
                        60%, C2: 20 - 30%; mía vụ Xuân: nhánh mẹ 25 -30 %, C1: 60%, C2: 10%. Thời gian 
                        đẻ kéo dài 1- 4 tháng. Ở Việt Nam vụ Xuân đẻ từ tháng 4 - tháng 6, rộ trong tháng 5; 
                        vụ Thu đẻ 2 thời kỳ: tháng 10 -11 và từ tháng 3 - 4; vụ Đông đẻ tháng 3 - tháng 5 rộ 
                        tháng 4. <br/>
                        Các nhân tố ảnh hưởng:<br/>
                        Giống: Các giống khác nhau có khả năng đẻ nhánh khác nhau, thường mía dại lớn hơn 
                        mía trồng, mía Ấn Độ lớn hơn nhiệt đới, giống cây bé lớn hơn cây to. 
                        Phẩm chất hom: Cây mẹ to mập có khả năng đẻ nhánh sớm và tập trung, cây 
                        con khỏe hơn. <br/>
                        Nhiệt độ: Ảnh hưởng rất lớn, nếu thích hợp sau một tháng mía lại bắt đầu đẻ, đẻ 
                        gọn nhánh to. Nhiệt độ nhỏ hơn 20oC mía hầu như không đẻ, từ 26 - 30oC sự đẻ nhánh 
                        tăng theo tỷ lệ thuận. <br/>
                        Ánh sáng: Cả cường độ và thời gian chiếu sáng, đều ảnh hưởng. Cường độ chiếu 
                        sáng mạnh cây vươn cao chậm, cây đẻ nhiều, cây mập, ánh sáng yếu cây vóng đẻ ít. 
                        Thí nghiệm của Kamerlin trồng trong chậu khi che kín mía không đẻ, không che trung 
                        bình một cây mẹ đẻ 3 cây con. Thời gian chiếu sáng: Theo Lý Tùng (Đài Loan) mía có 
                        10 giờ chiếu sáng đẻ nhiều, 5 giờ chiếu sáng/ ngày mía không đẻ, 1 -2 giờ chiếu sáng 
                        mía chết.<br/>
                        Ẩm độ: Theo kết quả nghiên cứu của Đ.H.NN I-Hà Nội thời kỳ mía đẻ, ẩm độ 
                        đất khoảng 75 - 85 % thì mía đẻ khỏe, sớm, gọn ; ẩm độ 100% hoặc 55 -60 % mía đẻ 
                        kém và kéo dài, tỷ lệ hữu hiệu thấp. <br/>
                        Đất và dinh dưỡng: Đất tốt phân bón đầy đủ cân đối nhất là lân và đạm mía đẻ nhiều và 
                        khỏe, tỷ lệ thành công cao. <br/>
                        Mật độ: Mật độ cây mẹ lúc kết thúc nảy mầm có ảnh hưởng khá rõ đến khả năng 
                        đẻ nhánh, cây mẹ thấp mía đẻ nhiều, cây mẹ lớn hơn 10 cây/m2
                        mía hầu như không đẻ. Vì thế 
                        khi trồng chỉ cần chọn hom tốt, phân bố đều, không nên trồng quá dày, gây lảng phí
                        hom và ức chế mía đẻ nhánh.<br/>
                        Kỹ thuật trồng và chăm sóc: Khoảng cách trồng thưa mía đẻ nhiều hơn trồng 
                        dày. Trồng cạn đẻ khỏe hơn trồng sâu.Vun cao sớm hạn chế đẻ nhánh. <br/>
                    </div>
                    
                    <li onClick={() => handleItemClick(4)}>4.Thời kỳ vươn cao ( vươn lóng)</li>
                    <div
                    id="content-4"
                    className={`content-item ${activeContent === 4 ? 'active' : ''}`}>
                         Trong điều kiện bình thường, 4 tháng sau khi trồng thời kỳ đẻ nhánh hoàn thành. 
                        Rễ phát triển, mầm vươn cao. Phiến lá, bẹ lá dài ra theo sau là lóng mía cũng dài ra. 
                        Thời kỳ vươn cao bắt đầu từ khi mía có lóng tới khi ngừng sinh trưởng. Thời kỳ mía 
                        vươn cao biểu hiện 2 mặt: <br/>
                        + Biểu hiện bên ngoài: Ngọn phát triển nhanh, số lá tăng thêm và không ngừng 
                        đổi mới. Rễ phát triển mạnh và không ngừng đổi mới. Tốc độ chiều cao tăng nhanh 
                        đồng thời cũng không ngừng tăng thêm bề ngang. Tốc độ ra lá nhanh, một tháng có thể 
                        ra 4 lá. Thời kỳ giữa 2 lá trước và sau xòe ra gọi là thời gian hình thành lá, thời gian 
                        này ngắn thì lá ra nhanh. Tuổi thọ của lá, diện tích lá có quan hệ trực tiếp đến tích lũy 
                        chất khô. Trong điều kiện Việt Nam thường mía vươn cao vào các tháng 7 -8 -9. Sự 
                        vươn cao của thân là do số đốt và lóng tăng thêm, hoạt động của đai sinh trưởng làm 
                        cho lóng dài ra và to về đường kính.<br/>
                        Vươn cao của thân được chia ra 4 giai đoạn:<br/>
                        Làm lóng: Khi có 50% cây có lóng dài 3 -4cm; vươn cao đầu: Tốc độ sinh 
                        trưởng là 3cm/tuần; vươn cao giữa: Tốc độ sinh trưởng lớn hơn 10cm/tuần; cuối vươn cao: 
                        Tốc độ sinh trưởng nhỏ hơn 10cm/tuần.<br/>
                        Quan hệ giữa thân và lá: Ở cây mía thường giửa thân và lá có quan hệ mật thiết 
                        với nhau. Mỗi lá thường gắn liền với một lóng. Tuổi thọ lá dài hay ngắn, diện tích lá 
                        lớn hay bé có quan hệ trực tiếp đến sự tích lũy chất khô. Đốt, lóng và lá liên hệ chặt 
                        chẻ với nhau: thường phiến lá sinh trưởng trước, sau đó đến bẹ lá, đốt và lóng sinh 
                        trưởng sau cùng. Khi lá đã xòe ra thì bẹ lá mới bắt đầu sinh trưởng. Khi ngọn lá bắt 
                        đầu xuất hiện thì diện tích của phiến lá đạt 80% của diện tích lá đã hoàn thành về mặt 
                        sinh trưởng. Trong khi đó chiều dài của bẹ lá chỉ mới đạt 10% chiều dài của bẹ lá đã 
                        hoàn chỉnh sinh trưởng. Trong thời gian phiến lá sinh trưởng mạnh lóng tương ứng 
                        vươn dài rất chậm. Sau khi phiến lá ló ngọn khoảng 2 - 3 tuần lóng mới vươn dài 
                        nhanh và 5 - 7 tuần sau mới đạt tốc độ cao nhất. Lóng mía sinh trưởng chủ yếu khi còn 
                        ở trong bẹ lá. Lúc lóng đã lộ ra ngoài bẹ thì nó sinh trưởng chậm dần. Lóng phát triển 
                        về chiều dài và đường kính hầu như cùng một lúc. Lóng tương ứng với lá +5 thì ngừng 
                        sinh trưởng. <br/>
                        Mỗi lá đảm nhận chức năng nuôi một lóng. Sinh trưởng của lá có quan hệ 
                        chặt chẻ với lóng tương ứng. Kết quả thí nghiệm cắt lá ở Đài Loan thấy rằng nếu cắt 
                        những lá mới xòe ra thì lóng tương ứng ngắn và bé hơn những lóng bên cạnh không cắt 
                        lá. Những thí nghiệm dùng 14C đánh dấu ở Ha oai chứng minh rằng những chất đồng 
                        hóa do lá tạo nên phần lớn đều cung cấp cho lóng tương ứng, như vậy sự sinh trưởng 
                        của lóng chủ yếu là dựa vào tác dụng đồng hóa của lá tương ứng. Khi gặp hoàn cảnh 
                        xấu (như hạn, rét, thiếu phân) sinh trưởng của lá bị trở ngại sẽ ảnh hưởng nghiêm trọng 
                        tới lóng tương ứng, nhưng vì lóng chỉ sinh trưởng trong một thời gian có hạn (cây1 lá 
                        mầm không có tổ chức phân sinh thứ cấp), cho nên sau này dù lá có trở lại sinh trưởng 
                        bình thường thì lóng cũng đã bị ảnh hưởng xấu. Điều đó nói lên rằng, về mặt kỹ thuật 
                        trồng trọt phải thường xuyên bảo đảm cho cây một điều kiện sinh trưởng tốt, tức là 
                        trong thời kỳ vươn cao chú ý bón phân, tưới nước đầy đủ.<br/>
                        + Biểu hiện bên trong: Về mặt sinh lý quá trình phát triển của lóng là quá trình 
                        hút nhiều nước và chất dinh dưỡng để hình thành chất khô, trong đó chủ yếu là xenlulô 
                        và đường. Trong một ngày, 1cm2
                        lá có thể tạo ra được 0,5 - 1,5mg chất khô. Sự tích lũy 
                        chất khô trong một ngày nhiều nhất vào buổi sáng, ít nhất vào buổi trưa, đến buổi chiều 
                        lại tăng lên nhưng ở mức thấp hơn buổi sáng. Cường độ tích lũy chất khô trong thời kỳ 
                        vươn cao có ảnh hưởng đến tốc độ sinh trưởng, tức là những tháng mía tích lũy chất 
                        khô cao nhất cũng là thời kỳ vươn cao mạnh nhất. Sau đây là số liệu tích lũy chất khô 
                        qua các tháng của mía trồng ở Đài Loan:<br/>
                        Mặt khác khi cây mía càng lớn thì lượng vật chất khô càng tăng lên, tỷ lệ đường 
                        trong vật chất khô cũng được tăng lên nhanh chóng<br/>
                        Sự tích lũy chất khô còn phụ thuộc vào các biện pháp kỹ thuật. Theo kết quả 
                        nghiên cứu của Trường Đại học Nông nghiệp I cho thấy: Trong điều kiện có bón phân 
                        sự tích lũy chất khô ở cây mía đã tăng lên rõ rệt.<br/>
                        + Nhân tố ảnh hưởng<br/>
                        * Giống: Nói chung các giống khác nhau thì khả năng vươn cao cũng khác nhau. 
                        Với giống POJ 3016 thời kỳ đầu sinh trưởng chậm, thời kỳ sau sinh trưởng nhanh. 
                        Giống F134 thì ngược lại.<br/>
                        * Nhiệt độ: Thời kỳ vươn lóng mía đòi hỏi nhiệt độ cao nhất, cũng là thời kỳ 
                        quan trọng nhất. Nhiệt độ thấp nhất cho mía phát triển lóng là 13oC -15oC. Nhiệt độ 
                        20oC mía vươn cao bình thường, nhiệt độ càng tăng sự phát triển lóng càng thuận lợi, 
                        từ 21-25oC khi tăng nhiệt độ mía sẽ tăng trưởng gấp 4 lần ở 20oC. Giới hạn thích hợp là 
                        25 - 34 oC. Nhiệt độ trên 38oC hoặc dưới 100C mía ngừng vươn cao, ở 0oC mía sẽ bị 
                        chết. <br/>
                        * Ánh sáng: Mía là cây ưa nhiều ánh sáng. Ánh sáng ảnh hưởng rõ rệt đến 
                        chiều dài, đường kính lóng, đến năng suất và phẩm chất. ở điều kiện đầy đủ ánh sáng 
                        lóng mía không dài nhưng to, lá rộng màu xanh đẹp. Sự sinh trưởng ở nơi đủ ánh sáng 
                        gấp 3 - 4 lần so với nơi thiếu ánh sáng. <br/>
                        * Nước và ẩm độ: Thời kỳ vươn lóng là thời kỳ mía đòi hỏi nước cao nhất và 
                        tiêu hao nước lớn nhất. Lượng nước thoát hơi qua lá xấp xỉ bằng lượng nước bốc hơi 
                        tiêu chuẩn. Thiếu nước lúc này sẽ ảnh hưởng rõ rệt đến tốc độ vươn cao, đường kính 
                        thân và năng suất cuối cùng. Thời kỳ này mía cần khoảng 50 % tổng lượng nước mà 
                        cây mía cần trong quá trình sinh trưởng (xem bảng 11). Độ ẩm tối thích là 60 - 80% độ 
                        ẩm tối đa trong đất, dưới 50 % sinh trưởng bị hạn chế, lá khô héo, lóng ngắn và bé. 
                        Cung cấp đầy đủ nước hoặc sắp xếp thời vụ sao cho thời kỳ vươn lóng trùng hợp với 
                        các tháng mưa trong năm là biện pháp cực kỳ quan trọng để tăng năng suất.<br/>
                        * Phân bón: Ôn độ cao, ẩm độ đầy đủ, ánh sáng thích hợp chỉ mới là những 
                        điều kiện tiền đề của thời kỳ sinh trưởng vươn cao của mía, muốn phát huy được 
                        những thuận lợi của điều kiện ngoại cảnh cần thiết phải cung cấp đầy đủ phân bón cho 
                        mía nhất là đạm. Nhu cầu về phân bón trong thời kỳ này cao nhất, nếu thiếu phân năng 
                        suất giảm rõ rệt (sẽ bàn kỹ hơn trong phần phân bón).<br/>
                        * Thời vụ trồng: Ở các thời vụ trồng khác nhau có điều kiện ngoại cảnh tác 
                        động khác nhau nên khả năng vươn cao cũng có sự khác nhau rõ rệt. Mía vụ xuân trồng 
                        vào tháng 2, tháng 3 thời gian vươn cao mạnh là 6 tháng. Lượng sinh trưởng hàng 
                        tháng đạt trên 40 cm (tháng 7,8,9,10). Mía trồng vụ xuân muộn thời gian vươn cao 
                        mạnh chỉ có 2 đến 3 tháng (tháng 9, 10). Mía trồng vụ thu có thời gian vươn cao kéo 
                        dài 7 tháng và vươn cao mạnh khoảng 4 đến 5 tháng (tháng 2-4 và tháng 8-11). Khí 
                        hậu miền Trung, thời gian từ tháng 4 -7 thường bị hạn, thiếu nước nghiêm trọng nên 
                        muốn mía vươn lóng thuận lợi phải có tưới; hoặc nên tăng diện ích trồng vụ thu và vụ 
                        xuân phải trồng sớm. <br/>


                    </div>
                    <li onClick={() => handleItemClick(5)}>5. Thời kỳ chín:</li>
                    <div
                    id="content-4"
                    className={`content-item ${activeContent === 5 ? 'active' : ''}`}>
                        Từ tháng 11 trở đi, khi nhiệt độ và ẩm độ giảm dần thì mía sinh trưởng chậm lại 
                        và bước vào tích lũy đường. Khái niệm chín là lúc mía có tỷ lệ đường sacarô cao nhất. 
                        Đó là chín công nghiệp và nó cũng có thể trùng với chín sinh vật học (sự ra hoa) đối 
                        với mía trồng ở vùng có vỉ độ cao.<br/>
                        + Chín công nghiệp: Cây mía khi bước vào thời kỳ làm lóng là đã bắt đầu tích 
                        lũy đường nhưng với hàm lượng không đáng kể và chủ yếu là đường không kết tinh 
                        (đường khử). Lượng đường sacaro tích lũy trong thân tăng dần theo tuổi cây. Khi mía 
                        có nhiều tháng và thời tiết thích hợp cho sự tích lũy đường thì hàm lượng đường trong 
                        thân đạt tới mức tối đa và chủ yếu là đường kết tinh (C12 H22 O11) lúc này gọi là thời kỳ 
                        chín công nghiệp. Khi đạt mức tối đa, tùy giống và điều kiện thời tiết, lượng đường này 
                        có thể giử lại khoảng 15 ngày - 2 tháng. Sau đó bắt đầu giảm dần do bị hô hấp hoặc tái 
                        sinh trở lại, thường gọi là mía quá lứa hoặc quá chín. <br/>
                        * Đặc điểm của quá trình chín <br/>
                        Về hình thái: Lá mía ngã vàng, lá ở ngọn ngắn và bé, chỉ còn lại 6 đến 8 lá 
                        mọc sít nhau giống như hình dải quạt. Thân mía ngừng hay phát triển chậm về đường 
                        kính thân và chiều cao. Vỏ mía nhẵn có thể biến màu tùy theo giống. Nếu ta cắt ngang 
                        cây thì thấy mặt cắt có nhiều ánh bạc vì tế bào nhu mô chứa nhiều đường. <br/>
                        Biểu hiện bên trong: Lúc mía còn non hàm lượng đường sacarô trong cây ít, 
                        ở thời kỳ sinh trưởng mạnh sự tích lũy rất hạn chế vì chủ yếu là đường gluco, khi mía 
                        chín thì hàm lượng glucô giảm, lúc sinh trưởng bắt đầu chậm dần thì phần lớn chất 
                        đồng hóa do lá mía tạo thành mới chuyển sang dạng đường sacarô để tích lũy trong 
                        thân và tăng lên nhanh chóng. Lúc mía chín hàm lượng đường sacarô ở mức cao nhất 
                        làm cho phẩm chất nước mía tăng lên tuy nhiên nếu quá chín thì sacarô lại giảm vì 
                        chuyển hoá thành glucô hoặc mất đi do hô hấp. <br/>
                        Do tỷ lệ sacarô trong tổng số chất hòa tan tăng lên, nâng cao độ tinh khiết của 
                        nước mía. Hàm lượng các chất hòa tan trong nước mía gọi là độ brix, nó có liên quan 
                        đến đường sacarô. Khi mía chín hàm lượng nước trong cây vào khoảng 70 %, tỷ lệ 
                        xenlulô thường ổn định.  <br/>
                        Sau đây là một số chỉ số thường dùng để xác định các chất bên trong khi mía 
                        chín:  <br/>
                        Độ brix: Thông thường để đánh giá độ chín của mía người ta xác định độ brix ở 
                        lóng gốc và ở lóng ngọn (lóng +7). Khi độ brix ở lóng gốc và ở lóng ngọn bằng nhau là 
                        lúc mía chín hoàn toàn, nếu độ brix ở ngọn nhỏ hơn ở gốc thì mía chưa chín, ngược lại 
                        nếu độ brix ở gốc nhỏ hơn ở ngọn là mía quá chín. Độ brix được xác định như sau: 
                        Độ brix = Tổng số khối lượng chất khô hòa tan x 100  <br/>
                        Khối lượng dung dịch  <br/>
                        Độ pol: Là số trị quay cực trực tiếp thu được của một dung dịch đường quan sát 
                        bằng máy Polarimet (sacarimet). Độ pol phản ánh số trị gần đúng hàm lượng đường 
                        sacaro chứa trong dung dịch (dung dịch đường hoặc dung dịch nước mía). Do vậy 
                        trong thực tế người ta dùng độ pol để đánh giá chất lượng một sản phẩm đường hoặc 
                        chất lượng một giống mía. Độ pol cao thì đường sacaro nhiều và ngược lại.
                        Độ tinh khiết AP: Là tỷ số % giữa độ pol và độ brix, tức là  <br/>
                        AP = 
                        Sacaro (Pol)
                        brix x 100  <br/>
                        Chất lượng của một dung dịch đường hay dung dịch nước mía thể hiện ở độ AP. 
                        Độ AP càng cao chất lượng càng tốt vì trong dung dịch chứa nhiều đường kết tinh còn 
                        đường không kết tinh và chất không đường (kể cả tạp chất) ít.  <br/>
                        Rs: Là một tập hợp các loại đường khử, không kết tinh trong điều kiện chế biến 
                        thông thường như đường gluco, fructo và một số đường khác. Trong cây mía khi còn 
                        non tỷ lệ Rs cao và mía càng già thì tỷ lệ Rs càng giảm. Thường lúc mía đạt độ chín, tỷ 
                        lệ Rs chỉ còn trên dưới 1% (tùy thuộc bản chất của giống mía). Đối với công nghệ chế 
                        biến, tỷ lệ Rs có vai trò rất quan trọng vì nó ảnh hưởng trực tiếp đến quá trình kết tinh 
                        của đường sacaro. <br/>
                        Chất xơ: Là thành phần chất khô không hòa tan trong nước đó là chất xenlulo. 
                        Đối với một giống mía mới, chỉ tiêu này cần được xác định vì nó giúp cho một số tính 
                        toán khác có liên quan. Trong chế biến, tỷ lệ xơ của mía có quan hệ đến độ dai của bả, 
                        đến lượng bả dùng cho đốt lò. Cùng một giống mía khi thu hoạch vào các thời điểm 
                        khác nhau tỷ lệ xơ cũng khác nhau. <br/>
                        + Quá trình hình thành, vận chuyển và tích lủy đường: Hydrat cacbon ở 
                        trong mía gồm có 3 loại, đường đơn, đường kép, đường đa. Đường đơn có gluco, 
                        fructo; đường kép là sacaro; đường đa có tinh bột và xenlulo. Quá trình hình thành 
                        đường mía là một quá trình phản ứng hóa học phức tạp gồm hai giai đoạn. <br/>
                        * Giai đoạn 1: Là giai đoạn quang hợp có sự kết hợp giữa CO2
                        và H2O tạo thành đường đơn (C6H12O6
                        ) có sự tham gia của ánh sáng và diệp lục. <br/>
                        * Giai đoạn 2: Là giai đoạn chuyển hóa đường đơn thành đường sacaro (C12
                        H22 O11).Về mặt sinh hóa mía chín là quá trình tích lũy sản phẩm quang hợp, sacarô ở 
                        các mô dự trử trong thân cây mía qua một loạt phản ứng xúc tác của một số enzim đặc 
                        thù. Về phương diện phát triển thành thục là quá trình tạo thành các khúc (khúc = 1 
                        lóng +1đốt) nối tiếp của thân cây mía và tích lũy đường trên các khúc ở mức tối đa.
                        Cơ chế tích lũy đường:  <br/>
                        Đường mía tổng hợp trên lá được vận chuyển về thân cây, một phần dùng cho 
                        hô hấp và cấu tạo nên thân, lá, rễ, phần còn lại tích lũy ở trong thân dưới dạng sacarô. 
                        Đường sacarô chất quang hợp mới được tạo thành chuyển qua mạch libe (floem) đến tế 
                        bào nhu mô tích lũy. Ở vùng đồng hóa, sacarô được thủy phân thành fructô và glucô 
                        qua tác dụng của enzim invecta axit (pH = 5-5,5). Sản phẩm glucô và fructô khuếch tán 
                        trong tế bào đồng hóa và cũng có thể khuếch tán ra ngoài vùng đồng hóa một cách dễ 
                        dàng. Sản phẩm đã ở mô tích lũy nhưng đây chỉ là bước tích lũy thụ động và không có 
                        gì cản trở chúng khuếch tán ra ngoài. Ở vùng đồng hóa dưới tác dụng của một nhóm <br/>
                        Bảng 2.6. Sơ đồ vận chuyển và tích lũy đường sacaro
                        enzim fốtfat, fructô và glucô được trùng hợp lại thành sacarô fốtfat. Sacarô fốtfat 
                        chuyển từ vùng đồng hóa đến không bào rồi tích lũy tại đó. Đây là bước tích lũy hoạt 
                        động (xem sơ đồ ở trên) <br/>
                        Cơ chế tích lũy ở mô dự trử thành thục và mô dự trử non đều như nhau. Nhưng 
                        quá trình tiến triển sau này của sản phẩm tích lũy không giống nhau. Ở mô non, do yêu 
                        cầu phát triển của tế bào, sacarô dưới tác dụng của enzim invecta axit của không bào 
                        nhanh chóng trở thành hexô. Ở mô trưởng thành sinh trưởng đã hoàn thành, enzim 
                        invecta axit giảm đi rất nhiều nên tỷ lệ sacarô đạt tới 15 -20%. Enzim invecta trung tính 
                        tiếp hợp với enzim invecta axit điều khiển sự tích lũy tích cực sacarô ở không bào. 
                        Thành thục là một quá trình dài, những lóng già chín trước và tiếp tục tích lũy đường, 
                        trong khi những lóng non đang chín. Bóc lá già ở khúc thành thục không có nghĩa là 
                        khúc đó không tiếp tục nhận đường thêm để tích lũy. Lóng mía dài hết cở, đã rụng lá 
                        vẫn tiếp tục chín (tích lủy đường sacaro). <br/>
                        Quá trình vận chuyển: Sản phẩm quang hợp cuối cùng của lá là đường sacarô 
                        được vận chuyển từ lá xuống bẹ, từ bẹ chuyển đến thân, rồi từ thân chuyển xuống gốc
                        Một phần nhỏ chuyển lên ngọn và chuyển qua gốc sang mầm con. Trong ngày, đường 
                        cấu tạo đều đặn được chuyển đi ngay, chỉ tạm thời tích lũy ở bẹ lá rồi đi qua đốt vào 
                        thân. Đường của lá nào chuyển xuống sẹo lá của lá ấy để đi xuống thân. Trong quá 
                        trình vận chuyển 2 yếu tố được nghiên cứu là tốc độ và khối lượng. Người ta đã dùng 
                        14 CO2
                        để theo dỏi vận chuyển, thấy rằng sau 20 phút xử lý, đường chứa 14CO2
                        được 
                        phát hiện dưới điểm xử lý 55cm. Như vậy tốc độ vận chuyển ban đầu là 2,5cm/phút. <br/>
                        Tuổi lá có ảnh hưởng đến sự vận chuyển, lá già (lá +12) có tốc độ vận chuyển chậm 
                        hơn lá non (lá +5 đến lá +8). Nguyên nhân là đường ở lá non chuyển xuống làm cho 
                        luồng vận chuyển đường của lá già qua bẹ xuống thân chậm và yếu, cũng có thể do lá 
                        già ở vị trí thấp hơn nên không nhận đủ ánh sáng để quang hợp hoặc bị bệnh. Khi dòng 
                        đường đi xuống chưa đến gốc thì có một phần nhỏ đi ngược dòng lên phía trên vào các 
                        mô dự trử non và mô phân sinh. Ở cây mía đang sinh trưởng mạnh, lượng đường 
                        chuyển lên ngọn nhiều hơn ở cây mía thành thục. Nhiều tác giả cho thấy thời gian vận 
                        chuyển từ lá đến rễ khoảng 90 phút tùy theo độ cao của cây. Tốc độ vận chuyển xuống 
                        thường đạt 84cm/giờ và vận chuyển lên trung bình 37cm/giờ. Trong một giờ ít nhất có 
                        10,7mg đường chuyển từ lá xuống tới lóng. Điều đáng chú ý là sự vận chuyển giữa các 
                        cây trong một bụi tương đối nhanh 4,5-5giờ sau khi xử lý cây mẹ 14C xuất hiện ở tất cả 
                        các cây con.<br/>
                        + Nhân tố ảnh hưởng <br/>
                        * Giống: Các giống khác nhau có thời gian chín khác nhau. Vì vậy người ta 
                        phân ra thành nhóm chín sớm, chín trung bình và chín muộn.
                        Ví dụ: NCO-310, các giống thuộc nhóm Việt đường đều chín sớm, POJ-3016, 
                        POJ-2878, CO-290 thuộc nhóm chín trung bình và F.134, F.156 chín muộn. Mặt khác 
                        cùng một giống nhưng trồng ở các vụ khác nhau thì có thời gian chín khác nhau. Nhìn 
                        chung mía vụ thu chín sớm hơn mía vụ đông xuân và mía gốc chín sớm hơn mía tơ 
                        khoảng 1 tháng.<br/>
                        * Đất đai và dinh dưỡng: Mía trồng ở chân đất cao thường chín sớm hơn ở đất 
                        thấp vì nó liên quan đến độ ẩm. Mía ở đất cát chín sớm hơn mía ở đất tốt nhiều mùn. 
                        Trong trường hợp bón đạm nhiều, nhất là bón muộn làm cho mía chín muộn. Bón P 
                        nhiều làm cho mía chín sớm. Thiếu K sự vận chuyển đường từ lá xuống mô tích lủy bị <br/>
                        Bảng 2.7. Ảnh hưởng của thời kỳ bón N đến hàm lượng đường thu hồi,
                        (đơn vị tính:C.C.S). Theo Borden
                        giảm sút. Thiếu K nặng hoạt động hô hấp của lá tăng cường, quang hợp yếu, sự chuyển 
                        các dạng đường trung gian thành sacarô bị giảm sút.<br/>
                        * Khí hậu: <br/>
                        Nhiệt độ ở thời kỳ chín (tích lũy đường) thường thấp thì thuận lợi. Giới hạn 
                        thích hợp là 14 -25 oC. Yếu tố chi phối lớn nhất trong thời kỳ này là biên độ giữa ngày 
                        và đêm, thứ đến là điều kiện khô hanh. Tục ngữ có câu: " Gió heo may đường bay lên 
                        ngọn" nói lên điều kiện ngoại cảnh ảnh hưởng đến thời kỳ mía chín. Nói chung ôn độ 
                        và ẩm độ thấp hạn chế sự sinh trưởng, xúc tiến quá trình tích lũy đường làm cho mía 
                        nhanh chóng bước vào thời kỳ chín. Ánh sáng đầy đủ có lợi cho thời kỳ chín của mía. 
                        Điều kiện khí hậu ảnh hưởng đến thời kỳ chín có thể tóm tắt như sau:<br/>
                        Khí hậu khô ráo và lạnh, phẩm chất nước mía tốt.<br/>
                        Khí hậu ẩm ướt nhưng lạnh, nước mía vẫn tốt.<br/>
                        Khí hậu khô ráo nhưng ấm áp, nước mía còn tốt.<br/>
                        Khí hậu ẩm và nóng, làm cho phẩm chất nước mía kém.<br/>
                        - Sự phát dục của cây mía<br/>
                        Mía trồng để phục vụ cho công nghiệp chế biến đường. Vì vậy không ai muốn 
                        mía ra hoa. Người ta đã tìm nhiều biện pháp để thúc đẩy sinh trưởng và hạn chế ra hoa. 
                        Nhưng vẫn không tránh khỏi hiện tượng ra hoa của mía. Tuy vậy vấn đề ra hoa lại cần 
                        thiết đối với công tác lai tạo giống, nhằm tạo ra các giống tốt. <br/>
                        + Các bước phát triển của hoa mía: Hoa mía phát triển qua 4 bước: Hình <br/>
                        thành mầm hoa; hình thành tổ chức hoa; hoa thành thục; hoa trổ (trổ cờ). Sự hình thành 
                        mầm hoa, chủ yếu chịu ảnh hưởng của chu kỳ ánh sáng, là bước quan trọng nhất. Các 
                        bước khác chịu ảnh hưởng của yếu tố môi trường như nhiệt độ, dinh dưỡng, nước, độ 
                        thuần thục của cây mía. <br/>
                        Nếu không gặp điều kiện thuận lợi hoa mía có thể bị ức chế trong các bước hình 
                        thành tổ chức và thành thục (hoa ít nhị, nhị không có khả năng sinh sản) hoặc trổ cờ 
                        sớm hay muộn. Vì vậy ở một vùng và một chu kỳ ánh sáng nhất định (so với xích đạo) 
                        nhiều giống mía có thể hình thành mầm hoa trong một thời gian ngắn nhưng có thể trổ 
                        hoa rải rác trong một thời gian khá dài.<br/>
                        + Điều kiện mía ra hoa<br/>
                        * Độ dài ngày: Vùng gần xích đạo suốt năm ngày dài xấp xỉ 12 giờ, mía ra hoa 
                        quanh năm, càng xa xích đạo thời vụ ra hoa càng khác nhau rõ rệt vì thời gian chiếu 
                        sáng thay đổi. Nếu đêm bị ánh sáng tác động thì mía không ra hoa. Mía rất mẫn cảm 
                        với thời gian tối ban đêm. Vì vậy mía phản ứng như một cây "ngày ngắn ". Xử lý từ 
                        ngày 5 tháng 1 đến ngày 2 tháng 4 với giống CO.312 và NC.310 thấy: Nếu đêm dài 11 
                        giờ thì mía không ra hoa; nếu đêm dài 11 giờ 35 phút mía ra hoa rộ; nếu đêm dài 13 
                        giờ 30 phút mía ra hoa muộn.<br/>
                        Clêmênt và Awada kết luận: Đêm dài 11 giờ 32 phút thuận lợi nhất cho mía ra 
                        hoa. Nếu đêm ngắn đi 32 phút thì hoa không trổ được và đêm dài 12 giờ hoa khó trổ. 
                        Vùng xích đạo từ 21 tháng 4 đến 21 tháng 12 đêm dài 11 giờ 52 phút không hoàn toàn 
                        thích hợp cho mía trổ, hoa ra rải rác suốt năm. Chỉ ở những địa bàn mà đêm dài xấp xỉ 
                        11 giờ 30 phút mía mới trổ hoa rộ. Ở vĩ tuyến 10 độ bắc từ ngày 22 tháng 7 đêm dài 11 
                        giờ 30 phút và đến ngày 9 tháng 9 đêm dài 12 giờ, thời gian thích hợp cho mía trổ hoa 
                        là 49 ngày. ở vỉ tuyến 30 độ bắc từ 4 tháng 9 đến 28 tháng 9 đêm dài 11 giờ 30 phút 
                        mía chỉ có 24 ngày để trổ bông. Mía trổ bông rộ trong khoảng vĩ tuyến 10 -20 độ bắc, 
                        khó trổ bông ở vĩ tuyến 30 độ bắc và không trổ bông ở vĩ tuyến 35 độ bắc. Ở vĩ tuyến 
                        thấp, mầm hoa hình thành sớm, vĩ tuyến càng cao mầm hoa xuất hiện càng muộn. Ở 
                        khu vực Sài Gòn mầm hoa xuất hiện sớm hơn Quảng Ngãi 17 ngày và sớm hơn 
                        Wantan 35 ngày. Ở vĩ tuyến thấp, quá trình phát triển hoa cần một thời gian ngắn hơn.<br/>
                        Bảng 2.8. Thời điểm hình thành mầm hoa ở Việt Nam, Ha Oai, Đài Loan
                        ( Theo Juang )<br/>
                        * Nhiệt độ: Nhiệt độ là một trong những yếu tố ảnh hưởng đến quá trình ra hoa. 
                        Nhiệt độ ban ngày thấp nhất không xuống dưới 15 oC, cao nhất không quá 30 oC mía 
                        trổ hoa mạnh. Nhiệt độ thấp dưới 10 oC sự phát dục của hoa gặp trở ngại. Nhiệt độ thấp 
                        ban đêm là yếu tố hạn chế ra hoa. Nhiệt độ thấp kéo dài quá 10 ngày thì ngừ ng hoàn 
                        toàn sự hình thành mầm hoa. Nhiệt độ cao nhất, nhiệt độ thấp nhất và biên độ là 3 yếu 
                        tố ảnh hưởng đến ra hoa.<br/>
                        * Sự thành thục sinh lý và tuổi cây: Cây mía cần phải trải qua giai đoạn non 
                        đến giai đoạn thành thục mới có thể phân hóa mầm hoa. Nếu chưa đến giai đoạn thành 
                        thục mặc dù có chu kỳ ngày dài và đêm thuận lợi, mía cũng không trổ hoa. Tùy theo 
                        giống mà nó có thể trổ hoa sớm hoặc muộn. Nói chung các giống trong loài S. 
                        spontaneun thành thục sớm và ra hoa sớm hơn loài S. robustum. Các giống trong loài 
                        S.officinarum ra hoa muộn hơn S.robustum. Có giống ra hoa rộ, có giống ra hoa rải rác.<br/>
                        + Sự ra hoa và chất lượng đường:<br/>
                        Ở vùng nhiệt đới mía thường ra hoa về mùa rét, chín công nghiệp và chín sinh 
                        vật học trùng nhau. Nhưng ở vùng ôn đới nói chung mùa đông mía không ra hoa mà 
                        hàm lượng đường cao. Như vậy chín công nghiệp và chín sinh lý không trùng nhau. 
                        Người ta cho rằng ra hoa thì tỷ lệ đường giảm. Tuy vậy điều đó còn tùy thuộc vào 
                        giống và điều kiện ngoại cảnh. Thường những giống chín sớm thì ra hoa sớm, nếu ra 
                        hoa vào lúc nhiệt độ thấp thì tỷ lệ đường đạt mức cao nhất. Giống chín muộn ra hoa 
                        muộn, thường ra hoa vào lúc nhiệt độ cao thì tỷ lệ đường giảm.<br/>
                        Ở nước ta từ Quảng Ngãi trở ra, các giống mía có ra hoa bắt đầu trổ vào cuối 
                        tháng 12 và nở rộ vào tháng1. Vùng Quảng Nam, Đà Nẵng, Quảng Ngãi mía ra hoa 
                        vào lúc mưa nhiều, mùa mưa chưa chấm dứt còn 2-3 tháng mới đến vụ thu hoạch, mía 
                        ra hoa vào lúc cây tiếp tục sinh trưởng, làm lóng do vậy sẽ ảnh hưởng lớn đến năng 
                        suất và chất lượng. Ở vùng này nên chọn giống ít ra hoa, trồng vụ thu hoặc hãm mía ra 
                        hoa là hết sức quan trọng. Ở Bắc bộ thời vụ mía ra hoa đúng vào vụ thu hoạch, thời tiết 
                        lạnh và khô mía đã kết thúc chu kỳ sinh trưởng, mía ra hoa lúc này không ức chế sinh 
                        trưởng và hàm lượng sacarô vẫn tiếp tục tăng trong một thời gian. Ở địa bàn này mía 
                        trổ hoa không phải là một trở ngại lớn, không thu hoạch kéo dài đến cuối tháng 3.<br/>
                        + Biện pháp hạn chế ra hoa:<br/>
                        Hiện nay có nhiều biện pháp có hiệu lực hạn chế mía ra hoa. Những biện pháp 
                        ức chế sự phát triển bình thường, cần được xử lý đúng thời điểm mới có tác dụng.<br/>
                        * Rút nước gây hạn: Mía thiếu nước vào thời kỳ cảm ứng mầm hoa thì không 
                        hình thành mầm hoa được. ở Puectô Ricô có 78 giống được xử lý rút nước gây hạn mía 
                        đều không ra hoa. ở Mêhicô rút nước tưới từ 20 tháng 8 đến 20 tháng 9 là biện pháp có 
                        hiệu lực ngăn không cho mía ra hoa. Với giống NCO-310 và CO-421 trồng ở Los 
                        Mochis (Mêhicô) tưới nước theo chu kỳ 14 ngày một lần mía ra hoa gấp bội với tưới 
                        25 ngày một lần. Tuy vậy cần nắm chắc tập tính ra hoa của từng giống để xác định thời 
                        vụ xử lý thích hợp đồng thời cần có kế hoạch tưới trở lại kịp thời để đảm bảo sinh 
                        trưởng, không gây giảm năng suất.<br/>
                        * Bón phân đạm (N): Nói chung bón N nhiều có thể ức chế ra hoa do tác dụng 
                        kích thích sinh trưởng của đạm. Nhưng nếu kéo dài thời gian cho cây hút N, phẩm chất 
                        sẽ kém. Bón tăng N kết hợp gây hạn trước và trong thời kỳ cảm ứng ra hoa và sau đó 
                        tưới trở lại để mía tiếp tục sinh trưởng có thể hãm mía ra hoa mà không ảnh hưởng đến 
                        sản lượng.<br/>
                        * Cắt lá ngọn: Lá đã mở nhưng còn dựng đứng, phiến chưa xòe ngang, là bộ 
                        phận cảm ứng với chu kỳ ánh sáng kích thích hình thành mầm hoa. La +1,+2 mẫn cảm 
                        nhất. Nếu cắt lá ngọn trong thời kỳ cảm ứng, mía không ra hoa.<br/>
                        * Dùng hóa chất: Ở Ấn Độ phun Pentaclorophenol vào giống CO1171, 
                        CO1345 có hiệu lực. ở Ha Oai hóa chất này cũng có hiệu lực ức chế ra hoa, tăng phẩm 
                        chất. ở Úc, phun Maleic Hydrarit kết hợp với GA (a xit Giberelic) ức chế ra hoa 100 %
                        nhưng phun riêng lẽ thì không hóa chất nào có hiệu lực. Diquat (Dipiridyl) phun 
                        2kg/ha làm chết mía, tác dụng như một loại trừ cỏ mạnh. Nhưng khi phun 0,125kg/ha 
                        có tác dụng hãm mía ra hoa. ở Mêhicô phun 0,250-1kg Diquat hòa với 70 lít nước có 
                        kết quả tốt. Philipin cũng dùng Diquat để hãm mía ra hoa. Tuy vậy việc dùng Diquat 
                        cũng cần phải thận trọng. Nếu phun vào lúc mía bị hạn, năng suất sẽ giảm rất mạnh, 
                        phun vào lúc mưa nhiều, tác dụng sẽ kém. Đồng ruộng đủ ẩm, trời tạnh ráo, phun vào 
                        buổi sáng tránh nắng gắt nhiệt độ cao là những điều kiện xử lý tốt. Các biện pháp xử lý 
                        hãm ra hoa đều áp dụng trước vụ thu hoạch, khi mía còn giai đoạn thành thục. Vì vậy 
                        bao giờ cũng cần lưu ý đến biện pháp phục hồi sinh trưởng sau xử lý.<br/>
                        * Điều chỉnh thời vụ trồng: Đối với miền Trung và miền Nam cần tăng cường 
                        diện tích trồng vụ thu sẽ có thời gian vươn lóng dài, năng suất cao. Năm sau khi mía ra 
                        hoa có thể bố trí chặt đầu vụ để có điều kiện kéo dài thời gian vụ thu hoạch. Trồng vụ 
                        thu là biện pháp trốn cờ có hiệu quả.<br/>

                        


                    </div>

                </ul>
              </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Mia;
