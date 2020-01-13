import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import TextInput from "react-native-web/src/exports/TextInput";

export default function App() {

  const [goal, updateGoal] = useState("");
  // const [count, updateCount] = useState(1);

  return (
    <View style={styles.container1}>
        <View style={styles.container2}>

            <TextInput style={{ height: 40, borderBottomColor: 'black', borderBottomWidth: 1 }}
                       value={ goal }
                       placeholder='  Enter new goal! '
                       onChangeText={ text => {
                               updateGoal(text);
                       }}
                       onSubmitEditing={ (text, eventCount, target) => {
                           // <Text> text </Text>
                           console.log(text);



                       }}
            />

            <Button title='+'
                    onPress={ () => {




                    }}




            />

        </View>

        <View style={styles.container2}>
            <Text> NEW GOAL LIST</Text>



        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
