import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import logo from './logo.png'
import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>连线教育</h1>
        </header>
      </div>
    )
  }
}

export default hot(module)(App)
// export default App
