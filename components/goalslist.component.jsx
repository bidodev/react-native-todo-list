import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const GoalsList = ({ goals }) => {
  return (
    <View>
      <FlatList style={styles.list}
        data={goals}
        renderItem={itemData => (
            <View style={styles.item}>
            <Text>{itemData.item.text}</Text>
          </View>
        )}
      />
    </View>
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
