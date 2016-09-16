
'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
import {Images, Metrics} from '../Themes';
import Styles from '../Containers/Styles/LoginScreenStyle';
import { createAnimatableComponent, Image } from 'react-native-animatable';

const ScrollView = createAnimatableComponent(ReactNative.ScrollView);

export default class Loading extends Component {
    render() {
        return (
            <ScrollView 
                contentContainerStyle={{justifyContent: 'center'}} style={Styles.loadingContainer}>
                <Image 
                    source={Images.logo} 
                    style={[Styles.topLogo, { width: Metrics.screenWidth }]}
                    animation="pulse"
                    easing="ease-in-out"
                    iterationCount="infinite"
                />
            </ScrollView> 
        );
    } 
}
