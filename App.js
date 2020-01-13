import React, { useState } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert, ScrollView} from 'react-native';

export default function App() {

	const [goal, updateGoal] = useState("");
	const [goalList, updateGoalList] = useState([]);

	const goalInputHandler = (newGoal) => {
	    updateGoal(newGoal)
    }
    const addGoalHandler = () => {
	//    Create a new Text element and append to the view
        Alert.alert(`Goal added!` );
        updateGoalList([...goalList, goal]);

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

				<Button title='+' onPress={addGoalHandler}/>

			</View>

			<View style={styles.GoalList}>
				<Text> NEW GOALS:</Text>
				<ScrollView style={{contentContainerStyle: 'flex-start', width: '100%'}}>
                    {
                        goalList.map(
                            (goalItem) => {
                                return (
                                    <View style={styles.GoalListItem}
                                          key={goalItem}>
                                        <Text>
                                            {goalItem}
                                        </Text>
                                    </View>
                                )
                            }
                        )
                    }
				</ScrollView>


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
			flex: 5,
			alignItems: 'center',
		},
		GoalListItem: {
			margin: 10,
            borderColor: 'black',
            borderWidth: 1,
            flex: 1
		}

	}
);
