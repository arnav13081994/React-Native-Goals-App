import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";


const GoalItem = props => {
	return (
		<TouchableOpacity  onPress={props.onDelete}>
			<View style={styles.GoalListItem}>
				<Text>
					{props.value}
				</Text>
			</View>
		</TouchableOpacity>
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