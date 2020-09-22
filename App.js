import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import Header from "./components/header.component.jsx";
import GoalsList from "./components/goalslist.component.jsx";

export default function App() {

  /**
   * 
   */
  const [goals, setGoals] = useState([]);

  const handleGoalSubmit = (text) => {
    setGoals(goals => [...goals, {id: goals.length + 2, text}]);
  };


  return (
    <View>
      <Header handleGoalSubmit={handleGoalSubmit}/>
      <GoalsList goals={goals} />
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
