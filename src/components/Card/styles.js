import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
const { white, blue, lightGray } = colors;
const { DMSans400, DMSans700 } = fonts
export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
width: 350px;
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