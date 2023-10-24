import { Badge, Col} from 'antd'
import React from 'react'
import { UserOutlined, ShoppingCartOutlined, CaretDownOutlined } from '@ant-design/icons'
import 
{ 
    WrapperHeader, 
    WrapperTextHeader,
    WrapperHeaderAccount,
    WrapperTextHeaderSmall
} from './style'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'

const HeaderComponent = () => {
  return (
    <div>
       <WrapperHeader>
            <Col span={5}><a href='/'><WrapperTextHeader>Manga King</WrapperTextHeader></a></Col>

            <Col span={14}>
                <ButtonInputSearch 
                    placeholder="Type the name of the book or the author to search" 
                    size="large"
                    allowClear
                    textButton="Search"
                    
                    />
            </Col>

            <Col span={5} style={{display: 'flex', gap: '38px', alignItems: 'center'}}>
                <WrapperHeaderAccount style={{marginLeft:'20px'}}>
                    <UserOutlined style={{fontSize: "28px"}}/>
                    <div>
                        <a href='/sign-in'><WrapperTextHeaderSmall>Sign in</WrapperTextHeaderSmall></a>
                        <WrapperTextHeaderSmall> / </WrapperTextHeaderSmall>
                        <a href='/sign-up'><WrapperTextHeaderSmall>Sign up</WrapperTextHeaderSmall></a>
                        <div>
                            <WrapperTextHeaderSmall>Account</WrapperTextHeaderSmall>
                            <CaretDownOutlined />
                        </div>
                    </div>
                </WrapperHeaderAccount>

                <div>
                    <a href='/cart'>
                        <WrapperHeaderAccount>
                            <Badge count={4} size='default'>
                                <ShoppingCartOutlined style={{fontSize: "28px"}}/>
                            </Badge>
        
                            <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
                        </WrapperHeaderAccount>
                    </a>
                    
                </div>
            </Col>
        </WrapperHeader>
    </div>
  )
}


export default HeaderComponent

