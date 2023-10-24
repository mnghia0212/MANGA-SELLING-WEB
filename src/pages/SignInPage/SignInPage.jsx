import React, { useState } from 'react'
import { WrapperLeft, WrapperRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Button, Image } from 'antd'
import signinBg from '../../assets/images/signinBg.jpg'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(null);
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/sign-up');
    };
  return (
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', background:'#ccc', height:'100vh'}}>
          <div style={{width: '800px', height:'450px', borderRadius:'10px', backgroundColor:'#efefef', display:"flex"}}>
              <WrapperLeft>
                  <h1 style={{fontFamily:'Oswald'}}>Hello,</h1>
                  <p style={{fontFamily:'Oswald', fontSize:'13px'}}>Please sign in or sign up !</p>
                  <InputForm placeholder='Enter your email' style={{marginTop:'15px'}}/>
                  <div style={{position:'relative'}}>
                        <span
                            style={{
                                zIndex:10,
                                position:'absolute',
                                top:'25px',
                                right:'8px',
                                fontSize:'13px',
                                cursor:'pointer'
                            }}

                            onClick={() => {
                                setIsShowPassword(prevState => !prevState);
                            }}
                        >
                        {isShowPassword === null || isShowPassword === false ?
                            <EyeOutlined/>
                        :
                            <EyeInvisibleOutlined/>
                        }
                        
                        
                        </span>
                        <InputForm 
                            placeholder='Enter your password' 
                            style={{marginTop:'15px'}}
                            type={isShowPassword === null || isShowPassword ? 'text' : 'password'}
                        />
                  </div>
                  
                  <ButtonComponent
                      size={40} 
                      bordered={false}
                      styleButton={{border: 'none',
                          backgroundColor: '#e68a00',
                          width: '420px',
                          height: '50px',
                          borderRadius: '10px',
                          marginTop:'25px',
                      }}
                      textButton="Sign in"
                      styleTextButton={{color: 'rgb(36,36,36)', fontSize:'15px', fontWeight:'600', fontFamily:'Oswald'}}
                  >

                  </ButtonComponent>
                  <div style={{marginTop:'15px'}}>
                      <WrapperTextLight>Forget your password?</WrapperTextLight>
                      <p style={{fontSize:'13px', fontFamily:'Oswald', marginTop:'15px'}}> Don't have an account yet?
                          <WrapperTextLight onClick={handleCardClick} style={{marginLeft:'5px'}}>Create an account</WrapperTextLight>
                      </p>
                  </div>
                  
              </WrapperLeft>

              <WrapperRight>
                  <Image src={signinBg} preview={false} alt='Signin Image' width='270px' height='280px' style={{paddingTop:'5px'}}/> 
                  <h3 style={{fontFamily:'Oswald', padding:'0', margin:'10px 0 0 0'}}>Buy Manga on Manga King</h3>
                  <h3 style={{fontFamily:'Oswald', margin:'10px 0 0 0'}}>This is where u can get any manga you want !</h3>
              </WrapperRight>
          </div>
      </div>
    
  )
}

export default SignInPage
