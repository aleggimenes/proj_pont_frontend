import React from 'react';
import Input from '../../components/Input'
import colors from '../../styles/colors';
import { Container, Form1, Button } from './styles';
import { Outlet, Link } from "react-router-dom";
import { Image } from '../../components/Image/styles'
import { AiFillEye } from "react-icons/ai"
import img from '../../assets/home.jpg';
const { darkBlue, white } = colors
const Logado = () => {

    function clear() {
        localStorage.clear();
      }
    return (
        <>
            <Container>
                <Form1>
                    <Link style={{ width: 200 }} to="/editar">
                        <Button>
                            Editar Perfil
                        </Button>
                    </Link>
                    <Link style={{ width: 200 }} to="/">
                        <Button
                        onClick={() => clear()}>
                            Logout
                        </Button>
                    </Link>
                </Form1>
            </Container>
            <Outlet/>
        </>
    )
}

export default Logado;