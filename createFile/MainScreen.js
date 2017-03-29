/**
 * Created by Liulin on 2017/3/28.
 */
import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import FooterTabsExample from './footer'

export default class MainExample extends Component {
	static navigationOptions = {
		title: 'APPs',
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Content>
					<Text>第一页</Text>
				</Content>
				<FooterTabsExample name={navigate}/>
			</Container>
		);
	}
}
