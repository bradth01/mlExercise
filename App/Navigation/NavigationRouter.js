import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import SignUpScreen1 from '../Containers/SignUpScreen1'
import SignUpScreen2 from '../Containers/SignUpScreen2'
import SignUpScreen3 from '../Containers/SignUpScreen3'
import SignUpScreen4 from '../Containers/SignUpScreen4'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
          <Scene initial key='one' component={SignUpScreen1} title='Sign Up 1' hideNavBar />
          <Scene key='two' component={SignUpScreen2} title='Sign Up 2' hideNavBar />
          <Scene key='three' component={SignUpScreen3} title='Sign Up 3' hideNavBar />
          <Scene key='done' component={SignUpScreen4} title='Sign Up 4' hideNavBar />
      </Router>
    )
  }
}

export default NavigationRouter
