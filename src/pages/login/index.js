import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input'
import BemVindo from '../../components/BemVindo';
import colors from '../../styles/colors';
import { Container, Fluter, Forms, Title } from './styles';
import { Outlet, Link } from "react-router-dom";
import { Image } from '../../components/Image/styles'
import { AiFillEye } from "react-icons/ai"
import InputMask from 'react-input-mask';

import api from "../../services/api";
import { useNavigate } from 'react-router-dom';
import img from '../../assets/home.jpg';

const { darkBlue, white, orange } = colors

const Login = () => {
    let navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isTrue, setIsTrue] = useState(false);

    async function logar() {
        try {
            const response = await api.post('/sessions', {
                login,
                password,
            });
            console.log(response.data)
            const { user, token } = response.data;
            await localStorage.setItem('token', token);
            await localStorage.setItem('user', JSON.stringify(user));
            navigate('/logado');
        } catch (error) {
            console.log(error)
            window.alert('Credenciais Inválidas')
        }
    }
    function validaEmail(email) {
        const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase());
    }

    return (
        <>
            <BemVindo />
            <Container>
                <Card>
                    <Image src={img} />
                    <Fluter><Title>Login</Title></Fluter>
                    <div style={{ flexDirection: 'row', justifyContent: 'space-beween', alignSelf: 'center' }}>
                        <h3>Logar com cpf</h3>
                        <button onClick={() => setIsTrue(!isTrue)} style={{ marginTop:3,marginLeft:20 ,borderRadius: 100, borderWidth: 2, width: 10, height: 15, backgroundColor: isTrue ? orange : white }}>
                        </button>
                    </div>
                    <Forms>
                        {isTrue ?
                            <Input
                                label="Insira seu E-mail / CPF"
                                name="cpf"
                                placeholder="999.999.999-99"
                                placeholderColor="#b3b3b3"
                                mask="999.999.999-99"
                                onChange={({ target }) => setLogin(target.value)}
                            >
                            </Input>
                            : <Input
                                label="Insira seu E-mail / CPF"
                                name="email"
                                onBlur={() =>
                                    validaEmail(login) === true
                                      ? console.log('')
                                      : window.alert('Digite um email válido')
                                  }
                                placeholder="joao@gmail.com"
                                placeholderColor="#b3b3b3"
                                onChange={({ target }) => setLogin(target.value)}
                            >
                            </Input>}
                        <Input
                            label="Insira sua Senha"
                            name="password"
                            placeholder="senha"
                            type="password"
                            placeholderColor="#b3b3b3"
                            onChange={({ target }) => setPassword(target.value)}>
                        </Input>
                        <Button
                            onClick={() => {
                                logar();
                            }}>
                            Login
                        </Button>
                        <div>
                            Clique para se <a style={{ color: 'blue' }} href={'/register'}>Cadastrar</a>
                        </div>
                    </Forms>
                </Card>
            </Container>
            <Outlet />
        </>
    )
}

export default Login;