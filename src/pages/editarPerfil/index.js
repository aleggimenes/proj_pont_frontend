import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input'
import colors from '../../styles/colors';
import { Container, Form1, Form2, InputContainer, Card } from './styles';
import { Image } from '../../components/Image/styles'
import { AiFillEye } from "react-icons/ai"
import img from '../../assets/home.jpg';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import InputMask from 'react-input-mask';


const { darkBlue, white } = colors
const Edit = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState('')
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

    useEffect(() => {
        (async () => {
            const user = JSON.parse(await localStorage.getItem('user'));
            setUser(user);
            setNome(user.nome);
            setEmail(user.email);
            setPais(user.pais)
            setEstado(user.estado)
            setMunicipio(user.municipio)
            setCep(user.cep)
            setRua(user.rua)
            setComplemento(user.complemento)
            setPis(user.pis)
            setNumero(user.numero)
            setPassword(user.password);
            setCpf(user.cpf);
        })();
    }, []);

    function validaEmail(email) {
        const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase());
    }
    async function editar() {
        try {
            let id = user.id
            const response = await api.put('/users/' + id, {
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
            const { usuario } = response.data;
            await localStorage.setItem('user', JSON.stringify(usuario));
            window.alert('Alterado com sucesso');
            navigate('/logado');
        } catch (response) {
            window.alert('Verifique todos os campos');
            console.log(response);
        }
    }

    return (
        <>
            <Container>
                <Form1>
              

                    <Input labelColor={white} label="Nome" name="nome" placeholder="nome" placeholderColor="#b3b3b3"  onChange={({ target }) => setNome(target.value)}>
                    </Input>
                    <Input labelColor={white} label="Email" name="email" placeholder="email"  onBlur={() =>
                        validaEmail(email) === true
                          ? console.log('')
                          : window.alert('Digite um email válido')
                      }
                    placeholderColor="#b3b3b3"
                    onChange={({ target }) => setEmail(target.value)}>
                    </Input>
                    <Input labelColor={white} label="País" name="país" placeholder="país" placeholderColor="#b3b3b3"   onChange={({ target }) => setPais(target.value)}>
                    </Input>
                    <Input labelColor={white} label="Estado" name="estado" placeholder="estado" placeholderColor="#b3b3b3"  onChange={({ target }) => setEstado(target.value)}>
                    </Input>
                    <Input labelColor={white} label="Município" name="município" placeholder="município" placeholderColor="#b3b3b3"  onChange={({ target }) => setMunicipio(target.value)}>
                    </Input>
                    <Input labelColor={white} mask="99.999-999"label="CEP" name="cep" placeholder="cep" placeholderColor="#b3b3b3"  onChange={({ target }) => setCep(target.value)}>
                    </Input>
                    <Input labelColor={white} label="Rua" name="rua" placeholder="rua" placeholderColor="#b3b3b3" onChange={({ target }) => setRua(target.value)}>
                    </Input>
                    <Input labelColor={white} label="Número" name="número" placeholder="número" placeholderColor="#b3b3b3"  onChange={({ target }) => setNumero(target.value)}>
                    </Input>
                    <Input labelColor={white} label="Complemento" name="complemento" placeholder="complemento" placeholderColor="#b3b3b3"  onChange={({ target }) => setComplemento(target.value)}>
                    </Input>
                    <Input labelColor={white} label="CPF" mask="999.999.999-99"name="CPF" placeholder="cpf" placeholderColor="#b3b3b3" onChange={({ target }) => setCpf(target.value)}>
                    </Input>
                    <Input labelColor={white} label="PIS" mask="999.99999.99-99"name="PIS" placeholder="pis" placeholderColor="#b3b3b3" onChange={({ target }) => setPis(target.value)}>
                    </Input>
                    <Input labelColor={white} label="Senha" name="senha" placeholder="senha" type="password" placeholderColor="#b3b3b3" onChange={({ target }) => setPassword(target.value)}>
                    </Input>
                    <Button
                    onClick={() => editar()}>
                        Salvar Alterações
                    </Button>
                </Form1>
            </Container>
            <Outlet />
        </>
    )
}

export default Edit;