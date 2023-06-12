import React, { useState } from 'react';
import './CrChe.css'
import Lac1 from '../../img/lac.png'
import Lac2 from '../../img/lac1.png'
import Intro from '../Title/Title'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
const Lac = () => {
  
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
          title={'Quy trình phát triển cây lạc'}
          img={Lac1 }
        />
          <div class="crop-animal-item-detail">
            <img src={Lac2} alt="" class="crop-animal-item__img"
          />
            <div class="crop-animal-item-desc">
                <ul><p>CÁC GIAI ĐOẠN SINH TRƯỞNG PHÁT TRIỂN<br/>
                    Chu kỳ sinh trưởng phát triển của cây lạc biến động lớn từ 85-160 ngày. Sự biến 
                    động này phụ thuộc đặc tính di truyền của từng giống và điều kiện môi trường. Ở các 
                    nước trong vùng nhiệt đới, các giống lạc thường có chu kỳ sinh trưởng ngắn hơn ở các 
                    vùng ôn đới ở gần mức giới hạn phân bố của cây lạc.<br/>
                    Tại Việt Nam bên cạnh các giống lạc địa phương đã có hàng trăm giống và dòng 
                    lạc nhập nội. Các giống này hầu hết có chu kỳ sinh trưởng từ 90-135 ngày (tính theo 
                    thời vụ chính của vùng). Các giống lạc này trồng tại các tỉnh miền Trung và miền Nam 
                    có thời gian sinh trưởng ngắn hơn khi đem trồng tại các tỉnh phía Bắc.<br/>
                    Quá trình sinh trưởng và phát triển của cây lạc là quá trình phát triển liên tục kế 
                    tiếp nhau, giai đoạn sinh trưởng phát triển trước tạo tiền đề cho giai đoạn kế tiếp sau. 
                    Tuy nhiên có thể phân chia thành các thời kỳ nhỏ để dể nhận biết và tác động các biện 
                    pháp kỹ thuật.<br/></p>
                    <li onClick={() => handleItemClick(1)}>1. Thời kỳ nẩy mầm của hạt</li>
                  <div
                    id="content-1"
                    className={`content-item ${activeContent === 1 ? 'active' : ''}`}>
                                1.1. Quá trình này mầm: Điều kiện trước hết để lạc nẩy mầm được là phải hút đủ một 
                                lượng nước cần thiết. Theo Bouffil, trong điều kiện thuận lợi (môi trường bão hoà 
                                nước, nhiệt độ 30oC) hạt lạc có thể hút lượng nước bằng 60-65% trọng lượng hạt, đó là 
                                lượng nước tối thích cho hạt nẩy mầm. Trong điều kiện thuận lợi ngoài đồng ruộng thì 
                                sau gieo 8 giờ đầu hạt đã hút 70-90% lượng nước cần và hạt lạc hút nước chủ yếu trong 
                                24 giờ đầu khi được đưa vào đất. Sức hút nước, lượng nước hút và thời gian hút nước 
                                phụ thuộc vào sức sống của hạt, độ ẩm hạt, vào độ ẩm và nhiệt độ đất.<br/>
                                Hạt lạc là loại hạt to có hàm lượng dầu cao nên thời gian hút đủ nước và nẩy 
                                mầm thường kéo dài hơn so với một số loại hạt khác. Trên đồng ruộng, nếu đất tơi xốp 
                                và nhiệt độ thích hợp thì thời gian từ gieo hạt đến khi hai lá mầm vượt lên khỏi mặt đất 
                                khoảng 6-7 ngày (khoảng 10% số hạt có lá mầm lên khỏi mặt đất). Khi đất thiếu ẩm, 
                                nhiệt độ thấp thì thời gian nẩy mầm kéo dài hơn. Để cho hạt hút đủ nước chúng ta có 
                                thể xử lý bằng một số biện pháp kỹ thuật.<br/>
                                Sau khi hạt hút đủ nước các men phân giải, chủ yếu là lipaza, hệ thống men 
                                dezoxynaza chuyển hoá các hợp chất hữu cơ dự trữ thành sản phẩm cuối cùng là các 
                                đường và axit amin để tổng hợp nên các hợp chất cấu tạo cây non.<br/>
                                Hình 5.1. Quá trình nảy mầm của hạt lạc<br/>
                                A: Hạt hút nước, phôi rễ xuất hiện. B: Phôi rễ dài ra cắm sâu vào đất<br/>
                                C,D: Đoạn thân dưới hai lá mầm đưa hai lá mầm lên khỏi mặt đất<br/>
                                E,F: Đoạn thân trên lá mầm phát triển thành thân, các lá và hai mầm cành xuất hiện
                                Theo Trần Triệu Khánh, quá trình phân giải này cần lượng oxy rất lớn. Nguồn 
                                oxy thiếu hụt này phải được bổ sung từ không khí trong quá trình hô hấp. Vì vậy đất 
                                không tơi xốp thiếu oxy sẽ ảnh hưởng rất lớn đến sự nẩy mầm của hạt lạc.<br/>
                                Quá trình hạt nẩy mầm được biểu hiện trước hết là phôi rễ chui ra khỏi vỏ hạt và 
                                phát triển nhanh theo chiều sâu của đất. Đồng thời đoạn thân dưới lá mầm phát triển 
                                nhanh dài ra bằng độ sâu lấp hạt và đưa hai lá mầm vượt lên khỏi mặt đất. Đoạn thân 
                                trên lá mầm lớn nhanh làm 2 lá mầm tách ra và phôi mầm xuất hiện rõ.<br/>
                                1.2. Các nhân tố ảnh hưởng đến sự nẩy mầm: <br/>
                                * Chất lượng hạt giống: Chất lượng hạt giống lạc không chỉ phụ thuộc vào quá 
                                trình bảo quản cất trữ mà còn phụ thuộc vào đặc tính của giống lạc và thời điểm thu 
                                hoạch. Các giống lạc thuộc nhóm Spanish và Valencia không có tính ngủ sau thu hoạch 
                                (có thể nẩy mầm tại ruộng) nên khi thu hoạch cần phải xác định đúng thời điểm để đảm 
                                bảo hạt có đủ độ chín mới có hạt giống tốt. Các giống lạc thuộc nhóm Virginia có tính 
                                ngủ sau thu hoạch từ 1-4 tháng rất thuận lợi cho việc bảo quản. Các giống này muốn 
                                trồng ngay phải xử lý bằng nhiệt độ cao 40oC trong 14 ngày hay dùng giberelin, etylen. 
                                Trong quá trình bảo quản để hạn chế giảm sút chất lượng giống, điều quan trọng là khi 
                                cất giữ không để cho hàm lượng nước trong hạt tăng lên (độ ẩm hạt 8- 8,5%) và bảo 
                                quản nơi nhiệt độ thấp, thoáng mát.<br/>
                                * Nhiệt độ: Nhiệt độ thích hợp cho sự nẩy mầm là 30-32oC. Nếu nhiệt độ thấp 
                                thời gian này mầm kéo dài và dưới 15oC hạt không nẩy mầm. Nhiệt độ cao trên 41oC 
                                ảnh hưởng xấu đến sự nẩy mầm, trên 54oC hạt mất sức nẩy mầm.<br/>
                                * Đất: Thoáng, tơi xốp có độ ẩm 70-75% là điều kiện tốt nhất cho sự nẩy mầm<br/>
                                * Kỹ thuật gieo hạt: Lấp hạt quá sâu (5cm) hoặc quá mỏng (dưới 2cm) sẽ 
                                không tốt. Độ sâu lấp hạt từ hơn 3cm là thích hợp.<br/>


                  </div>
                  <li onClick={() => handleItemClick(2)}>2. Thời kỳ cây con và trước ra hoa: </li>
                  <div
                    id="content-2"
                    className={`content-item ${activeContent === 2 ? 'active' : ''}`} >
                                         + Đặc điểm sinh trưởng của thời kỳ: Thời kỳ cây con và trước ra hoa được 
                                        tính từ khi đã có tối đa có hạt có 2 lá mầm xoè rộng để lộ rõ phôi mầm đến trước khi 
                                        cây nở hoa; tương đương với thời gian từ 25-45 ngày vào vụ Xuân và vụ Đông Xuân. 
                                        Vụ Hè thu thời kỳ cây con ngắn hơn khoảng 20-23 ngày.<br/>
                                        + Giai đoạn cây con: được xác định từ lúc cây xoè lá mầm đến khi cây có 3 lá 
                                        thật, đây cũng là thời kỳ bộ rễ lạc mới chỉ phát triển hoàn chỉnh, có đủ rễ chính, rễ phụ 
                                        và nốt sần, nhưng hoạt động của bộ rễ còn yếu, đặc biệt là giai đoạn này vi khuẩn nốt 
                                        sần đang xâm nhập và hình thành nhưng chưa có khả năng cố định đạm, chúng lấy dinh 
                                        dưỡng từ cây con.Vì vậy có thể nói rằng thời kỳ cây con là thời kỳ khủng hoảng dinh 
                                        dưỡng đặc biệt là dinh dưỡng đạm. Thời kỳ cây con tuy tốc độ ra lá nhanh nhưng diện 
                                        tích các lá chét lại rất nhỏ.<br/>
                                        Khi phôi mầm lộ rõ đã nhìn thấy 2 mầm cành cấp một đầu tiên. Khi cây có 3 lá 
                                        thật thì hai cành cấp một đầu tiên đã có chiều dài 1-1,5cm và có 1 lá. Đồng thời tại 
                                        nách lá thật thứ nhất và thứ hai của thân, mầm cành cấp một thứ ba, thứ tư xuất hiện.
                                        Thời kỳ này chiều cao cây, chiều dài cành cấp một có tốc độ tăng trưởng chậm 
                                        (0,1-0,3 cm/ngày), chiều cao cây chỉ khoảng 3-5cm. Lượng chất khô tích luỹ ít, đạt 
                                        khoảng 10% tổng số chất khô (Lê Song Dự, 1984).<br/>
                                        Cây lạc phân hoá mầm hoa sớm, theo Andanigowde (1977) mầm hoa hình thành 
                                        vào ngày 14 sau khi gieo hạt. Các cành cho quả kinh tế đều hình thành trên các cành 
                                        phát sinh trong thời kỳ cây con. Do đó thời kỳ cây con có ý nghĩa lớn tạo cơ sở tiền đề 
                                        cho năng suất của lạc.<br/>
                                        + Giai đoạn trước ra hoa: là thời kỳ cây có từ 4 - 8 lá, do hoạt động của rễ 
                                        mạnh dần nên sức sinh trưởng cũng tăng dần (tốc độ tăng trưởng khoảng từ 0,3-
                                        0,6cm/ngày). Giai đoạn này nếu nhiệt độ quá cao, sự tích lũy các chất dinh dưỡng thấp, 
                                        tốc độ ra lá chậm, hoa phát sinh sớm (ngay khi cây có 3, 4, 5 lá) sẽ ảnh hưởng xấu đến 
                                        số lượng và trọng lượng quả sau này, nhiệt độ thích hợp cho giai đoạn này là 23-260
                                        c. <br/>
                                        + Những nhân tố ảnh hưởng đến thời kỳ cây con:- Nhiệt độ: Thời kỳ cây con 
                                        lạc chịu rét kém, cây dễ bị chết khi nhiệt độ xuống thấp dưới 15oC. Nhiệt độ quá cao 
                                        càng sớm phát dục khi thân cành kém phát triển cả về số lượng và chất lượng. Như vậy 
                                        thời vụ gieo hạt có ý nghĩa rất lớn đối với thời kỳ sinh trưởng này. Nhiệt độ thích hợp 
                                        cho cây con phát triển khoảng 18-20oC.<br/>
                                        Đây là kỳ khủng hoảng thiếu dinh dưỡng đạm nên cần bón đạm kịp thời khi cây có 3 lá thật. Lượng bón là 2/3 lượng đạm của quy trình phân bón và 1/2 lượng kali trên 
                                        cơ sở đã bón lót đủ lân và 1/2 lượng vôi. Thời kỳ cây con thường bị sâu xám phá hoại 
                                        mạnh, làm giảm mật độ cây, đồng thời các bệnh hại thân, rễ làm héo rũ cây như nấm 
                                        gốc mốc đen, nấm gốc mốc trắng, nấm vàng và héo xanh vi khuẩn, cần chú ý phòng trừ 
                                        kịp thời.<br/>
                    </div>
                    <li onClick={() => handleItemClick(3)}>3. Thời kỳ cây lạc ra hoa đâm tia làm quả:</li>
                    <div
                    id="content-3"
                    className={`content-item ${activeContent === 3 ? 'active' : ''}`}>
                        + Đặc điểm sinh trưởng phát triển của lạc ở các thời kỳ: Lạc là cây hình 
                        thành các bộ phận sinh thực rất sớm, chúng bắt đầu phân hoá mầm hoa từ khi cây chỉ 
                        có 2 lá thật. Khi cây lạc có hoá nở chỉ là sự biểu hiện thời kỳ cây có hoạt động sinh lý 
                        mạnh mẽ nhất.<br/>
                        Ở thời kỳ này cây đồng thời diễn ra hai quá trình hoạt động sinh lý: quá trình 
                        sinh trưởng dinh dưỡng có tốc độ sinh trưởng của thân, cành, lá tăng dần (sự tích luỹ 
                        chất khô cao, diện tích lá lớn). Quá trình sinh trưởng sinh thực cũng trên cơ sở đó mà 
                        tăng nhanh. Mối quan hệ giữa sinh trưởng dinh dưỡng và sinh trưởng sinh thực thường 
                        thống nhất với nhau nhưng đôi khi cũng xảy ra sự cạnh tranh thiếu thống nhất. Nếu 
                        sinh trưởng dinh dưỡng quá mạnh, cây vống lốp sẽ làm cho sự hình thành hoa chậm, 
                        hoa rụng kéo dài thời gian chín của quả lạc.<br/>
                        Hầu hết các vùng trồng lạc của Việt Nam, việc cung cấp nước cho lạc chỉ nhờ 
                        vào lượng mưa nên thường dẫn tới mối quan hệ cùng chiều theo xu hướng xấu. Cây lạc 
                        phát triển thân cành lá kém, tích luỹ chất khô thấp làm cho lạc ít hoa, quả nhỏ dẫn tới 
                        năng suất thấp.<br/>
                        Thời kỳ ra hoa đâm tia của lạc không dài, khoảng 30 ngày nhưng lượng chất 
                        khô tích luỹ được chiếm tới 40% tổng lượng chất khô nên là thời kỳ quan trọng trong 
                        chu kỳ sống của cây.<br/>
                        + Sự phân hoá mầm hoa: Cây lạc có 2 lá thật đã bắt đầu phân hoá mầm hoa, 
                        quá trình phân hoá được chia thành các bước sau:<br/>
                        Bắt đầu phân hoá mầm hoa: khi thấy 2 lá bắc nhỏ xuất hiện ở nách lá.<br/>
                        Hình thành đài hoa: khi giữa 2 lá bắc xuất hiện 1 chấm nhỏ.<br/>
                        Hình thành chỉ nhị, nhuỵ, cánh hoa: sau khi lá bắc xuất hiện 10 ngày.<br/>
                        Hình thành bao phấn, phấn hoa, đai lớn nhanh (3-4 ngày trước khi hoa nở).<br/>
                        Theo Andanigowde, 1997 thì từ lúc hình thành mầm hoa đến khi hoa nở từ 18-
                        21 ngày. Đối với giống lạc đứng bắt đầu ra hoa vào khoảng 26-34 ngày sau khi gieo 
                        (Smith 1951) điều này phù hợp với các giống lạc đứng trồng ở miền Trung và miền 
                        Nam nước ta. Các tỉnh phía Bắc kéo dài hơn khoảng 5-10 ngày nếu vụ lạc Xuân gặp 
                        thời tiết giá lạnh.<br/>
                        + Sự nở hoa: Quy luật ra hoa: lạc là cây ra hoa vô hạn nên các cành phát sinh ở 
                        các đốt dưới gốc thân, cành sẽ có hoa sớm hơn các đốt thân cành phía trên. Trên một 
                        chùm hoa của một đốt các hoa cũng ra hoa không cùng một thời gian. Bunting và 
                        Elsten (1980) quan sát thấy rằng : trên một chùm hoa, noãn của những hoa đã thụ tinh 
                        trước hết sẽ ức chế sự hình thành tia quả của những hoa thụ tinh sau. Thường một 
                        chùm hoa chỉ có 1 quả phát triển mặc dù có nhiều noãn đã được hình thành từ các hoa 
                        cùng chùm nở sau. Các hoa trên cùng một đốt nở cách nhau khoảng 1-2 ngày, hoa đốt 
                        dưới và đốt trên ở gần gốc nở cách nhau khoảng 3-4 ngày. Các hoa ở các đốt phần giữa 
                        thân, cành nở cách nhau từ 10-20 ngày. Sự ra hoa không cùng một thời gian, đồng thời 
                        các hoa phát triển trước ức chế sự phát triển các hoa sau và sự phát triển của các hoa 
                        sau cũng làm chậm lại sự phát triển của các hoa phát triển trước, vì vậy tỷ lệ hoa phát 
                        triển thành tia chỉ đạt 21,9-67,5%. Tỷ lệ hoa phát triển thành quả hoàn thiện khoảng 
                        9,2-16,3% (Shiluya và Smith, 1954), Joshi và Gaypara (1971) cho thấy số lượng hoa 
                        khác nhau theo mùa. Tổng số hoa ở dạng đứng ít nhưng số tia và quả phát triển lại cao 
                        hơn dạng bò và dạng trung gian.<br/>
                        Ở Việt Nam lạc trồng trong vụ Đông Xuân và vụ Xuân có số lượng hoa lớn hơn 
                        trong vụ Hè. Tỷ lệ hoa phát triển hoàn thiện (tỷ lệ hoa hữu hiệu) có thể đạt tới trên 
                        20%.<br/>
                        + Sự phân bố hoa trên cây: Do đặc điểm ra hoa vô hạn nên sự phân bố hoa 
                        trên các cành cũng rất khác nhau. Số hoa phân bố trên các cành như sau:<br/>
                        Cành cấp một thứ nhất và thứ hai: 35% tổng số hoa trên cây.<br/>
                        Cành cấp hai: 30-35% tổng số hoa trên cây.<br/>
                        Cành cấp một thứ 3 và thứ 4: Dưới 30% tổng số hoa trên cây.<br/>
                        Cành cấp một thứ 5: Trên 5% tổng số hoa trên cây.<br/>
                        Số quả chín hoàn thiện (quả chắc) tập trung ở cặp cành cấp một thứ nhất và các 
                        cành cấp hai tới 80-90% tổng số quả chắc trên cây. Như vậy các hoa xuất hiện thuộc 
                        các đốt gốc của thân cành, đặc biệt trên đốt đầu tiên có ý nghĩa kinh tế rất lớn, vùng 
                        gốc lạc có thể gọi là vùng cho năng suất.<br/>
                        Tổng thời gian ra hoa của cây lạc phụ thuộc vào đặc tính của giống, nhóm giống 
                        và nhiệt độ lúc cây nở hoa. Các giống lạc đứng có tổng thời gian ra hoa ngắn hơn các 
                        giống lạc bò và trung gian. Ting và Hor (1973) cho biết một kiểu nở hoa có hai đỉnh 
                        kéo dài từ 85-100 ngày với giống lạc bò. Smith (1954) cho biết không thấy có sự ra hoa 
                        đều đặn mà thường giao động theo chu kỳ cao thấp đều đặn trong suốt thời kỳ ra hoa. 
                        Tuy nhiên những nghiên cứu của Varisai Muhammad và Dorairas (1969) lại cho thấy 
                        sự ra hoa tăng nhanh ngay từ đầu và đạt đỉnh cao sau một tuần, sau đó giảm trong 
                        khoảng 10 ngày và có đợt thứ 2, đợt hoa này ít hơn lần đầu và giảm dần đến hết vào
                        khoảng 75 ngày sau khi gieo.<br/>
                        Các giống lạc đứng ở nước ta có thời gian ra hoa ngắn dần từ bắc vào nam, các 
                        vụ Đông Xuân và Xuân thời gian ra hoa biến động từ 30-40 ngày. Các tỉnh miền Trung 
                        trở vào, nếu trồng chậm thời vụ thời gian ra hoa chỉ khoảng 25-26 ngày. Khi bắt đầu ra 
                        hoa (1-2 ngày đầu) số lượng hoa nở trên cây trong một ngày rất ít, trung bình dưới một 
                        hoa, các ngày tiếp sau (ngày thứ ba, thứ tư) số hoa trung bình là 2-3 hoa/cây/ngày. 
                        Những ngày tiếp theo nếu nhiệt độ thường xuyên từ 25-30oC thì số lượng hoa ra trong 
                        một ngày sẽ nhiều hơn (từ 5-12 hoa/ngày). Trong thời gian 15-20 ngày đầu số hoa đã 
                        có thể đạt từ 70-80% tổng số hoa. Số hoa/cây trong ngày luôn đạt cao nhưng vẫn có sự 
                        biến động, có thể có 1 đến 2 lần hoa nở tập trung gọi là đợt hoa rộ. Lạc trồng muộn 
                        thời vụ, lạc trồng trái vụ thường chỉ có 1 lần hoa nở rộ. Sau thời gian hoa ra tập trung 
                        các ngày tiếp sau, số lượng hoa ra trong ngày giảm dần. Có những giống ra hoa rải rác 
                        gần tới lúc thu hoạch. Số lượng hoa trên cây cũng phụ thuộc vào đặc tính của nhóm 
                        giống, mùa vụ, diễn biến thời tiết.<br/>
                        + Sự thụ phấn: Theo dõi sự phát triển của hoa lạc, người ta thấy hầu hết nụ hoa 
                        đạt kích thước tối đa vào buổi chiều tối. Sau đó hạt phấn chín, bao phấn tách ra giải 
                        phóng hạt phấn; Đầu và vòi nhụy đủ điều kiện tiếp nhận hạt phấn. Quá trình thụ phấn 
                        được thực hiện khi hai cánh thìa còn ôm kín đầu nhuỵ và nhị trước khi hoa nở 4-6 giờ 
                        (khoảng 1-3giờ sáng). Sự nở hoa trong ngày của hoa lạc tuỳ thuộc cường độ ánh sáng 
                        của từng ngày, từng vùng sinh thái, hoa lạc thường nở vào lúc 6-9 giờ sáng.<br/>
                        + Sự thụ tinh: Sau khi thụ phấn tế bào mẹ của hạt phấn nẩy mầm ở đầu nhuỵ và 
                        đưa 2 tinh tử tiến dần trong vòi nhuỵ và xuống bầu hoa với vận tốc 4mm/h. Quá trình 
                        thụ tinh trong khoảng 10 giờ sau khị thụ phấn.<br/>
                        Sự thụ phấn tiến hành sớm trước khi hoa nở nên chủ yếu là tự thụ phấn. Sự giao 
                        phấn có xảy ra nhưng tỷ lệ giao phấn rất thấp, khoảng 0,5-1%.<br/>
                        + Những nhân tố ảnh hưởng đến sự ra hoa: Khi ra hoa đâm tia cây lạc rất 
                        mẫn cảm với ngoại cảnh. Thời kỳ này cây lạc cần nhiệt độ, ẩm độ tương đối cao và đủ 
                        dinh dưỡng.<br/>
                        * Nhiệt độ: Nếu nhiệt độ dưới 24oC hoa ít và ra không tập trung. Nhiệt độ dưới 
                        12oC ảnh hưởng nghiêm trọng. Nhiệt độ thích hợp là 24-28oC. Biên độ nhiệt ngày đêm 
                        đạt 6oC là thích hợp cho sự thụ phấn thụ tinh.<br/>
                        * Nước: Đây là thời kỳ cây lạc cần nhiều nước và được coi là thời kỳ khủng 
                        hoảng thiếu nước, cần tưới để đất có ẩm độ 75-80%. Khi ẩm độ đất quá cao (85%) hoa 
                        sẽ ít, cây lạc bị vống, lốp.<br/>
                        * Dinh dưỡng : Cây cần có đủ dinh dưỡng đạm và kali để tăng tỷ lệ hoa hữu 
                        hiệu, quả và hạt to, vỏ quả sáng.Bón 1/3 lượng đạm, 1/2 lượng kali và 1/2 lượng vôi còn lại của quy trình.<br/>
                    </div>
                    
                    <li onClick={() => handleItemClick(4)}>4. Thời kỳ hình thành quả, hạt và chín</li>
                    <div
                    id="content-4"
                    className={`content-item ${activeContent === 4 ? 'active' : ''}`}>
                        Sau khi thụ tinh lớp tế bào nơi gốc bầu hoa phân chia và phát triển nhanh thành tia. 
                        Khi tia dài ra lớp tế bào biểu bì hoá gỗ che chở cho bầu hoa đã được thụ tinh. Các tia ở 
                        vùng sát gốc sau khi hoa nở 6-8 ngày đã đưa bầu hoa vào đất ở độ sâu 3-7cm. Các tia 
                        phát triển ở các đốt phía trên thời gian tiếp cận đất phải dài hơn, nhiều tia ở vị trí quá 
                        cao tia không phát triển đủ chiều dài thì không hình thành được quả. Sau khi bầu hoa 
                        vào đất, sẽ lớn dần tạo thành quả. Quá trình hình thành quả được tiến hành như sau:
                        3 ngày: bầu hoa chưa thay đổi rõ về ngoại hình.<br/>
                        5-6 ngày: bầu hoa bắt đầu phình ngang.<br/>
                        9 ngày: quả lớn nhanh, thấy rõ hạt ở gần cuống.<br/>
                        12 ngày: quả tăng kích thước lên 2 lần khi 9 ngày.<br/>
                        20 ngày: quả định hình nhưng vỏ quả mọng nước, 2 hạt đã thấy rõ nhưng nhỏ.<br/>
                        30 ngày: vỏ quả mất nước dần săn lại, gân quả mờ, hạt định hình.<br/>
                        45 ngày: vỏ quả khô, gân vỏ đã nổi rõ, vỏ quả bị thu hẹp. Vỏ hạt mỏng dần và 
                        bắt đầu mang màu sắc vỏ hạt quy định.<br/>
                        60 ngày : hạt chín hoàn toàn, mặt trong của vỏ quả có màu nâu đen hoặc đen 
                        nâu, mặt ngoài của vỏ vàng nhạt ngả xám.<br/>
                        Trong điều kiện thời tiết bình thường, thời gian từ khi ra hoa đến lúc hạt chín 
                        hoàn toàn khoảng 65-70 ngày. Các hoa ra muộn thời gian chín sẽ ngắn hơn nên chưa 
                        đạt đến độ chín hoàn toàn. Trong điều kiện nhiệt độ quá cao, khô hạn chế độ dinh 
                        dưỡng kém đều có thể bị rút ngắn thời gian hình thành quả sẽ dẫn đến giảm trọng
                        lượng quả và hạt. Vấn đề này liên quan đến việc thu hoạch lạc, trên cơ sở thời gian ra 
                        hoa đến quả chín và quan sát tình trạng sinh trưởng của cây lạc trên đồng ruộng để xác 
                        định thời gian thu hoạch cho thích hợp.<br/>
                        Cùng với sự biến đổi về hình thái của quả và hạt là quá trình biến đổi sinh lý 
                        sinh hoá trong quả và hạt. Hàm lượng nước giảm dần; chất khô và tỷ lệ dầu trong quả 
                        tăng.<br/>
                        + Các nhân tố ảnh hưởng: Theo Bùi Huy Đáp (Việt Nam), Chacop (Nhật Bản) 
                        và Chiêm Hiển Anh (Trung Quốc) đã xác định: Điều kiện chủ yếu hình thành quả của 
                        cây lạc là phải có bóng tối và ẩm độ.<br/>
                        * Nước: Đất thiếu ẩm làm cho quả phát triển chậm, quả hạt nhỏ. Độ ẩm thấp 
                        50% ảnh hưởng rất xấu, quả ít. Độ ẩm đất vào kỳ cuối cao 85% bệnh thối tia thối quả 
                        lạc nhiều, hạt nẩy mầm. Ẩm độ đất thích hợp cho lạc làm quả là 75%. Khi lạc chín ẩm 
                        độ đất thích hợp là 65%.<br/>
                        * Nhiệt độ: Nhiệt độ dưới 20oC cản trở quá trình vận chuyển vật chất khô về 
                        hạt. Nhiệt độ thích hợp cho thời kỳ này từ 24-28oC.<br/>
                    </div>

                  </ul>


              </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Lac;
