import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import GoalItem from "./goal-item.component.jsx";

const GoalsList = ({ goals, onDelete }) => {

  return (
    <View>
      {/* For long list Flatlist is a better option,
       * If we use Scrollview it will render all the items, even if you don't reach them.
       */}
      <FlatList
        style={styles.list}
        data={goals}
        renderItem={(itemData) => {
          return (
            <GoalItem onDelete={onDelete} item={itemData.item}/>
          )
        }}
      />
    </View>
  );
};

export default GoalsList;

const styles = StyleSheet.create({
  list: {
    padding: 30,
  },
});
