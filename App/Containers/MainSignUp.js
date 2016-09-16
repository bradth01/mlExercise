import React from 'react'
import SignUpScreen1 from './SignUpScreen1';
import SignUpScreen2 from './SignUpScreen2';
import SignUpScreen3 from './SignUpScreen3';
import SignUpScreen4 from './SignUpScreen4';

class MainSignUp extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      userId: this.props.userId,
      screenId: this.props.screenId,
    }
  }

  handlePressNext = (formObj) => {
    return fetch('http://localhost:1337/form-status', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObj)
    })
    .then(response => response.json())
    .then(responseJson => responseJson.screenId)
    .then(newScreenId => this.setState({
      screenId: newScreenId
    }))
    .catch(error => {console.error(error)})
  }

  render () {
      if (this.state.screenId === 'one') {
        return (
          <SignUpScreen1
            userId={this.state.userId}
            screenId={this.state.screenId}
            handlePressNext={this.handlePressNext}
          />
        )
      } else if (this.state.screenId === 'two') {
        return (
          <SignUpScreen2 
            userId={this.state.userId}
            screenId={this.state.screenId}
            handlePressNext={this.handlePressNext}
          />
        )
      } else if (this.state.screenId === 'three') {
        return (
          <SignUpScreen3 
            userId={this.state.userId}
            screenId={this.state.screenId}
            handlePressNext={this.handlePressNext}
          />
        )
      } else if (this.state.screenId === 'four') {
        return (
          <SignUpScreen4 
            userId={this.state.userId}
            screenId={this.state.screenId}
            handlePressNext={this.handlePressNext}
          />
        )
      }
  }
}

export default MainSignUp