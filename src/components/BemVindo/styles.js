import styled from "styled-components";
import colors from '../../styles/colors'
import fonts from '../../styles/fonts';

import { shade } from 'polished';

const { orange, white } = colors;
const { DMsans500 } = fonts;

export const Container = styled.div`
 background-color: ${white};
 justify-content:center;
 align-items:center;
 width: 100vw;
 display:flex;
 position: absolute;
 h1:after{
   content: '';
  display: block;
  width: 90px;
  height: 3px;
  background: ${orange};
  margin: 5px auto 10px auto;
  padding-left: 36px;
 }
`

export const Title = styled.h1`
 color: white;
 text-align:center;
 font-size:30px;
 z-index:1;
`
