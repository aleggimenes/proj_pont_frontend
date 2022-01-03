import React from 'react'
import { CardContainer } from './styles'

const Card = ({ children, ...rest }) => {
    return (
        <CardContainer>{children}</CardContainer>
    )
}

export default Card;