import React, { useState, useEffect, useCallback, useRef } from 'react'
import { InputContainer } from './styles'
const Input = ({ label, children, type, color, name, placeholderColor, value, onChange, error, onBlur, placeholder }) => {
    return (
        <InputContainer isColor={color} placeholderColor={placeholderColor}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}/>
        </InputContainer>
    )
}
export default Input