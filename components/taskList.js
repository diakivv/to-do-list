import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Task from "./task";
import { connect } from "react-redux";

class TaskList extends Component {
  state = {};

  _keyExtractor = (item, index) => item.id.toString();

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.tasks}
          keyExtractor={this._keyExtractor}
          extraData={this.props.tasks}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              description={item.description}
              isCompleted={item.isCompleted}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state
  };
};

export default connect(mapStateToProps)(TaskList);

const styles = StyleSheet.create({
  container: {
    flex: 9,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D9D9D9"
  }
});
