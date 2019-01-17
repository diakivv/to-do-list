import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TaskList from "./components/taskList";

export default class App extends Component {
  render() {
    return (
      <View style={styles.taskList}>
        <TaskList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  taskList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D9D9D9"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
