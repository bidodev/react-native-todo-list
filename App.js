import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <TextInput placeholder="Course Goal" style={styles.placeholder}/>
        <Button title="Add" />
      </View>
      <View></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  placeholder: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
  }
});
