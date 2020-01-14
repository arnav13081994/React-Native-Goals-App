import React from 'react';
import {Text, View, StyleSheet } from "react-native";


const GoalItem = props => {
	return (
		<View style={styles.GoalListItem}>
			<Text>
				{props.value}
			</Text>
		</View>
	)
};


const styles = StyleSheet.create({
			GoalListItem: {
			margin: 10,
            borderColor: 'black',
            borderWidth: 1,
            flex: 1
		}

});



export default GoalItem;