import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const GoalsList = ({ goals }) => {
  return (
    <ScrollView style={styles.list}>
      {goals.map(({ id, text }) => (
        <View key={id} style={styles.item}>
          <Text>{text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default GoalsList;

const styles = StyleSheet.create({
  list: {
    padding: 30,
  },
  item: {
    backgroundColor: "#fafafa",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});
