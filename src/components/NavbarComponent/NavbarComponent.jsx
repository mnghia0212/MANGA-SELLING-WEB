import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
    const onChange = () => { }
    const renderContent  = (type, options) => {
        switch(type) {
            case'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })

            case'checkbox':
                return (
                    <Checkbox.Group style={{width:'100%', display:'flex', flexDirection:'column', gap:'12px'}} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )

            case'star':
                return options.map((option) => {
                    return (
                        <div>
                            <Rate style={{fontSize:'14px'}} disabled defaultValue={option}/>
                            <span style={{fontSize:'14px', marginLeft:'8px'}}>{`From ${option} stars`}</span>
                        </div>
                        
                    )
                })

            case'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                })

            default:
                return {}
        }
    }
   
    return (
        <div>
            <div>
                <WrapperLabelText>Category</WrapperLabelText>
                <WrapperContent>
                    {renderContent('text',['Best seller', 'Trending comics', 'New comics'])}
                    
                </WrapperContent>
            </div>
          
            <div style={{marginTop:'30px'}}>
                <WrapperLabelText>Filter</WrapperLabelText>

                <WrapperContent>
                    {renderContent('checkbox',[
                        {value: 'a', label: 'Adventure'},
                        {value: 'b', label: 'Action'},
                        {value: 'c', label: 'Drama'},
                        {value: 'd', label: 'Romance'},
                        {value: 'e', label: 'Isekai'},
                        {value: 'f', label: 'Comedy'},
                        {value: 'g', label: 'Fantasy'},
                    ])}
                </WrapperContent>

                <WrapperContent style={{marginTop:'20px'}}>
                    {renderContent('star',[3, 4, 5])}
                </WrapperContent>

                <WrapperContent  style={{marginTop:'30px'}}>
                    {renderContent('price',['Less than 40,000 VND', 'From 40,000 to 100,000', 'More than 100,000 VND'])}
                </WrapperContent>
            </div>
           
        </div>
    )
}

export default NavbarComponent
