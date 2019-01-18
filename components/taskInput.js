import React, { Component } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

class TaskInput extends Component {
  state = {
    text: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          value={this.state.text}
          placeholderTextColor="white"
          onChangeText={text => this.setState({ text: text })}
        />
        <View style={{ marginRight: 10 }}>
          <Button
            color="#388E3C"
            onPress={() => {
              this.props.onAddTask(this.state.text);
              this.state.text = "";
            }}
            title="Add"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#81C784",
    borderRadius: 8,
    margin: 8
  },
  input: {
    //placeholderTextColor: "white",
    color: "white",
    marginLeft: 10
  }
});

export default TaskInput;
