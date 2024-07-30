import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
const Pomodoro = () => {
  return (
    <View style={styles.body}>
      <StatusBar backgroundColor="#FE8D27" />
    </View>
  );
};

export default Pomodoro;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // margin: 10,
    backgroundColor: "#FE8D27",
  },
});
