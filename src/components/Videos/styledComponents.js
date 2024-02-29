import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
    display:flex;
    flex-direction:column;
    width:300px;
    height:400px;
    margin-right:10px;
    margin-bottom:10px;
`

export const VideoThumbnail = styled.img`
    width:100%;
    height:50%;
`

export const VideoDiscription = styled.div`
    display:flex;
    flex-direction:row;
    padding-top:10px;
`

export const ProfileImg = styled.img`
    height:40px;
    width:40px;
`

export const VideoDiscriptionDetailsContainer = styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    margin-left:5px;
`

export const VideoTitle = styled.h1`
    font-family:'Roboto';
    color:${props => props.color};
    font-size:18px;
    font-weight:500;
    margin-top:0px;
`

export const ChannelName = styled.p`
    font-family:'Roboto';
    font-weight:500;
    font-size:15px;
    color:${props => props.color};
    margin-top:0px;
`

export const ViewCountPublishedAtContainer = styled.div`
    display:flex;
    flex-direction:row;
`

export const ViewCount = styled.p`
    font-family:'Roboto';
    font-weight:500;
    font-size:12px;
    color:${props => props.color};
    margin-top:0px;
    margin-right:10px;
`

export const PublishedAt = styled.p`
    font-family:'Roboto';
    font-weight:500;
    font-size:12px;
    color:${props => props.color};
    margin-top:0px;
    margin-right:10px;
`

export const LinkItem = styled(Link)`
    display:flex;
    flex-direction:column;
    padding-left:10px;
    width:100%;
    height:100%;
    text-decoration:none;
    align-items:center;
`
