import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native'
import Styles from './Styles/LoginScreenStyle'
import {Images, Metrics} from '../Themes'

class SignUpScreen1 extends React.Component {

  constructor (props) {
    super(props)
    this.formObj = {      
      userId: this.props.userId,
      screenId: this.props.screenId,
      firstName: null,
      lastName: null
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
    .then(formObj => this.setState({
      userId: formObj.id,
    }))
    .catch(error => {console.error(error)})
  }

  handleChangeFirstName = (text) => {
    this.formObj.firstName = text
  }

  handleChangeLastName = (text) => {
    this.formObj.lastName = text
  }

  handlePressNext = () => {
    this.props.handlePressNext(this.formObj)
  }

  render () {
    // const { firstName, lastName } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly

    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={Styles.container}>
        <Image source={Images.logo} style={[Styles.topLogo, { width: Metrics.screenWidth }]} />
        <View style={Styles.form}>
          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>First Name</Text>
            <TextInput
              ref='firstName'
              style={textInputStyle}
              // value={firstName}
              editable={editable}
              keyboardType='default'
              returnKeyType='next'
              onChangeText={this.handleChangeFirstName}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.firstName.focus()}
              placeholder='Enter First Name' />
          </View>

          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>Last Name</Text>
            <TextInput
              ref='lastName'
              style={textInputStyle}
              // value={lastName}
              editable={editable}
              keyboardType='default'
              returnKeyType='go'
              onChangeText={this.handleChangeLastName}
              underlineColorAndroid='transparent'
              onSubmitEditing={this.handlePressNext}
              placeholder='Enter Last Name' />
          </View>

          <View style={[Styles.loginRow]}>
            <TouchableOpacity style={Styles.loginButtonWrapper} 
              onPress={this.handlePressNext}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    )
  }

}

export default SignUpScreen1
