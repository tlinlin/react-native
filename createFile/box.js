/**
 * Created by Liulin on 2017/3/29.
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class MainExample extends Component {
	constructor(props) {
		super(props);
	}

/*
	onChange=()=>{
		this.props.onClildChange('kkkkkkkkkkkkkkkk子元素传递的值');
	};
*/

	render() {
		return (
			<Content>
				<Text onPress={()=>alert('clicked')}>点击按钮</Text>
			</Content>
		);
	}

}
