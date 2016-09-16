import React from 'react'
import ReactNative, {
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import {Images, Metrics} from '../Themes'
import { createAnimatableComponent, Image, Text, View } from 'react-native-animatable';

const ScrollView = createAnimatableComponent(ReactNative.ScrollView);

class SignUpScreen4 extends React.Component {

  constructor (props) {
    super(props)
    this.formObj = {      
      userId: this.props.userId,
      screenId: this.props.screenId,
      completed: true
    }
  }

  handlePressNext = () => {
    this.props.handlePressNext(this.formObj)
  }

  render () {
    return (
      <ScrollView 
        animation='fadeIn'
        duration={1500}
        contentContainerStyle={{justifyContent: 'center'}} style={Styles.container}>
        <Image 
          animation="pulse"
          easing="ease-out"
          duration={3000}
          iterationCount="infinite"
          source={Images.logo} style={[Styles.topLogo, { width: Metrics.screenWidth }]} />
        <View style={Styles.form}>
          <View style={Styles.row}>
            <Text
              animation='fadeIn'
              duration={3000} 
              style={Styles.rowLabelThankYou}>Thank You!</Text>
          </View>

          <View style={[Styles.loginRow]}>
            <TouchableOpacity 
              style={Styles.loginButtonWrapper} 
              onPress={this.handlePressNext}>
              <View 
                animation="bounceInUp"
                duration={2000}
                style={Styles.loginButton}>
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