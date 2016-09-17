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
    if (!this.formObj.address || !this.formObj.city || !this.formObj.state || !this.formObj.zipCode) {
      AlertIOS.alert('Please enter your full address');
    } else {
      let re = /\d/;
      let streetOK = re.exec(this.formObj.address);
      let cityNotOK = re.exec(this.formObj.city); 
      if (!streetOK) {
        AlertIOS.alert('Please enter a valid street address.');
      } else if (cityNotOK) {
        AlertIOS.alert('Please enter a valid city name.');
      } else if (this.formObj.zipCode.length !== 5){
        AlertIOS.alert('Please enter a valid zip code.');
      } else {
        this.props.handlePressNext(this.formObj)      
      }
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
            <Text style={Styles.rowLabel}>Street Address</Text>
            <TextInput
              // ref='address'
              style={Styles.textInput}
              // value={firstName}          
              keyboardType='default'
              returnKeyType='next'
              onChangeText={this.handleChangeAddress}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.address.focus()}
              placeholder='Enter Address' />
          </View>

          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>City</Text>
            <TextInput
              // ref='city'
              style={Styles.textInput}
              // value={lastName}          
              keyboardType='default'
              returnKeyType='go'
              onChangeText={this.handleChangeCity}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.city.focus()}
              placeholder='Enter City' />
          </View>

          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>State</Text>
            <TextInput
              // ref='state'
              style={Styles.textInput}
              // value={lastName}          
              keyboardType='default'
              returnKeyType='go'
              onChangeText={this.handleChangeState}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.firstName.focus()}
              placeholder='Enter State' />
          </View>

          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>Zip Code</Text>
            <TextInput
              // ref='zipCode'
              style={Styles.textInput}
              // value={lastName}          
              keyboardType='numeric'
              returnKeyType='go'
              onChangeText={this.handleChangeZipCode}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.firstName.focus()}
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