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
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import {Images, Metrics} from '../Themes'


class SignUpScreen4 extends React.Component {

  constructor (props) {
    super(props)
    this.formObj = {      
      userId: this.props.userId,
      screenId: this.props.screenId
    }
  }

  handlePressNext = () => {
    this.props.handlePressNext(this.formObj)
  }

  render () {
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={Styles.container}>
        <Image source={Images.logo} style={[Styles.topLogo, { width: Metrics.screenWidth }]} />
        <View style={Styles.form}>
          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>Thank You!</Text>
          </View>

          <View style={[Styles.loginRow]}>
            <TouchableOpacity style={Styles.loginButtonWrapper} 
              onPress={this.handlePressNext}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>Start Over</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    )
  }

}

export default SignUpScreen4