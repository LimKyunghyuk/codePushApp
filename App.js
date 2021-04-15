import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import codePush from 'react-native-code-push';

class App extends Component {
	render() {
		return (
			<View style={styles.mainView}>
				<Text style={styles.mainfont}>Mobile Meet</Text>
        <Text style={styles.version}>8.0</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#002F70'
	},
  mainfont: {
		fontSize: 30,
    color : '#FFFFFF'
	},
  version: {
		fontSize: 15,
    color : '#FFFFFF'
	}
});

const codePushOptions = {
	checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
}
export default codePush(codePushOptions)(App)