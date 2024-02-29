import styled from 'styled-components'

export const NavContainer = styled.nav`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:center;
    background-color:${props => props.bgColor};
    justify-content:space-between;
    padding:20px;
`

export const Logo = styled.img`
    width:100px;
    height:30px;
`

export const ThemeProfileLogoutContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`

export const ProfileImage = styled.img`
    height:30px;
    width:30px;
`

export const LogoutButton = styled.button`
    width:80px;
    height:35px;
    border: 1px solid #3b82f6;
    border-radius:10px;
    color:${props => props.color};
    border-color:${props => props.bgColor};
    background-color:transparent;
    font-family:"Roboto";
    font-size:10px;
    font-weight:500;
    outline:none;
    cursor:pointer;
    margin-left:10px;
`

export const ThemeImage = styled.img`
    height:20px;
    width:20px;
`

export const PopupContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    background-color:#ffffff;
    border-radius:5px;
    padding:20px;
`

export const PopupBgContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    width:100%;
    background-color:"#000000";
`

export const CancelBtn = styled.button`
    height:30px;
    width:100px;
    border:1px solid;
    border-color:#000000;
    background-color:transparent;
    color:#000000;
    font-size:15px;
    padding-top:5px;
    padding-bottom:5px;
    padding-right:8px;
    padding-left:8px;
    border-radius:5px;
    cursor:pointer;
    outline:none;
`

export const ConfirmBtn = styled.button`
    height:30px;
    width:100px;
    border:none;
    background-color:blue;
    color:#ffffff;
    font-size:15px;
    padding-top:5px;
    padding-bottom:5px;
    padding-right:8px;
    padding-left:8px;
    border-radius:5px;
    cursor:pointer;
    outline:none;
    margin-left:10px;
`
