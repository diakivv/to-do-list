import React, { Component } from "react";
import { StyleSheet, Text, View, CheckBox, Button } from "react-native";

class Task extends Component {
  state = {
    //description: "Call mum",
    isCompleted: false
  };
  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          value={this.state.isCompleted}
          onValueChange={() =>
            this.setState({ isCompleted: !this.state.isCompleted })
          }
        />
        <Text style={styles.description}>{this.props.description}</Text>
        <Button color="#F44336" onPress={() => {}} title="Delete" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
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

export default Task;
