import * as Components from './Components'
import styles from './style.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Login () {
    const [signIn, toggle] = React.useState(true);
return (
    
    <div className={styles.body}>
<Components.Container >
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Đăng Ký</Components.Title>
                      <Components.Input type='text' placeholder='Tên đăng ký' />
                      <Components.Input type='email' placeholder='Mật khẩu' />
                      <Components.Input type='password' placeholder='Nhập lại mật khẩu' />
                      <Components.Button>Đăng ký</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Đăng nhập</Components.Title>
                       <Components.Input type='email' placeholder='Tên tài khoản' />
                       <Components.Input type='password' placeholder='Mật khẩu' />
                       <Components.Anchor href='#'>Bạn quên mật khẩu ?</Components.Anchor>
                       <Link to ='/crops'>
                       <Components.Button>Đăng nhập</Components.Button>
                       </Link>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                     
                      <Components.Paragraph>
                          Bạn đã có tài khoản ?
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Đăng nhập
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                       
                        <Components.Paragraph>
                           Bạn chưa đăng ký tài khoản ?
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Đăng Ký
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
    </div> 
   );
}

export default Login