import styled from "@emotion/styled";

export const BtnStyled = styled.button`
background-color: transparent;
border: none;
&:hover {
    text-shadow: 0 0 5px #31c6eb8a;
}
&:active {
    text-shadow: 0 0 5px #f0c588;
}
transition: all .2s ease-out;
`

export const ItemStyled = styled.li`
display: flex;
justify-content: space-between;
border-bottom: dotted .1px;
`

export const NameStyled = styled.span`
margin-right: 5px;
font-weight: 700;
font-size: 18px;
letter-spacing: .06em;
`