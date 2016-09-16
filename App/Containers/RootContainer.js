import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MainSignUp from './MainSignUp'
import Loading from '../Components/Loading'
// Styles
import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      userId: null,
      screenId: null
    }
  }

  componentWillMount() {
    return fetch('http://localhost:1337/form-status', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(responseJson => responseJson[0])
    .then(user => this.setState({
      userId: user.id,
      screenId: user.screenId,
      loading: false
    }))
    .catch(error => {console.error(error)})
  }

  render () {
    if (this.state.loading) return (<Loading />) 
    return (
      <View style={styles.applicationView}>
        <MainSignUp 
          screenId={this.state.screenId}
          userId={this.state.userId}
        />
      </View>
    )
  }
}

export default RootContainer;
