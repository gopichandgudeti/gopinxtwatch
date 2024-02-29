import {Component} from 'react'

import {
  SideBarContainer,
  OptionsListContainer,
  OptionListItem,
  Option,
  SideBarBtmSection,
  ContactUsText,
  Description,
  ContactUsContainer,
  IconImg,
  LinkItem,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

class SideBar extends Component {
  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkModeOn, activeTab, onChangeActiveTab} = value

          const onClickHomeTab = () => {
            onChangeActiveTab('HOME')
          }

          const onClickTrendingTab = () => {
            onChangeActiveTab('TRENDING')
          }

          const onClickGammingTab = () => {
            onChangeActiveTab('GAMING')
          }

          const onClickSavedVideosTab = () => {
            onChangeActiveTab('SAVED VIDEOS')
          }

          return (
            <SideBarContainer bgColor={isDarkModeOn ? '#000000' : '#ffffff'}>
              <OptionsListContainer>
                <OptionListItem
                  bgColor={activeTab === 'HOME' ? '#475569' : 'transparent'}
                >
                  <LinkItem to="/" onClick={onClickHomeTab}>
                    <Option
                      fontWeight={activeTab === 'HOME' ? 'bold' : 'normal'}
                      fontColor={isDarkModeOn ? '#ffffff' : '#000000'}
                    >
                      Home
                    </Option>
                  </LinkItem>
                </OptionListItem>

                <OptionListItem
                  bgColor={activeTab === 'TRENDING' ? '#475569' : 'transparent'}
                >
                  <LinkItem to="/trending" onClick={onClickTrendingTab}>
                    <Option
                      fontWeight={activeTab === 'TRENDING' ? 'bold' : 'normal'}
                      fontColor={isDarkModeOn ? '#ffffff' : '#000000'}
                    >
                      Trending
                    </Option>
                  </LinkItem>
                </OptionListItem>

                <OptionListItem
                  onClick={onClickGammingTab}
                  bgColor={activeTab === 'GAMING' ? '#475569' : 'transparent'}
                >
                  <LinkItem to="/gaming">
                    <Option
                      fontWeight={activeTab === 'GAMING' ? 'bold' : 'normal'}
                      fontColor={isDarkModeOn ? '#ffffff' : '#000000'}
                    >
                      Gaming
                    </Option>
                  </LinkItem>
                </OptionListItem>

                <OptionListItem
                  bgColor={
                    activeTab === 'SAVED VIDEOS' ? '#475569' : 'transparent'
                  }
                >
                  <LinkItem onClick={onClickSavedVideosTab}>
                    <Option
                      fontWeight={
                        activeTab === 'SAVED VIDEOS' ? 'bold' : 'normal'
                      }
                      fontColor={isDarkModeOn ? '#ffffff' : '#000000'}
                    >
                      Saved Videos
                    </Option>
                  </LinkItem>
                </OptionListItem>
              </OptionsListContainer>
              <SideBarBtmSection>
                <ContactUsText color={isDarkModeOn ? '#ffffff' : '#313131'}>
                  CONTACT US
                </ContactUsText>
                <ContactUsContainer>
                  <IconImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <IconImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactUsContainer>
                <Description color={isDarkModeOn ? '#ffffff' : '#313131'}>
                  Enjoy! Now to see your <br />
                  channels and <br />
                  recommendations!
                </Description>
              </SideBarBtmSection>
            </SideBarContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default SideBar
