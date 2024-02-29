import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:${props => props.bgColor};
    height:100%;
    width:300px;
    padding:0px; 
    justify-content:space-between;
`

export const OptionsListContainer = styled.ul`
    display:flex;
    flex-direction:column;
    list-style-type:none;
    padding-left:0px;
    margin-top:0px;
    
`

export const OptionListItem = styled.li`
    display:flex;
    align-items:center;
    padding:0px;
    width:100%;
    height:40px;
    background-color: ${props => props.bgColor};
`

export const Option = styled.p`
    font-family:'Roboto'
    margin-top:0px;
    border:none;
    cursor:pointer;
    background-color:transparent;
    font-weight:${props => props.fontWeight};
    color:${props => props.fontColor};
    text-decoration:none;
`

export const SideBarBtmSection = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:10px;
`

export const ContactUsText = styled.p`
    font-size:20px;
    font-weight:500;
    color:${props => props.color}
`

export const Description = styled.p`
    font-size:15px;
    font-weight:500;
    color:${props => props.color}
`

export const ContactUsContainer = styled.div`
    display:flex;
    align-items:center;
`

export const IconImg = styled.img`
    height:30px;
    padding-right:10px;
`

export const LinkItem = styled(Link)`
    display:flex;
    padding-left:10px;
    width:100%;
    height:100%;
    text-decoration:none;
    align-items:center;
`
