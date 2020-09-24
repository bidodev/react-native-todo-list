import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const GoalItem = ({ item, onDelete }) => {
  const { key, text } = item;
  return (
    /** takeaway
     * we can control the opacity value using the propertie activeOpacity in the <TouchableOpacity>
     */
    <TouchableOpacity onPress={()=> onDelete(key)}>
      <View style={styles.item}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fafafa",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});
