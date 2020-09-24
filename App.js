import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";

import Header from "./components/header.component.jsx";
import GoalsList from "./components/goals-list.component.jsx";

export default function App() {

  /**
   * 
   */
  const [goals, setTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)
  console.log(goals)
  console.log(isAddMode);

  /**
   * Add new goal
   */
  const handleGoalSubmit = (text) => {
    setTasks(goals => [...goals, { key: Math.random().toString(), text }]);
    setIsAddMode(false)
  };

  /**
   * 
   * @param {*} key 
   */
  const handleDeleteGoal = (key) => {
    setTasks((prevGoals) => prevGoals.filter((goal) => goal.key !== key))
  }


  return (
    <View style={{padding: 30}}>
      <Button title={"Add New Goal"} onPress={() => setIsAddMode(true)} />
      <Header isOpen={isAddMode} handleGoalSubmit={handleGoalSubmit} onCancel={setIsAddMode}/>
      <GoalsList goals={goals} onDelete={handleDeleteGoal} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});

/**  takeaway points
 * diferences between webdevlopment and react-native
 *
 * <View> by default organize their children using flexbox
 * the default direction is column
 * by default views only take the space it children require
 * main axis - left to right / cross axis - top to button
 */
