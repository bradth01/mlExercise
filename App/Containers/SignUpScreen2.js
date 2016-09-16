import React from 'react'
import ReactNative, {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native'
import Styles from './Styles/LoginScreenStyle'
import {Images, Metrics} from '../Themes'
import { createAnimatableComponent } from 'react-native-animatable';

const ScrollView = createAnimatableComponent(ReactNative.ScrollView);

class SignUpScreen2 extends React.Component {

  constructor (props) {
    super(props)
    this.formObj = {      
      userId: this.props.userId,
      screenId: this.props.screenId,
      email: null
    }
  }

  handleChangeEmail = (text) => {
    this.formObj.email = text
  }

  handlePressNext = () => {
    this.props.handlePressNext(this.formObj)
  }

  render () {
    // const { email } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    return (
      <ScrollView 
        animation='fadeIn'
        duration={1250}
        contentContainerStyle={{justifyContent: 'center'}} style={Styles.container}>
        <Image source={Images.logo} style={[Styles.topLogo, { width: Metrics.screenWidth }]} />
        <View style={Styles.form}>
          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>Email</Text>
            <TextInput
              ref='email'
              style={textInputStyle}
              // value={email}
              editable={editable}
              keyboardType='email-address'
              returnKeyType='next'
              onChangeText={this.handleChangeEmail}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.firstName.focus()}
              placeholder='Enter Email Address' />
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

export default SignUpScreen2