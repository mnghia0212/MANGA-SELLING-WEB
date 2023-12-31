import React, { useState } from 'react';
import {Input} from 'antd'
import { WrapperInputStyle } from './style';

const InputForm = (props) => {
    const [valueInput, setValueInput] = useState('')
    const {
        placeholder = 'Enter', ...rests
    } = props
  return (
    <div>
       <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests}/>
    </div>
  )
}

export default InputForm
