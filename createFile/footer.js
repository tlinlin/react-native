/**
 * Created by Liulin on 2017/3/28.
 */
import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsExample extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<Footer>
					<FooterTab>
						<Button onPress={() => this.props.onmenu('apps')}>
							<Icon name="apps" />
							<Text>{this.props.name}</Text>
						</Button>
						<Button onPress={() =>this.props.onmenu('camera')}>
							<Icon name="camera" />
							<Text>camera</Text>
						</Button>
						<Button onPress={() => this.props.onmenu('Navigate')} active>
							<Icon active name="Navigate" />
							<Text>Navigate</Text>
						</Button>
						<Button onPress={() => this.props.onmenu('Contact')}>
							<Icon name="person" />
							<Text>Contact</Text>
						</Button>
					</FooterTab>
				</Footer>
		);
	}
}
