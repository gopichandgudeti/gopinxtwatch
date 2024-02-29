import styled from 'styled-components'

export const FailureViewContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const FailureViewHeading = styled.h1`
    font-family:'Roboto';
    font-size:20px;
    color:${props => props.color}
`

export const FailureViewDescription = styled.p`
    font-family:'Roboto';
    font-size:15px;
    font-weight:500;
    color:${props => props.color}
`

export const FailureViewImage = styled.img`
    height:300px;
    width:300px;
`

export const RetryBtn = styled.button`
    height:30px;
    width:60px;
    background-color:blue;
    border:none;
    outline:none;
    cursor:pointer;
    color:#ffffff;
`
