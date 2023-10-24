import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperPage, WrapperProducts } from './style'

const TypeProductPage = () => {
    const onChange = () => {}
    return (
        <div style={{padding:'0px 110px', background:'#efefef'}}>
            <Row style={{ flexWrap:'nowrap',paddingTop:'20px'}}>
                <WrapperNavbar span={4} >
                    <NavbarComponent/>
                </WrapperNavbar>
                
                <Col span={20}>
                    <WrapperProducts span={20}>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                    </WrapperProducts>

                    <WrapperPage>
                        <Pagination 
                            showQuickJumper 
                            defaultCurrent={2} 
                            total={100} onChange={onChange} 
                            style={{textAlign:'center', marginTop:'20px'}}
                        />
                    </WrapperPage>
                    
                </Col>
                
            </Row>
        </div>
          
        

        
    )
}

export default TypeProductPage
