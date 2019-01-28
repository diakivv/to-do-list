import React, { Component } from "react";
import { StyleSheet, Text, View, CheckBox, Button } from "react-native";
import { connect } from "react-redux";
import { toggleTask, deleteTask } from "../actions/actionCreators";

class Task extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          value={this.props.isCompleted}
          onValueChange={() => this.props.toggleTask(this.props.id)}
        />
        <Text style={styles.description}>{this.props.description}</Text>
        <Button
          color="#F44336"
          onPress={() => this.props.deleteTask(this.props.id)}
          title="Delete"
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTask(id)),
  deleteTask: id => dispatch(deleteTask(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Task);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 10,
    width: "85%",
    height: "10%"
  },
  description: {
    fontSize: 20,
    color: "#555555"
  },
  button: {
    color: "#F44336"
  }
});
