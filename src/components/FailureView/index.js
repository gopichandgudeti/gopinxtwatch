import {
  FailureViewContainer,
  FailureViewHeading,
  FailureViewImage,
  FailureViewDescription,
  RetryBtn,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const FailureView = props => {
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
          <FailureViewContainer>
            <FailureViewImage
              src={
                isDarkModeOn
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
            />
            <FailureViewHeading color={headingColor}>
              Ooops! Somthing Went Wrong
            </FailureViewHeading>
            <FailureViewDescription color={descriptionColor}>
              We are having some trouble to complete your request Please try
              again.
            </FailureViewDescription>
            <RetryBtn type="button" onClick={onClickRetry}>
              Retry
            </RetryBtn>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
