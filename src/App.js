import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import Trending from './components/Trending'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkModeOn: false,
    activeTab: 'HOME',
    savedVideosList: [],
  }

  onChangeMode = () => {
    this.setState(prevState => ({
      isDarkModeOn: !prevState.isDarkModeOn,
    }))
  }

  onChangeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {isDarkModeOn, activeTab} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkModeOn,
          activeTab,
          onChangeMode: this.onChangeMode,
          onChangeActiveTab: this.onChangeActiveTab,
          savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
