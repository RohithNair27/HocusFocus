import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import React, { useState } from "react";
import RadioButton from "./RadioButton";
import AntDesign from '@expo/vector-icons/AntDesign';
const TaskItem = ({
  webDimensions,
  placeHolder,
  backgroundColor,
  mobileDimensions,
  eachTaskData,
  onDeleteTask,
  onCompleteTask
}) => {
  const [selected, setSelected] = useState();
  console.log(eachTaskData);
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
      <View style={[{ backgroundColor: eachTaskData.category.color }, styles.circle]}/>
        <Pressable>
          <Text
            style={[
              styles.taskText,
              eachTaskData?.taskCurrentState && { textDecorationLine: "line-through" },
            ]}
          >{eachTaskData.task}</Text>
        </Pressable>
      </View>
      <View style={styles.RadioButtonBody}>
        <Pressable>
          <Text
            style={[
              styles.taskText,
              eachTaskData?.taskCurrentState && { textDecorationLine: "line-through" },
            ]}
          >
            8:00 AM
          </Text>
        </Pressable>
        <RadioButton
          onPress={() => onCompleteTask(eachTaskData.id)}
          selected={eachTaskData?.taskCurrentState}
        />
        <Pressable onPress={()=>onDeleteTask(eachTaskData.id)}>
        <AntDesign name="delete" size={20} color="#CA8BFE" />
        </Pressable>
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
  circle: {
    width: 15,
    height: 15,
    borderRadius: 25, // Half of width/height to make it a circle
    margin: 5, // Space between the circles
},
yellow: {
    backgroundColor: '#ffeb3b',
},
});
