import {Component} from 'react'
import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'

import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {FaRegSave, FaSave} from 'react-icons/fa'

import {
  VideoDetailsBgContainer,
  VideoDetailsContainer,
  VideoPlayerAndDetailsContainer,
  VideoTitle,
  ViewAndImpressionsContainer,
  ViewsDetailContainer,
  ViewsText,
  PublishedText,
  IconsContainer,
  Button,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedvideoItemDetailsList = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: formattedvideoItemDetailsList,
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

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderSuccessView = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {videoDetails, isLiked, isDisliked, isSaved} = this.state
        const {isDarkModeOn} = value

        const {id} = videoDetails

        const onClickUnlikeBtn = () => {
          this.setState(prevState => ({
            isDisliked: !prevState.isDisliked,
            isLiked: false,
          }))
        }

        const onClickLikeBtn = () => {
          this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            isDisliked: false,
          }))
        }

        const onClickSaveBtn = () => {
          this.setState(prevState => ({isSaved: !prevState.isSaved}))
        }

        return (
          <VideoPlayerAndDetailsContainer>
            <ReactPlayer
              url={videoDetails.videoUrl}
              controls
              width="100%"
              height="500px"
            />
            <VideoTitle>{videoDetails.title}</VideoTitle>
            <ViewAndImpressionsContainer>
              <ViewsDetailContainer>
                <ViewsText>{videoDetails.viewCount} views</ViewsText>
                <hr width="5px" />
                <PublishedText>{videoDetails.publishedAt}</PublishedText>
              </ViewsDetailContainer>
              <IconsContainer>
                <Button
                  color={isLiked ? '#3b82f6' : '#94a3b8'}
                  onClick={onClickLikeBtn}
                >
                  {isLiked ? <AiFillLike /> : <BiLike />} Like
                </Button>

                <Button
                  color={isDisliked ? '#3b82f6' : '#94a3b8'}
                  onClick={onClickUnlikeBtn}
                >
                  {isDisliked ? <AiFillDislike /> : <BiDislike />} Unlike
                </Button>

                <Button
                  color={isSaved ? '#3b82f6' : '#94a3b8'}
                  onClick={onClickSaveBtn}
                >
                  {isSaved ? <FaSave /> : <FaRegSave />} Save
                </Button>
              </IconsContainer>
            </ViewAndImpressionsContainer>
          </VideoPlayerAndDetailsContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  renderVideoDetailsView = () => {
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
              <VideoDetailsBgContainer>
                <SideBar />
                <VideoDetailsContainer>
                  {this.renderVideoDetailsView()}
                </VideoDetailsContainer>
              </VideoDetailsBgContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoItemDetails
