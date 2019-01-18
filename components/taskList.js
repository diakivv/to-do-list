import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Task from "./task";

class TaskList extends Component {
  state = {};

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          //style={styles.container}
          data={this.props.tasks}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              description={item.description}
              onDelete={this.props.onDelete}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D9D9D9"
  }
});

export default TaskList;
