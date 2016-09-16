
'use strict';

import React, { Component } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView
} from 'react-native';
import {Images, Metrics} from '../Themes';
import Styles from '../Containers/Styles/LoginScreenStyle';
import * as Animatable from 'react-native-animatable';

export default class Loading extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={Styles.container}>
                <Animatable.Image 
                    source={Images.logo} 
                    style={[Styles.topLogo, { width: Metrics.screenWidth }]}
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                 />
            </ScrollView> 
        );
    } 
}
