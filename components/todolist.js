import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "./header";
import TaskList from "./taskList";
import TaskInput from "./taskInput";

class ToDoList extends Component {
  state = {
    currentId: 3,
    tasks: [
      { id: 1, description: "Call mum", isCompleted: false },
      { id: 2, description: "Walk dog", isCompleted: false },
      { id: 3, description: "Do laundry", isCompleted: false }
    ]
  };

  handleDelete = taskId => {
    const tasks = this.state.tasks.filter(t => t.id !== taskId);
    this.setState({ tasks: tasks });
  };

  handleAddTask = description => {
    this.state.currentId++;
    const tasks = [
      ...this.state.tasks,
      { id: String(this.state.currentId), description: description }
    ];
    this.setState({ tasks: tasks });
  };

  handleDoTask = taskId => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(t => t.id == taskId);
    tasks[index] = { ...tasks[index] };
    tasks[index].isCompleted = !tasks[index].isCompleted;
    this.setState({ tasks: tasks });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TaskList
          tasks={this.state.tasks}
          onDelete={this.handleDelete}
          onDoTask={this.handleDoTask}
        />
        <TaskInput onAddTask={this.handleAddTask} />
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
  }
});

export default ToDoList;
