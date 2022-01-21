import styled, { css } from "styled-components";
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const { white, gray, lightGray, subtitle, orange } = colors;

const { DMSans500 } = fonts;
export const InputContainer = styled.div`
${DMSans500}
  input {
  border: 0px solid black;
  display: block;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  width: 100%;
  transition: 0.2s;
  background-color:
  margin-left: 20px;
  text-align: left;
  margin-bottom: 20px;
  ${(props) => props.isColor &&
    css`
     background-color: ${props.isColor};
     color: ${white}
    `}
  }
  border: 5px;
  border-color: ${orange};
  input:focus,
  input:hover {
  border-color: ${orange};
  box-shadow: 0 0 0 1px ${orange};
}
input::placeholder{ 
    ${(props) => props.placeholderColor &&
    css`
    color: ${props.placeholderColor};
    opacity: 1;   
    `
  }
}
label {
  display: block;
  text-align: left;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
  margin-left: 10px;
  ${(props) => props.labelColor &&
    css`
     color: ${props.labelColor}
    `}
}
`
