import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import TaskList from "./components/taskList";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TaskList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    //alignItems: "center",
    backgroundColor: "#D9D9D9"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
