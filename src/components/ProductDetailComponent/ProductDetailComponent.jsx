import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import cv1 from '../../assets/images/cv1.jpg'
import cv2 from '../../assets/images/cv2.webp'
import cv3 from '../../assets/images/cv3.webp'
import cv4 from '../../assets/images/cv4.webp'
import cv5 from '../../assets/images/cv5.webp'
import cv6 from '../../assets/images/cv6.webp'
import cv7 from '../../assets/images/cv7.webp'
import { StylePriceProduct, StyleSalePercentProduct, StyleSalePriceProduct, StyleSpan1, StyleSpan2, StyleTextDes, WrapperAddress, WrapperBtnQualityProduct, WrapperDeppRow, WrapperHeadingInfo, WrapperImageSmall, WrapperInfo, WrapperInputNumber, WrapperPriceProduct, WrapperQualityProduct, WrapperRow, WrapperSalePercentProduct, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperTextDes, Divider } from './style'
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'


const ProductDetailComponent = () => {
  const onChange = () => {}
  return (
    <>
      <Row style={{padding:'16px', backgroundColor:'#fff', borderRadius:'10px'}}>
            <Col span={10} style={{border:'1px solid #ccc', paddingRight:'10px'}}>
                  <Image src={cv1} alt='product image' preview={false} />

                  <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
                    <WrapperStyleColImage span={4}>
                      <WrapperImageSmall src={cv2} alt='product small image' preview={false}/>
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                      <WrapperImageSmall src={cv3} alt='product small image' preview={false}/>
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                      <WrapperImageSmall src={cv4} alt='product small image' preview={false}/>
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                      <WrapperImageSmall src={cv5} alt='product small image' preview={false}/>
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                      <WrapperImageSmall src={cv6} alt='product small image' preview={false}/>
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                      <WrapperImageSmall src={cv7} alt='product small image' preview={false}/>
                    </WrapperStyleColImage>
                  </Row>
            </Col>
            <Col span={14} style={{paddingLeft:'30px'}}>
                <WrapperStyleNameProduct>One piece - Combo 10 episodes from 1 to 10</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{fontSize:'12px', color:'#e68a00'}}/>
                    <StarFilled style={{fontSize:'12px', color:'#e68a00'}}/>
                    <StarFilled style={{fontSize:'12px', color:'#e68a00'}}/>
                    <StarFilled style={{fontSize:'12px', color:'#e68a00'}}/>
                    <StarFilled style={{fontSize:'12px', color:'#e68a00'}}/>
                    <WrapperStyleTextSell style={{marginLeft:'5px'}}> | 10+ sold</WrapperStyleTextSell>
                </div>

                <WrapperPriceProduct>
                    <StyleSalePriceProduct>
                        <s>220,000 VND</s>
                    </StyleSalePriceProduct>

                    <StylePriceProduct>
                        200,000 VND
                    </StylePriceProduct>

                    <div style={{height: '50px', display: 'flex ', alignItems:'center'}}>
                        <StyleSalePercentProduct>-10%</StyleSalePercentProduct>
                    </div>
                  </WrapperPriceProduct>

                  <WrapperAddress>
                    <span style={{color: '#000', fontFamily:'Oswald'}}>Deliver to</span>
                    <span className='address'>District Go vap, Ward 10, Ho Chi Minh City</span>
                    <span className='change-address'> - Change the location</span>
                  </WrapperAddress>

                  <div style={{margin:'50px 0', borderBottom:'1px solid #ccc',borderTop:'1px solid #ccc',padding:'10px 0'}}>
                      <div style={{marginBottom:'10px', fontFamily:'Oswald'}}>Quantity</div>
                      <WrapperQualityProduct>
                          <button style={{border: 'none', background: 'transparent'}}>
                              <MinusOutlined style={{color:'#000', fontSize:'16px'}}/>
                          </button>
                          
                          <WrapperInputNumber min={1} max={100} defaultValue={3} onChange={onChange} size="small" />

                          <button style={{border: 'none', background: 'transparent'}}> 
                              <PlusOutlined style={{color:'#000', fontSize:'16  px'}}/>
                          </button>
                      </WrapperQualityProduct>
                  </div>
                  <div style={{display:'flex', alignItems:'center', gap:'20px', justifyContent:'center', marginTop:'90px'}}>
                      <ButtonComponent
                          size={40} 
                          bordered={false}
                          styleButton={{border: 'none',
                              backgroundColor: '#e68a00',
                              width: '250px',
                              height: '55px',
                              borderRadius: '10px',

                          }}
                          textButton="Buy"
                          styleTextButton={{color: 'rgb(36,36,36)', fontSize:'15px', fontWeight:'600', fontFamily:'Oswald'}}
                      >

                      </ButtonComponent>

                      <ButtonComponent
                          size={40} 
                          bordered={false}
                          styleButton={{
                              border: '2px solid #e68a00',
                              backgroundColor: '#efefef',
                              width: '250px',
                              height: '55px',
                              borderRadius: '10px',

                          }}
                          textButton="Add to cart"
                          styleTextButton={{color: '#e68a00', fontSize:'15px', fontWeight:'600', fontFamily:'Oswald'}}
                      >

                      </ButtonComponent>
                  </div>
            </Col>
        </Row>

        <Row style={{padding:'16px', backgroundColor:'#fff', borderRadius:'10px', marginTop:'20px', flexWrap:'nowrap'}}>
            <Col span={10}>
                <WrapperInfo>
                  <WrapperHeadingInfo>
                      <h4 style={{margin:'0px'}}>Details</h4>
                  </WrapperHeadingInfo>

                  <div style={{display:'flex', flexDirection:'column'}}>
                      <WrapperRow>
                          <WrapperDeppRow>
                              <StyleSpan1>Category</StyleSpan1>  
                              <StyleSpan2>
                                  Action, Adventure , Comedy, Drama,..
                              </StyleSpan2>
                          </WrapperDeppRow>
                      </WrapperRow>
                  </div>

                  <div style={{display:'flex', flexDirection:'column'}}>
                      <WrapperRow>
                          <WrapperDeppRow>
                              <StyleSpan1>Author</StyleSpan1>  
                              <StyleSpan2>
                                  Oda Eiichiro
                              </StyleSpan2>
                          </WrapperDeppRow>
                      </WrapperRow>
                  </div>

                  <div style={{display:'flex', flexDirection:'column'}}>
                      <WrapperRow>
                          <WrapperDeppRow>
                              <StyleSpan1>Publisher</StyleSpan1>  
                              <StyleSpan2>
                                  Weekly Shonen Jump
                              </StyleSpan2>
                          </WrapperDeppRow>
                      </WrapperRow>
                  </div>

                  <div style={{display:'flex', flexDirection:'column'}}>
                      <WrapperRow>
                          <WrapperDeppRow>
                              <StyleSpan1>Publication date</StyleSpan1>  
                              <StyleSpan2>                   
                                  2023-10-23 00:00:00
                              </StyleSpan2>
                          </WrapperDeppRow>
                      </WrapperRow>
                  </div>

                  <div style={{display:'flex', flexDirection:'column'}}>
                      <WrapperRow>
                          <WrapperDeppRow>
                              <StyleSpan1>Size</StyleSpan1>  
                              <StyleSpan2>        
                                  11,3x17,6cm
                              </StyleSpan2>
                          </WrapperDeppRow>
                      </WrapperRow>
                  </div>

                  <div style={{display:'flex', flexDirection:'column'}}>
                      <WrapperRow>
                          <WrapperDeppRow>
                              <StyleSpan1>Number of pages</StyleSpan1>  
                              <StyleSpan2>
                                  208
                              </StyleSpan2>
                          </WrapperDeppRow>
                      </WrapperRow>
                  </div>

                  
                </WrapperInfo>
            </Col>
            
        
              <Divider/>

            
              
            <Col span={14}>
                <WrapperInfo >
                    <WrapperHeadingInfo>Description</WrapperHeadingInfo>
                    
                  <WrapperTextDes>
                      <StyleTextDes>
                        "One Piece" is an iconic Japanese manga series created by Eiichiro Oda. 
                        The story revolves around the exciting adventures of Monkey D. Luffy, 
                        a young and ambitious pirate with a unique ability gained from consuming the Gum-Gum Fruit. 
                        Luffy's ultimate goal is to become the Pirate King by finding the legendary treasure known as One Piece.
                         To achieve this dream, he embarks on an epic journey across the Grand Line, 
                         assembling a diverse and loyal crew known as the Straw Hat Pirates. 
                         This manga is renowned for its perfect blend of humor, intense action, 
                         and profound themes of friendship and unwavering determination. 
                         It has garnered a massive global fanbase and holds the record for being one 
                         of the longest-running and most beloved manga series worldwide.
                      </StyleTextDes>
                     <StyleTextDes>
                      The world of "One Piece" is a vibrant and intriguing universe, 
                      filled with mystical islands, mythical creatures, and powerful foes. 
                      Luffy and his crew navigate treacherous waters, encountering other pirates, 
                      marines, and revolutionaries along the way. As they sail through uncharted territories, 
                      they strive to leave their mark in history while uncovering the mysteries of the Void Century, 
                      the world's true history, and the enigmatic abilities of the Devil Fruits. 
                      "One Piece" is a captivating tale that has resonated with readers of all ages, 
                      capturing the essence of adventure and the pursuit of one's dreams. 
                      It's a testament to the power of storytelling and the enduring appeal 
                      of well-crafted characters and their remarkable journeys.
                      </StyleTextDes> 
                    </WrapperTextDes>
                </WrapperInfo>
            </Col>
        </Row>
    </>
        
  )
}

export default ProductDetailComponent
