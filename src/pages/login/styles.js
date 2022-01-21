import styled from "styled-components";
import Background from '../../assets/home_dark.jpg';
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { Form } from '@unform/web';
const { blue, orange, white } = colors;
const { DMSans700 } = fonts
export const Container = styled.div`
    position: fixed;
    display:flex;
    justify-content: center;
    align-items:flex-start;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat
`
export const Forms = styled(Form)`
    display: flex;
    width: 70%;
    flex-direction: column;
    margin-top: 5px;
    align-items:center;

    span{
        margin-top: 20px;
        font-size:12px;
        color: ${blue}
        ${DMSans700};
    }
`;
export const Title = styled.h1`
    font-size:26px;
    font-family: ${DMSans700};
    color: ${white}
`
export const Fluter = styled.div`
    position: absolute;
    box-shadow: 0 0 1em black;
    width: 100px;
    align-items:center;
    justify-content:center;
    bottom: 53%;
    height: 100px;
    border-radius: 100%;
    background-color: ${orange};
`