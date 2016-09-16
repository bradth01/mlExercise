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

class SignUpScreen3 extends React.Component {

  constructor (props) {
    super(props)
    this.formObj = {
      userId: this.props.userId,
      screenId: this.props.screenId,
      address: null,
      city: null,
      state: null,
      zipCode: null,
      completed: true
    }
  }

  handleChangeAddress = (text) => {
    this.formObj.address = text
  }

  handleChangeCity = (text) => {
    this.formObj.city = text
  }

  handleChangeState = (text) => {
    this.formObj.state = text
  }

  handleChangeZipCode = (text) => {
    this.formObj.zipCode = text
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
            <Text style={Styles.rowLabel}>Street Address</Text>
            <TextInput
              ref='address'
              style={textInputStyle}
              // value={firstName}
              editable={editable}
              keyboardType='default'
              returnKeyType='next'
              onChangeText={this.handleChangeAddress}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.firstName.focus()}
              placeholder='Enter Address' />
          </View>

          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>City</Text>
            <TextInput
              ref='city'
              style={textInputStyle}
              // value={lastName}
              editable={editable}
              keyboardType='default'
              returnKeyType='go'
              onChangeText={this.handleChangeCity}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.firstName.focus()}
              placeholder='Enter City' />
          </View>

          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>State</Text>
            <TextInput
              ref='state'
              style={textInputStyle}
              // value={lastName}
              editable={editable}
              keyboardType='default'
              returnKeyType='go'
              onChangeText={this.handleChangeState}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.firstName.focus()}
              placeholder='Enter State' />
          </View>

          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>Zip Code</Text>
            <TextInput
              ref='zipCode'
              style={textInputStyle}
              // value={lastName}
              editable={editable}
              keyboardType='numeric'
              returnKeyType='go'
              onChangeText={this.handleChangeZipCode}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.firstName.focus()}
              placeholder='Enter Zip Code' />
          </View>

          <View style={[Styles.loginRow]}>
            <TouchableOpacity style={Styles.loginButtonWrapper} 
              onPress={this.handlePressNext}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>Finish</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    )
  }

}

export default SignUpScreen3