import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { TextRecommend, WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import bn1 from '../../assets/images/bn1.jpg'
import bn2 from '../../assets/images/bn2.jpg'
import bn3 from '../../assets/images/bn3.jpg'

import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const arrBestseller = ["Best seller", "New comics", "All comics"]
  const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/:type');
    };
  return (
    <>
      <div style={{width:'1270px', margin:'0 auto'}}>
          <WrapperTypeProduct onClick={handleCardClick}>
            {arrBestseller.map((item) => {
              return (
                <TypeProduct name={item} key={item}/>
              )
            })}
          </WrapperTypeProduct>
      </div>

      <div>                   
          < SliderComponent arrImages={[bn1, bn2, bn3]}/>  
      </div>

      <div id='body' style={{width:'100%', backgroundColor:'#efefef' }}>
          <div id='container' style={{height:'1300px', width:'1270px', margin:'0 auto'}}>

              <div style={{borderBottom: '1px solid #e68a00'}}>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <TextRecommend>Recommend Comics</TextRecommend>
              </div>

              <WrapperProducts>
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
                  <CardComponent/>
                  <CardComponent/>
                  <CardComponent/>
              </WrapperProducts>


              <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'15px'}}>
                  <WrapperButtonMore textButton='See more' type=''outline 
                      styleButton={{
                        border:'2px solid #e68a00', 
                        width: '240px',
                        height: '40px',
                        borderRadius: '10px',
                        color: '#e68a00',
                        fontWeight: '600',
                        fontFamily:'Oswald',
                      }}
                      
                  />
                </div>
            </div>
        </div>
    </>
    
  )
}

export default HomePage
