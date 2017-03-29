/**
 * Created by Liulin on 2017/3/28.
 */
import React, { Component } from 'react';
import { Button,View,Text } from 'react-native';
import FooterTabsExample from './footer'
export default class ProfileScreen extends React.Component {
	static navigationOptions = {
		title: 'Camera',
	};
	render() {
		return (
			<View>
				<Button title="Go to Jane's main"/>
				<FooterTabsExample />
				<Text>Camera</Text>
			</View>
		);
	}
}