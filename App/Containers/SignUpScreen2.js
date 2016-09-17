import React from 'react'
import ReactNative, {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  AlertIOS
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
    let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let OK = re.exec(this.formObj.email);
    if (!OK) {
      AlertIOS.alert('Please enter a valid email address');
    } else{
      this.props.handlePressNext(this.formObj)
    }
  }

  render () {
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
              // ref='email'
              style={Styles.textInput}
              // value={email}
              keyboardType='email-address'
              returnKeyType='next'
              onChangeText={this.handleChangeEmail}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.email.focus()}
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