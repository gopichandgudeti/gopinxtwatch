import styled from 'styled-components'

export const LoginPageBgContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#ffffff;
    height:100vh;
`

export const LoginContainer = styled.div`
    height:50%;
    width:40%;
    border-radius:10px;
    box-shadow: 0px 10px 10px 0px;
    background-color:#ffffff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:40px;
    padding-bottom:40px;
    padding-left:20px;
    padding-right:20px;
`

export const Logo = styled.img`
    width:150px;
    height:50px;
`

export const LoginForm = styled.form`
    width:90%;
`

export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
`

export const Label = styled.label`
    font-family:"Roboto";
    font-size:15px;
    font-weight:500;
    color:grey;
`

export const Input = styled.input`
    width:100%;
    height:30px;
    border:1px solid grey;
    border-radius:3px;
    padding-top:3px;
    padding-bottom:3px;
    padding-left:5px;
    padding-right:5px;
    margin-top:5px;
`

export const ShowpasswordContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:20px;
`

export const CheckBox = styled.input`
    height:15px;
    width:15px;
    margin-right:10px;
    cursor:pointer;
`

export const ShowpasswordLabel = styled.label`
   font-family:"Roboto";
    font-size:16px;
    font-weight:500;
    color:#000000; 
`

export const LoginButton = styled.button`
    background-color: #3b82f6;
    border-radius:10px;
    margin-top:20px;
    border:0;
    width:100%;
    height:35px;
    color:#ffffff;
    font-weight:500;
    cursor:pointer;
`

export const ErrorMessage = styled.p`
    font-family:"Roboto";
    font-size:16px;
    font-weight:500;
    color:#ff0000;
    padding-top:20px;
`
