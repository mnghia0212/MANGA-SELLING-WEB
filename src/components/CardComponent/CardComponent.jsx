import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { StyleNameProduct, StylePriceProduct, StyleSalePercentProduct, StyleSalePriceProduct, WrapperReportText, WrapperStyleTextSell } from './style'
import cv1 from '../../assets/images/cv1.jpg'
import {StarFilled} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';


const CardComponent = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/product-detail');
    };
  return (
    <div>
       <Card 
            onClick={handleCardClick}
            hoverable
            headStyle={{ width: '200px', height:'200px' }}
            bodyStyle={{padding:'10px'}}
            style={{width:'200px'}}
            cover={<img alt="example" src={cv1} />}
        >
        <div>
            <StyleNameProduct>One piece - Combo 10 episodes from 1 to 10</StyleNameProduct>

            <WrapperReportText>
                <span>5</span><StarFilled style={{fontSize:'10px', color:'#e68a00', marginLeft:'2px'}}/>
                <WrapperStyleTextSell style={{marginLeft:'5px'}}> | 10+ sold</WrapperStyleTextSell>
            </WrapperReportText>

            <span style={{display:'flex',marginTop:'5px'}}>
                <StylePriceProduct>200,000 VND</StylePriceProduct>
                <StyleSalePriceProduct><s>220,000 VND</s></StyleSalePriceProduct>
            </span>

            <div>
                <StyleSalePercentProduct StyleSalePercentProduct>-10%</StyleSalePercentProduct>
            </div>
        </div>
        
        </Card> 
    </div>
  )
}

export default CardComponent
