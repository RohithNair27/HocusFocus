// RadioButton.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#CA8BFE",
    alignItems: "center",
    justifyContent: "center",
  },
  radioSelected: {
    borderColor: "#CA8BFE",
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#CA8BFE",
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default RadioButton;
