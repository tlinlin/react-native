/**
 * Created by Liulin on 2017/3/28.
 */
import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsExample extends Component {
	render() {
		const navigate = this.props.name;
		console.log(navigate);
		return (
				<Footer>
					<FooterTab>
						<Button onPress={() => navigate('Main')}>
							<Icon name="apps" />
							<Text>Apps</Text>
						</Button>
						<Button onPress={() => navigate('Profile')}>
							<Icon name="camera" />
							<Text>Profile</Text>
						</Button>
						<Button onPress={() => navigate('Main')} active>
							<Icon active name="navigate" />
							<Text>Navigate</Text>
						</Button>
						<Button onPress={() => navigate('Main')}>
							<Icon name="person" />
							<Text>Contact</Text>
						</Button>
					</FooterTab>
				</Footer>
		);
	}
}
