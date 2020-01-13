import React, { useState } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';

export default function App() {

	const [goal, updateGoal] = useState("");
	const [goalList, updateGoalList] = useState([]);

	const goalInputHandler = (newGoal) => {
	    updateGoal(newGoal)
    }
    const addGoalHandler = () => {
	//    Create a new Text element and append to the view
        Alert.alert(`Goal added!` );
        goalList.push(goal);
        updateGoalList(goalList);
        console.log(goalList);


    }

	return (
		<View style={styles.screen}>
			<View style={styles.GoalInput}>

				<TextInput style={{height: 40, borderBottomColor: 'black', borderBottomWidth: 1, width: '80%'}}
				           value={goal}
				           placeholder='  Enter new goal! '
				           onChangeText={goalInputHandler}
				           onSubmitEditing={addGoalHandler}
				/>

				<Button title='+'
				        onPress={addGoalHandler}
				/>

			</View>

			<View style={styles.GoalList}>
				<Text> NEW GOALS:</Text>
				<View>

					<Text style={styles.GoalListItem}> GOAL #1</Text>
					<Text style={styles.GoalListItem}> GOAL #2</Text>
					<Text style={styles.GoalListItem}> GOAL #3</Text>

				</View>


			</View>


		</View>
	);
}

const styles = StyleSheet.create(
	{
		screen: {
			flex: 1,
			backgroundColor: '#fff',
		},
		GoalInput: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-evenly',
		},
		GoalList: {
			flex: 3,
			alignItems: 'center',
		},
		GoalListItem: {
			padding: 10

		}

	}
);
