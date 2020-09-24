import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export default function Header({ handleGoalSubmit, isOpen, onCancel }) {
  const [goal, setGoal] = useState("");

  const handleInputGoal = (text) => {
    setGoal(text);
  };

  const addGoalHandler = () => {
    handleGoalSubmit(goal);
    setGoal("");
  };

  const cancelGoalHandler = () => {
    onCancel(false);
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
        <View style={styles.wrapperButtons}>
          <View style={styles.buttonCancel}>
            <Button title="Cancel" color="#fff" onPress={cancelGoalHandler} />
          </View>

          <View style={styles.buttonAdd}>
            <Button title="Add" color="#fff" onPress={addGoalHandler} />
          </View>
        </View>
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
    padding: 15,
    width: "80%",
  },
  wrapperButtons: {
    width: "60%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonCancel: {
    backgroundColor: "red",
    width: "40%"
  },
  buttonAdd: {
    backgroundColor: "green",
    width: "40%"
  },
});
