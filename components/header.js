import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class Header extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{"To Do List"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: 70,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#388E3C",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#EAEAEA"
  }
});

export default Header;
