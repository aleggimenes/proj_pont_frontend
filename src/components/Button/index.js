import React, { useState, useEffect } from 'react'
import { ButtonContainer } from './styles'

const Button = ({children, ...rest}) => (
    <ButtonContainer {...rest}>{children}</ButtonContainer>
)

export default Button