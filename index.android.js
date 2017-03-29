/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Text } from 'native-base';
import FooterTabsExample from './createFile/footer'
import Box from './createFile/box'
import MainScreen from './createFile/MainScreen'
import ProfileScreen from './createFile/ProfileScreen'
export default class MainExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
		this.memu = this.memu.bind(this);
	}

	memu(pra) {
//		alert(`${pra}添加文件`);
		this.setState({ name: pra })
		
	}

	render() {
		return (
			<Container>
				{this.state.name === '' ? <Box/> : null}
				{this.state.name === 'apps' ? <MainScreen/> : null}
				{this.state.name === 'camera' ? <ProfileScreen/> : null}
				<FooterTabsExample onmenu={this.memu} name='nameKKKK'/>
			</Container>
		);
	}
}

AppRegistry.registerComponent('AwesomeProject', () => MainExample);
