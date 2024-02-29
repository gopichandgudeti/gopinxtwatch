import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginPageBgContainer,
  LoginContainer,
  Logo,
  LoginForm,
  InputContainer,
  Label,
  Input,
  ShowpasswordContainer,
  CheckBox,
  ShowpasswordLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMessage: '',
    showErrorMsg: false,
    darkMode: false,
  }

  getLogo = () => {
    const {darkMode} = this.state
    if (darkMode) {
      return 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    }
    return 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
  }

  toShowPassword = () => {
    const {showPassword} = this.state
    if (showPassword) {
      return 'text'
    }
    return 'password'
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChecked = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMessage: errorMsg, showErrorMsg: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    console.log('form submited')
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      darkMode,
      showPassword,
      errorMessage,
      showErrorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginPageBgContainer>
        <LoginContainer>
          <LoginForm onSubmit={this.onSubmitForm}>
            <Logo src={this.getLogo()} alt="wesite logo" />
            <InputContainer>
              <Label htmlFor="userName">USERNAME</Label>
              <Input
                type="text"
                id="userName"
                onChange={this.onChangeUserName}
                value={username}
                placeholder="Username"
              />
            </InputContainer>

            <InputContainer>
              <Label htmlFor="password">PASSWORD</Label>
              <Input
                type={this.toShowPassword()}
                onChange={this.onChangePassword}
                value={password}
                id="password"
                placeholder="Password"
              />
            </InputContainer>

            <ShowpasswordContainer>
              <CheckBox
                type="checkbox"
                onChange={this.onChecked}
                htmlFor="showPassword"
              />
              <ShowpasswordLabel id="showPassword">
                Show Password
              </ShowpasswordLabel>
            </ShowpasswordContainer>

            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <ErrorMessage>*{errorMessage}</ErrorMessage>}
          </LoginForm>
        </LoginContainer>
      </LoginPageBgContainer>
    )
  }
}

export default Login
