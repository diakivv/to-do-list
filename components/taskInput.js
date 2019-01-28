import React, { Component } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";
import { addTask } from "../actions/actionCreators";
import { connect } from "react-redux";

let nextTaskId = 4;

class TaskInput extends Component {
  state = {
    text: "",
    isDisabled: true
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          value={this.state.text}
          placeholderTextColor="white"
          onChangeText={text =>
            this.setState({
              text,
              isDisabled: text.match(/^\s*$/) ? true : false
            })
          }
        />
        <View style={{ marginRight: 10 }}>
          <Button
            color="#388E3C"
            onPress={() => {
              this.props.addTask(nextTaskId++, this.state.text);
              this.setState({ text: "", isDisabled: true });
            }}
            title="Add"
            disabled={this.state.isDisabled}
          />
        </View>
      </View>
    );
  }
}

mapDispatchToProps = dispatch => ({
  addTask: (id, description) => dispatch(addTask(id, description))
});

export default connect(
  null,
  mapDispatchToProps
)(TaskInput);

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: 50,
    width: "100%",
    paddingRight: 10,
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
