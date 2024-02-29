import styled from 'styled-components'

export const NovideosContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const NoVideosImg = styled.img`
    height:300px;
    width:300px;
`

export const NoVideosHeading = styled.h1`
    font-family:'Roboto';
    font-size:20px;
    color:${props => props.color}
`

export const NoVideosDescription = styled.p`
    font-family:'Roboto';
    font-size:15px;
    font-weight:500;
    color:${props => props.color}
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
