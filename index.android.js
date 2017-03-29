/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ActivityIndicator
} from 'react-native';
import {
	StackNavigator,
} from 'react-navigation';
import MainScreen from './createFile/MainScreen';
import ProfileScreen from './createFile/ProfileScreen'

const App = StackNavigator({
	Main: {
		screen: MainScreen
	},
	Profile: {
		screen: ProfileScreen
	},
});


AppRegistry.registerComponent('AwesomeProject', () => App);
