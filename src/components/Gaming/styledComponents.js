import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarTrendingVideosBgContainer = styled.div`
    display:flex;
    width:100%;
    height:100vh;
`

export const TrendingBgContainer = styled.div`
    display:flex;
    width:80%;
    background-color:${props => props.bgColor};
`

export const TrendingVideosContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:${props => props.bgColor};
    padding-top:10px;
    width:100%;
`

export const TrendingHeader = styled.div`
    display:flex;
    width:100%;
    height:50px;
    background-color: #cccccc;
    padding:20px;
    align-items:center;
`

export const Heading = styled.h1`
    font-size:20px;
    color:#ffffff;
`

export const TendingVideosListContainer = styled.ul`
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
    list-style-type:none;
    padding-left:0px;
    margin:10px;
    overflow:scroll;
    background-color:${props => props.bgColor};
`

export const TendingVideosListItem = styled.li`
    display:flex;
    flex-direction:column;
    width:300px;
    height:400px;
    margin-top:20px;
    margin-bottom:20px;
    margin-right:10px;
`

export const TendingVideosLink = styled(Link)`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    text-decoration:none;
`

export const ThumbnailImg = styled.img`
    height:100%;
    width:100%;
    border-radius:20px;
`

export const TendingVideosContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

export const VideoContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:10px;
    width:100%;
`

export const VideoTitle = styled.h1`
    font-family:'Roboto';
    color:${props => props.color};
    font-size:15px;
    font-weight:500;
    margin-top:0px;
`

export const ViewCount = styled.p`
    font-family:'Roboto';
    font-weight:500;
    font-size:12px;
    color:${props => props.color};
    margin-top:0px;
    margin-right:10px;
`
