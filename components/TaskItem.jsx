import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import React, { useState } from "react";
import RadioButton from "./RadioButton";
const TaskItem = ({
  webDimensions,
  placeHolder,
  backgroundColor,
  mobileDimensions,
  eachTaskData,
}) => {
  const [selected, setSelected] = useState();

  return (
    <View
      style={
        Platform.OS === "web"
          ? {
              ...styles.body,
              height: webDimensions?.height,
              width: webDimensions?.width,
              borderRadius: webDimensions?.borderRadius,
              borderWidth: webDimensions?.borderWidth,
              padding: webDimensions?.paddingLeft,
              borderColor: webDimensions?.borderColor,
              backgroundColor: webDimensions?.backgroundColor,
              marginBottom: webDimensions?.marginBottom,
            }
          : {
              ...styles.pressableButton,
              backgroundColor: backgroundColor,
              height: mobileDimensions?.height,
              width: mobileDimensions?.width,
              borderRadius: mobileDimensions?.borderRadius,
              padding: mobileDimensions?.paddingLeft,
              borderWidth: mobileDimensions?.borderWidth,
              borderColor: mobileDimensions?.borderColor,
              backgroundColor: webDimensions?.backgroundColor,
            }
      }
      placeholder={placeHolder}
      placeholderTextColor={
        Platform.OS === "web"
          ? webDimensions?.borderColor
          : mobileDimensions?.borderColor
      }
    >
      <View style={styles.TaskBody}>
        <Text style={{ marginRight: 10 }}>🟡</Text>
        <Pressable>
          <Text
            style={[
              styles.taskText,
              selected && { textDecorationLine: "line-through" },
            ]}
          ></Text>
        </Pressable>
      </View>
      <View style={styles.RadioButtonBody}>
        <Pressable>
          <Text
            style={[
              styles.taskText,
              selected && { textDecorationLine: "line-through" },
            ]}
          >
            8:00 AM
          </Text>
        </Pressable>
        <RadioButton
          onPress={() => setSelected(!selected)}
          selected={selected}
        />
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  pressableButton: {},
  RadioButtonBody: {
    // borderWidth: 1,
    flexDirection: "row",
    width: "20%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  TaskBody: {
    // borderWidth: 1,
    flexDirection: "row",
    width: "20%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  taskText: {
    color: "#717012",
  },
});
