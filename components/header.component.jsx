import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export default function Header({ handleGoalSubmit, isOpen }) {
  const [goal, setGoal] = useState("");

  const handleInputGoal = (text) => {
    setGoal(text);
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.header}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputText}
          onChangeText={handleInputGoal}
          value={goal}
        />
        <Button title="Add" onPress={() => handleGoalSubmit(goal)} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 30,
    flex: 1,
    //flexDirection: "row", //in react native the default value is column, while in CSS its row
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    borderColor: "black",
    borderWidth: 1,
    padding: 2,
    width: "80%",
  },
});
