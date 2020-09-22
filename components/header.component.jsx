import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Header({handleGoalSubmit}) {
  const [goal, setGoal] = useState("");

  const handleInputGoal = (text) => {
    setGoal(text);
  };

  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Course Goal"
        style={styles.inputText}
        onChangeText={handleInputGoal}
        value={goal}
      />
      <Button title="Add" onPress={() => handleGoalSubmit(goal)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 30,
    flexDirection: "row", //in react native the default value is column, while in CSS its row
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputText: {
    borderColor: "black",
    borderWidth: 1,
    padding: 2,
    width: "80%",
  },
});
