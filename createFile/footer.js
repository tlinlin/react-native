/**
 * Created by Liulin on 2017/3/28.
 */
import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsExample extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
				<Footer>
					<FooterTab>
						<Button onPress={() => navigate('Main', { name: 'x' })}>
							<Icon name="apps" />
							<Text>Apps</Text>
						</Button>
						<Button onPress={() => navigate('Main', { name: 'x' })}>
							<Icon name="camera" />
							<Text>Camera</Text>
						</Button>
						<Button onPress={() => navigate('Main', { name: 'x' })} active>
							<Icon active name="navigate" />
							<Text>Navigate</Text>
						</Button>
						<Button onPress={() => navigate('Main', { name: 'x' })}>
							<Icon name="person" />
							<Text>Contact</Text>
						</Button>
					</FooterTab>
				</Footer>
		);
	}
}
