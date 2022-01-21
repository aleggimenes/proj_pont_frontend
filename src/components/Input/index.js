import React, { useState, useEffect, useCallback, useRef } from 'react'
import { InputContainer } from './styles'
import InputMask from 'react-input-mask';
const Input = ({ label, mask,children, type, color,labelColor, name, placeholderColor, value, onChange, error, onBlur, placeholder }) => {
    return (
        <InputContainer isColor={color}labelColor={labelColor} placeholderColor={placeholderColor}>
            <label  htmlFor={name}>{label}</label>
            <InputMask
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                mask={mask}/>
        </InputContainer>
    )
}
export default Input