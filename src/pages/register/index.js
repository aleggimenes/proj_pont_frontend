import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input'
import colors from '../../styles/colors';
import { Container, Form1, Form2, InputContainer, Card } from './styles';
import { Image } from '../../components/Image/styles'
import { Outlet, Link } from "react-router-dom";
import img from '../../assets/home.jpg';
import api from '../../services/api'
import { useNavigate } from 'react-router-dom';

const { darkBlue, white } = colors
const Register = () => {
    let navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [pais, setPais] = useState('');
    const [estado, setEstado] = useState('');
    const [município, setMunicipio] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [complemento, setComplemento] = useState('');
    const [pis, setPis] = useState('');
    const [numero, setNumero] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');

    function validaEmail(email) {
        const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase());
    }
    async function registrar() {
            try {
                const response = await api.post('/users', {
                    nome,
                    email,
                    pais,
                    estado,
                    município,
                    cep,
                    rua,
                    complemento,
                    pis,
                    numero,
                    password,
                    cpf,
                });
                window.alert('Cadastro realizado com sucesso');
                navigate('/');
            } catch (response) {
                window.alert('Verifique todos os campos');
                console.log(response);
            }
    }

    return (
        <>
        <Container>
            <Form1>
                <Input
                    labelColor={white}
                    label="Nome"
                    name="nome"
                    placeholder="nome"
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setNome(target.value)}
                >
                </Input>
                <Input
                    labelColor={white}
                    label="Email"
                    name="email"
                    placeholder="email"
                    onBlur={() =>
                        validaEmail(email) === true
                          ? console.log('')
                          : window.alert('Digite um email válido')
                      }
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setEmail(target.value)}
                >
                </Input>
                <Input labelColor={white}
                    label="País"
                    name="país"
                    placeholder="país"
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setPais(target.value)}
                >
                </Input>
                <Input labelColor={white}
                    label="Estado"
                    name="estado"
                    placeholder="estado"
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setEstado(target.value)}>
                </Input>
                <Input labelColor={white}
                    label="Município"
                    name="município"
                    placeholder="município"
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setMunicipio(target.value)}
                >
                </Input>
                <Input labelColor={white}
                    label="CEP"
                    name="cep"
                    placeholder="cep"
                    mask="99.999-999"
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setCep(target.value)}
                >
                </Input>
                <Input labelColor={white}
                    label="Rua"
                    name="rua"
                    placeholder="rua"
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setRua(target.value)}>
                </Input>
                <Input labelColor={white}
                    label="Número"
                    name="número"
                    placeholder="número"
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setNumero(target.value)}>
                </Input>
                <Input labelColor={white}
                    label="Complemento"
                    name="complemento"
                    placeholder="complemento"
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setComplemento(target.value)}>
                </Input>
                <Input labelColor={white}
                    label="CPF"
                    name="CPF"
                    placeholder="cpf"
                    mask="999.999.999-99"
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setCpf(target.value)}>
                </Input>
                <Input labelColor={white}
                    label="PIS"
                    name="PIS"
                    placeholder="pis"
                    mask="999.99999.99-99"
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setPis(target.value)}>
                </Input>
                <Input labelColor={white}
                    label="Senha"
                    name="senha"
                    placeholder="senha"
                    type="password"
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setPassword(target.value)}>
                </Input>
                <Button
                onClick={() => registrar()}>
                    Cadastrar
                </Button>
            </Form1>
        </Container>
        <Outlet />
        </>
    )
}

export default Register;