import styled from 'styled-components'

export const VideoDetailsBgContainer = styled.div`
    display:flex;
    flex-direction:row;
    height:100vh;
    width:100%;
    overflow:scroll;
`

export const VideoDetailsContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    height:100vh;
    background-color:"#000000";
`

export const VideoPlayerAndDetailsContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    padding:10px;
    background-color:transparent;
`

export const VideoTitle = styled.h1`
    font-family:"Roboto";
    font-size:15px;
`

export const ViewAndImpressionsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
`

export const ViewsDetailContainer = styled.div`
    display:flex;
    align-items:center;
    justify-contents:space-between;
    width:180px;
`

export const PublishedText = styled.p`
    font-family:"Roboto";
    font-size:15px;
`

export const ViewsText = styled.p`
    font-family:"Roboto";
    font-size:15px;
`

export const IconsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
`

export const Button = styled.button`
    background-color:transparent;
    color: ${props => props.color};
    border:none;
    outline:none;
    cursor:pointer;
`
