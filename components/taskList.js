import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Task from "./task";

class TaskList extends Component {
  state = {
    tasks: [
      { id: "1", description: "Call mum" },
      { id: "2", description: "Walk dog" }
    ]
  };

  _keyExtractor = (item, index) => item.id;

  handleDelete = taskId => {
    const tasks = this.state.tasks.filter(t => t.id !== taskId);
    this.setState({ tasks: tasks });
  };

  render() {
    return (
      <View>
        <FlatList
          //style={styles.container}
          data={this.state.tasks}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              description={item.description}
              onDelete={this.handleDelete}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#D9D9D9"
  }
});

export default TaskList;
