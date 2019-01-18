import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import ToDoList from "./components/todolist";

export default class App extends Component {
  render() {
    return <ToDoList />;
  }
}
