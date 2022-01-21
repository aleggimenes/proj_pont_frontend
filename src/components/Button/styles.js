import styled from "styled-components";
import colors from '../../styles/colors'
import fonts from '../../styles/fonts';

import { shade } from 'polished';

const { orange, white } = colors;
const { DMsans500 } = fonts;

export const ButtonContainer = styled.button`
 background-color: ${orange};
 color: ${(props) => (props.color ? props.color : white)};

 width: 100%;
 height: 56px;
 margin-bottom:10px;
 
 border: 0;
 margin-top: 5px;
 
 transition: background-color: 0.2s;
 cursor: pointer;
 ${DMsans500};
 
 &:hover{
    background-color: ${shade(0.1, orange)};
 }

`
export const Title = styled.h1`
 background-color: ${orange};
color: black;


`