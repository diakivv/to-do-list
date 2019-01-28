import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./header";
import TaskList from "./taskList";
import TaskInput from "./taskInput";
import toDoReducer from "../reducers/todoReducer";

const store = createStore(toDoReducer);

class ToDoList extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <TaskList />
          <TaskInput />
        </View>
      </Provider>
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
  }
});

export default ToDoList;
