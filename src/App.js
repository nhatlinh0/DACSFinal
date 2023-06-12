import './App.css'
import './Component/Navbar/Navbar.css'
import Home from './Component/Home/Home';
import { Routes, Route,  Link } from "react-router-dom";
import HomePage1 from './Component/HomePage1/HomePage1';

import HomePage2 from './Component/HomePage2/HomePage2';
import CrChe from './Component/HomePage1/CrChe';
import CaPhe from './Component/HomePage1/CaPhe';
import Caosu from './Component/HomePage1/Caosu';
import Mia from './Component/HomePage1/Mia';
import DauTuong from './Component/HomePage1/DauTuong';
import Lac from './Component/HomePage1/Lac';
import Bong from './Component/HomePage1/Bong';
import BoThit from './Component/HomePage2/BoThit'
import BoSua from './Component/HomePage2/BoSua'
import Ga from './Component/HomePage2/Ga'
import Vit from './Component/HomePage2/Vit'
import Lon from './Component/HomePage2/Lon'

import AccountLayout from './Layouts/AccountLayout'
import DefaultLayout from './Layouts/DefaultLayout'
import InfoLayout from './Layouts/InfoLayout'
import StageLayout from './Layouts/StageLayout'
import Login from './Layouts/Login'

function App() {
  return (
    
    <div className="App">
      
    
        <Routes>
              
                <Route  path="/" element={<Home />} />
                <Route path="/caytrong" element={<HomePage1 />} />
                <Route path="/vatnuoi" element={<HomePage2 />} />  
                <Route  path="/che" element={<CrChe/>} />      
                <Route  path="/caphe" element={<CaPhe/>} />  
                <Route  path="/caosu" element={<Caosu/>} />  
                <Route  path="/mia" element={<Mia/>} />      
                <Route  path="/dautuong" element={<DauTuong/>} />  
                <Route  path="/lac" element={<Lac/>} />  
                <Route  path="/caybong" element={<Bong/>} />     
                <Route  path="/bosua" element={<BoSua/>} />  
                <Route  path="/bothit" element={<BoThit/>} />      
                <Route  path="/lon" element={<Lon/>} />  
                <Route  path="/ga" element={<Ga/>} />  
                <Route  path="/vit" element={<Vit/>} />   
                <Route path='/login' element= {<Login></Login>}></Route>
                <Route
                        path="/crops"
                        element={
                            <DefaultLayout type="Tên cây trồng" crops>
                                Quy trình phát triển cây trồng
                            </DefaultLayout>
                        }
                    ></Route>

                    <Route
                        path="/animals"
                        element={
                            <DefaultLayout type="Tên vật nuôi" animal>
                                Quy trình phát triển con vật
                            </DefaultLayout>
                        }
                    ></Route>

                    <Route
                        path="/infocropslayout"
                        element={
                            <InfoLayout
                                info="Nhập thông tin cây trồng"
                                name="Tên cây trồng"
                                stage="Nhập các giai đoạn phát triển cây trồng"
                                crops
                            >
                                Thêm mới quy trình phát triển cây trồng
                            </InfoLayout>
                        }
                    ></Route>

                    <Route
                        path="/infoanimalslayout"
                        element={
                            <InfoLayout
                                info="Nhập thông tin con vật"
                                name="Tên con vật"
                                stage="Nhập các giai đoạn phát triển con vật"
                                animals
                            >
                                Thêm mới quy trình phát triển con vật
                            </InfoLayout>
                        }
                    ></Route>

                    <Route
                        path="/stagecropslayout"
                        element={
                            <StageLayout info="Nhập thông tin giai đoạn cây trồng" name="Tên giai đoạn" content crops>
                                Thêm mới quy trình phát triển cây trồng
                            </StageLayout>
                        }
                    ></Route>

                    <Route
                        path="/stageanimalslayout"
                        element={
                            <StageLayout info="Nhập thông tin giai đoạn con vật" name="Tên giai đoạn" content animals>
                                Thêm mới quy trình phát triển con vật
                            </StageLayout>
                        }
                    ></Route>

                    <Route path="/accountlayout" element={<AccountLayout>Cài đặt</AccountLayout>}></Route>        
       </Routes>

    </div>
  );
}

export default App;
