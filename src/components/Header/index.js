import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'
/*import {FaMoon} from 'react-icons/fa'
import { CiLight } from "react-icons/ci"*/

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavContainer,
  Logo,
  ThemeProfileLogoutContainer,
  ProfileImage,
  LogoutButton,
  PopupBgContainer,
  PopupContainer,
  CancelBtn,
  ConfirmBtn,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkModeOn, onChangeMode, onChangeActiveTab} = value
      const onClickMode = () => {
        onChangeMode()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickLogo = () => {
        onChangeActiveTab('HOME')
      }

      return (
        <NavContainer bgColor={isDarkModeOn ? '#000000' : '#ffffff'}>
          <Link to="/" onClick={onClickLogo}>
            <Logo
              src={
                isDarkModeOn
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
            />
          </Link>
          <ThemeProfileLogoutContainer>
            {isDarkModeOn ? (
              <button type="button" onClick={onClickMode}>
                Light Mode
              </button>
            ) : (
              <button type="button" onClick={onClickMode}>
                Dark Mode
              </button>
            )}
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogoutButton
                  type="button"
                  color={isDarkModeOn ? '#ffffff' : '#3b82f6'}
                  bgColor={isDarkModeOn ? '#ffffff' : '#3b82f6'}
                >
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <PopupBgContainer>
                  <PopupContainer>
                    <div>
                      <p>Are you sure you want to logout?</p>
                    </div>
                    <div>
                      <CancelBtn type="button" onClick={() => close()}>
                        Cancel
                      </CancelBtn>
                      <ConfirmBtn type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmBtn>
                    </div>
                  </PopupContainer>
                </PopupBgContainer>
              )}
            </Popup>
          </ThemeProfileLogoutContainer>
        </NavContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
