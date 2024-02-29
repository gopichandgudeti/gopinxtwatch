import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  TrendingBgContainer,
  SideBarTrendingVideosBgContainer,
  TrendingHeader,
  Heading,
  TendingVideosListContainer,
  TendingVideosListItem,
  TendingVideosLink,
  ThumbnailImg,
  TendingVideosContainer,
  VideoContentContainer,
  VideoTitle,
  ViewCount,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingVideosUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedTrendingVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosList: formattedTrendingVideosList,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  /*onRetry = () => {
    getTrendingVideos()
  }*/

  renderSuccessView = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        const {trendingVideosList} = this.state

        return (
          <TendingVideosContainer
            bgColor={isDarkModeOn ? '#000000' : '#ffffff'}
          >
            <TrendingHeader>
              <Heading>Gaming</Heading>
            </TrendingHeader>
            <TendingVideosListContainer
              bgColor={isDarkModeOn ? '#000000' : '#ffffff'}
            >
              {trendingVideosList.map(each => (
                <TendingVideosListItem key={each.id}>
                  <TendingVideosLink>
                    <ThumbnailImg src={each.thumbnailUrl} />
                    <VideoContentContainer>
                      <VideoTitle color={isDarkModeOn ? '#ffffff' : '#475569'}>
                        {each.title}
                      </VideoTitle>
                      <ViewCount color={isDarkModeOn ? '#616e7c' : '#00306e'}>
                        {each.viewCount} Watching Worldwide
                      </ViewCount>
                    </VideoContentContainer>
                  </TendingVideosLink>
                </TendingVideosListItem>
              ))}
            </TendingVideosListContainer>
          </TendingVideosContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  renderVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkModeOn} = value

          return (
            <>
              <Header />
              <SideBarTrendingVideosBgContainer>
                <SideBar />
                <TrendingBgContainer
                  bgColor={isDarkModeOn ? '#000000' : '#ffffff'}
                >
                  {this.renderVideosView()}
                </TrendingBgContainer>
              </SideBarTrendingVideosBgContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Gaming
