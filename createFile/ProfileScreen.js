/**
 * Created by Liulin on 2017/3/28.
 */
import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import FooterTabsExample from './footer'
export default class ProfileScreen extends React.Component {
	static navigationOptions = {
		title: 'Camera',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
			<Content>
				<Button title="Go to Jane's main"/>
				<Text>Camera</Text>
			</Content>
			<FooterTabsExample name={navigate}/>
			</Container>
		);
	}
}