import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoIosSearch} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'

import Header from '../Header'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import Videos from '../Videos'
import NoVideosView from '../NoVideosView'

import SideBar from '../SideBar'
import VideoItemDetails from '../VideoItemDetails'

import {
  HomeContainer,
  BannerAndVideosContainer,
  BannerBgContainer,
  AppIconImg,
  ContentsContainer,
  BannerDescription,
  GetItNow,
  VideosAndSearchContainer,
  SearchBarContainer,
  SearchInput,
  SearchBtn,
  VideosContainer,
  BannerCloseBtn,
  BannerRightContainer,
  VideosListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    activeOption: 'HOME',
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    serachValue: '',
    videosList: [],
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {serachValue} = this.state
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const videosUrl = `https://apis.ccbp.in/videos/all?search=${serachValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(videosUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const formatedVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profile: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: formatedVideosList,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickOption = id => {
    this.setState({activeOption: id})
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onRetry = () => {
    this.getVideos()
  }

  

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderSuccessView = () => {
    const {videosList} = this.state
    const isVideosAvailable = videosList.length !== 0
    return (
      <>
        {isVideosAvailable ? (
          <VideosListContainer>
            {videosList.map(eachItem => (
              <Videos
                videoDetails={eachItem}
                key={eachItem.id}
              />
            ))}
          </VideosListContainer>
        ) : (
          <NoVideosView onRetry={this.onRetry} />
        )}
      </>
    )
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchIcon = () => {
    const {searchInput} = this.state
    this.setState({serachValue: searchInput}, this.getVideos)
  }

  onEnter = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      this.setState({serachValue: searchInput}, this.getVideos)
    }
  }

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
    const {activeOption, showBanner, searchInput} = this.state

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkModeOn} = value

          return (
            <>
              <Header />
              <HomeContainer>
                <SideBar />
                <BannerAndVideosContainer>
                  {showBanner && (
                    <BannerBgContainer>
                      <ContentsContainer>
                        <AppIconImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                        <BannerDescription>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerDescription>
                        <GetItNow type="button">GET IT NOW</GetItNow>
                      </ContentsContainer>
                      <BannerRightContainer>
                        <BannerCloseBtn
                          data-testid="close"
                          onClick={this.onCloseBanner}
                        >
                          <AiOutlineClose size={25} />
                        </BannerCloseBtn>
                      </BannerRightContainer>
                    </BannerBgContainer>
                  )}

                  <VideosAndSearchContainer
                    data-testid="home"
                    bgColor={isDarkModeOn ? '#181818' : '#f9f9f9'}
                  >
                    <SearchBarContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        onKeyDown={this.onEnter}
                      />
                      <SearchBtn
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onClickSearchIcon}
                      >
                        <IoIosSearch />
                      </SearchBtn>
                    </SearchBarContainer>
                    <VideosContainer>{this.renderVideosView()}</VideosContainer>
                  </VideosAndSearchContainer>
                </BannerAndVideosContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
