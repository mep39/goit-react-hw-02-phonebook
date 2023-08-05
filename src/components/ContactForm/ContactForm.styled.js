import styled from "@emotion/styled";

export const FormStyled = styled.form`
display: flex;
flex-direction: column;
transition: all .2s ease-out;
`
export const InputStyled = styled.input`
background-color: #00000025;
border: solid 1px #c5a16e;
padding: 5px;
margin-bottom: 10px;
color: #f0c588;
letter-spacing: .15em;
&:focus {
    background-color: #ffffff11;
}
transition: all .2s ease-out;
`

export const BtnStyled = styled.button`
text-transform: capitalize;
font-size: 18px;
background-color: #31c6eb8a;
border: solid 1px black;
padding: 5px;
width: 50%;
align-self: center;
&:focus, &:hover, &:active {
    background-color: #31c6ebde;
}
&:active {
    box-shadow: 0 0 2px #f0c588;
}
transition: all .2s ease-out;
`