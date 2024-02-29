import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkModeOn: false,
  savedVideos: [],
  onChangeMode: () => {},
  onChangeActiveTab: () => {},
  activeTab: '',
})

export default ThemeAndVideoContext
