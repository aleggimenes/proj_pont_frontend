import React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input'
import colors from '../../styles/colors';
import { Container, Fluter, Forms, Title } from './styles';
import { Image } from '../../components/Image/styles'
import { AiFillEye } from "react-icons/ai"
import img from '../../assets/home.jpg';
const { darkBlue, white } = colors
const Login = () => {
    return (
        <Container>
            <Card>
                <Image src={img} />
                <Fluter><Title>Login</Title></Fluter>
                <Forms>
                    <Input label="Insira seu E-mail / CPF / PIS" name="email" placeholder="e-mail / cpf / pis" placeholderColor="#b3b3b3">
                    </Input>
                    <Input label="Insira sua Senha" name="password" placeholder="senha" type="password" placeholderColor="#b3b3b3">
                    </Input>
                    <Button>
                        Login
                    </Button>
                </Forms>
                <div>

                </div>
            </Card>
        </Container>
    )
}

export default Login;