import {
  VideoListItem,
  ProfileImg,
  VideoThumbnail,
  VideoTitle,
  ChannelName,
  VideoDiscription,
  VideoDiscriptionDetailsContainer,
  ViewCountPublishedAtContainer,
  ViewCount,
  PublishedAt,
  LinkItem,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const Videos = props => {
  const {videoDetails} = props

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        const {id, title, name, profile, thumbnailUrl, viewCount, publishedAt} =
          videoDetails

        return (
          <VideoListItem>
            <LinkItem to={`videos/${id}`}>
              <VideoThumbnail src={thumbnailUrl} />
              <VideoDiscription>
                <ProfileImg src={profile} />
                <VideoDiscriptionDetailsContainer>
                  <VideoTitle color={isDarkModeOn ? '#ffffff' : '#475569'}>
                    {title}
                  </VideoTitle>
                  <ChannelName color={isDarkModeOn ? '#616e7c' : '#00306e'}>
                    {name}
                  </ChannelName>
                  <ViewCountPublishedAtContainer>
                    <ViewCount color={isDarkModeOn ? '#616e7c' : '#00306e'}>
                      {viewCount} .
                    </ViewCount>
                    <PublishedAt color={isDarkModeOn ? '#616e7c' : '#00306e'}>
                      {publishedAt}
                    </PublishedAt>
                  </ViewCountPublishedAtContainer>
                </VideoDiscriptionDetailsContainer>
              </VideoDiscription>
            </LinkItem>
          </VideoListItem>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default Videos
