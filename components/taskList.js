import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Task from "./task";

class TaskList extends Component {
  state = {};
  render() {
    return (
      <View>
        <FlatList
          //style={styles.container}
          data={[
            { key: "1", description: "Call mum" },
            { key: "2", description: "Walk dog" }
          ]}
          renderItem={({ item }) => <Task description={item.description} />}
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
