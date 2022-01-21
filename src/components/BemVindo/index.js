import React, { useState, useEffect } from 'react'
import { Container, Title } from './styles'

const BemVindo = () => {
    const [user_nome, setUserName] = useState('')
    useEffect(() => {
        (async () => {
            const user = JSON?.parse?.(await localStorage?.getItem?.('user'));
            setUserName(user?.nome)
            console.log(user_nome)
        })();
    })

    return (
        <Container>
            {
                user_nome === undefined ?
                    <Title>Olá Visitante</Title>

                    :
                    <Title>Olá {user_nome}</Title>
            }
        </Container>
    )
}

export default BemVindo