import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";


export default function App() {

	const [goalList, updateGoalList] = useState([]);
	const [modalState, updatemodalState] = useState(false);

	const addGoalHandler = (goalAdded) => {
		//    Create a new Text element and append to the view
		updateGoalList([...goalList, {key:Math.random().toString(), value:goalAdded}]);
		// Close the modal window
		updatemodalState(false);
	};

	const deleteGoalHandler = (goaltobedeleted) => {
		return updateGoalList(goalList.filter((item) => item.value !== goaltobedeleted));
	};

	const onCancelHandler = () => updatemodalState(false);

	return (
		<View style={styles.screen}>

			<View style={{flex: 1, justifyContent: 'center'}}>
				<Button title='Add New Goal'
				        onPress={ () => updatemodalState(true) }
				/>
			</View>
			{/* Added a custom components for handling GoalInputs */}
			<GoalInput onAddGoal={addGoalHandler} visible={modalState} onCancel={onCancelHandler} />

			<View style={styles.GoalList}>
				<Text> List of Goals:</Text>
				<FlatList data={goalList}
				          style={{contentContainerStyle: 'flex-start', width: '100%'}}
				          ListEmptyComponent={() => {
					          return (
						          <View style={{alignItems: 'center', flex: 1, marginVertical: '45%'}}>
							          <Text style={{color: 'green'}}>Add a goal, bro!</Text>
						          </View>
					          )
				          }
				          }
				          renderItem={
					          (item) => <GoalItem value={item.item.value}
					                              onDelete={() => deleteGoalHandler(item.item.value)}/>
				          }
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
