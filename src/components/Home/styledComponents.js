import styled from 'styled-components'

export const HomeContainer = styled.div`
    display:flex;
    flex-direction:row;
    height:100vh;
    width:100%;
    overflow:scroll;
`

export const BannerAndVideosContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100vh;
`

export const BannerBgContainer = styled.div`
    display:flex;
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size:cover;
    width:100%;
    padding-left:20px;
    padding-top:10px;
    padding-right:20px;
    padding-bottom:10px;
    height:20%;
    justify-content:space-between;
`

export const AppIconImg = styled.img`
    height:30px;
    width:100px;
`

export const ContentsContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const BannerDescription = styled.p`
    font-size:12px;
    font-family:'Roboto';
    font-weight:500;
`

export const GetItNow = styled.button`
    height:30px;
    width:100px;
    border:2px solid #000000;
    padding:5px;
    font-size:10px;
    font-family:'Roboto';
    font-weight:500;
    background-color:transparent;
`

export const VideosAndSearchContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:80%;
    background-color:${props => props.bgColor}
`

export const SearchBarContainer = styled.div`
    display:flex;
    width:300px;
    height:30px;
    border:1px solid #475569; 
    padding:0px;
    margin-top:10px;
    margin-left:10px;
`

export const SearchInput = styled.input`
    width:250px;
    padding:5px;
    outline:none;
    border:none;
`

export const SearchBtn = styled.button`
    width:50px;
    background-color:#475569;
    outline:none;
    cursor:pointer;
    border:none;
`
export const VideosContainer = styled.div`
    display:flex;
    width:100%;
    overflow:scroll;
    margin-top:10px;
    margin-left:0px;
    align-items:center;
    justify-content:center;
    height:100%;
`

export const BannerCloseBtn = styled.button`
    outline:none;
    padding:0px;
    border:none;
    background-color:transparent;
    cursor:pointer;
`

export const BannerRightContainer = styled.div`
    display:flex;
    align-items:flex-start;
    
`

export const VideosListContainer = styled.ul`
    list-style-type:none;
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
    padding-left:0px;
    height:100%;
    margin-top:10px;
    margin-left:10px;
`
