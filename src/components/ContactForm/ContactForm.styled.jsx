import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
margin-bottom: 24px;

`
export const Label = styled.label`
display: flex;
flex-direction: column;
gap:10px;
margin-left: auto;
margin-right: auto;
margin-bottom: 16px;
`

export const Input = styled.input`
width: 350px;
height: 30px;
outline: 1px solid #999999;
font-size: 20px;
`


export const AddButton = styled.button`
width: 200px;
height: 50px;
margin: 0 auto;
font-size: 24px;
background-color: #CFF2C9;
margin-top: 12px;

:hover {background-color: #698C64;
color: white;}
`