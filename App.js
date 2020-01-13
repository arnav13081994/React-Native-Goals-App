import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [text, updateText] = useState("Click to update text");
  const [count, updateCount] = useState(1);

  return (
    <View style={styles.container}>

      <Button title={ text }
        onPress={ () => {
                updateCount( count + 1 );
                updateText("UPDATED TEXT " + count + " times");
            }
        }

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
