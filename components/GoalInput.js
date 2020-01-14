import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from "react-native";





const GoalInput = props => {

	const [goal, updateGoal] = useState("");
	const goalInputHandler = (newGoal) => {
		updateGoal(newGoal)
	};


	return (
		<View style={styles.GoalInput}>

			<TextInput style={{height: 40, borderBottomColor: 'black', borderBottomWidth: 1, width: '80%'}}
			           value={goal}
			           placeholder='  Enter new goal! '
			           onChangeText={goalInputHandler}
			           onSubmitEditing={ () => {
			           	    updateGoal("");
			           	    return props.onAddGoal(goal);

			                }

			           }
			/>

			<Button
				title='+'
				onPress={ () => props.onAddGoal(goal) }
			/>

		</View>
	)

};


const styles = StyleSheet.create({
	GoalInput: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
});

export default GoalInput;
