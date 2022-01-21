import styled from "styled-components";
import Background from '../../assets/home_dark.jpg';
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { Form } from '@unform/web';
const { blue, orange, white, lightGray } = colors;
const { DMSans400, DMSans700 } = fonts;
export const Container = styled.div`
    position: relative;
    display: flex;
    height: 200vh;
    width: 100vw;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    justify-content:center;
    align-items:center;
`
export const Form1 = styled.div`
    margin-top:40px;
    display: flex;
    flex-direction: column;
    width: 320px;
    justify-content:center;
    align-items:center;
`

export const Form2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    justify-content:center;
    align-items:center;
`
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
export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
width: 330px;
margin-top: 50px;
box-shadow: 0 0 3em black;
align-self:center;
background: ${white};
padding-left: 40px 0px;

> div {
    display: flex;
    color: ${blue}
    ${DMSans400}

    margin: 20px 65px;

    > a {
        ${DMSans700};
        text-decoration: none;
        color: ${lightGray};
    }
}
a {
    ${DMSans700};
    text-decoration: none;
    color: ${lightGray};
}

span {
    margin-top: 0px;
    font-size: 25px;
}

`