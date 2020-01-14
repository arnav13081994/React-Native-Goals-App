import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";


export default function App() {

	const [goalList, updateGoalList] = useState([]);

	const addGoalHandler = (goalAdded) => {
		//    Create a new Text element and append to the view
		Alert.alert(`Goal added!`);
		updateGoalList([...goalList, goalAdded]);

		// TODO Return focus back to the input field
	};

	const deleteGoalHandler = ( goaltobedeleted ) => {

		return updateGoalList(goalList.filter( (item) => {
					return item !== goaltobedeleted;
				}
			)
		);
	};

	return (
		<View style={styles.screen}>
			{/* Added a custom components for handling GoalInputs */}
			<GoalInput onAddGoal={addGoalHandler}/>

			<View style={styles.GoalList}>
				<Text> List of Goals:</Text>
				<FlatList data={goalList}
				          style={{contentContainerStyle: 'flex-start', width: '100%'}}
				          ListEmptyComponent={ () => {
					            return (
						          <View style={{alignItems: 'center', flex: 1, marginVertical: '45%'}}>
							          <Text style={{color: 'green'}} >Add a goal, bro!</Text>
						          </View>
					            )
				            }
				          }
				          renderItem={(item) => <GoalItem value={item.item} onDelete={ () => deleteGoalHandler(item.item) }   />}
					// Added a custom component for rendering Goal Items
				/>

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
		GoalList: {
			flex: 5,
			alignItems: 'center',
		},
	}
);
