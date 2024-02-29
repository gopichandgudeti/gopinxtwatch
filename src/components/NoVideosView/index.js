import {
  NovideosContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosDescription,
  RetryBtn,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const NoVideosView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        const headingColor = isDarkModeOn ? '#ffffff' : '#000000'
        const descriptionColor = isDarkModeOn ? '#00306e' : '#000000'

        return (
          <NovideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading color={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosDescription color={descriptionColor}>
              Try different key words or remove search filter
            </NoVideosDescription>
            <RetryBtn type="button" onClick={onClickRetry}>
              Retry
            </RetryBtn>
          </NovideosContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default NoVideosView
