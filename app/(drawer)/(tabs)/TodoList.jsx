import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Platform,
    Pressable,
    useState,
  } from "react-native";
  import React from "react";
  import TextField from "../../../components/TextField";
  import TaskItem from "../../../components/TaskItem";
  import { FontAwesome6 } from "@expo/vector-icons";
  import { useSelector, useDispatch } from "react-redux";
  import { TaskReducer } from "../../../Redux/TaskReducer/taskReducer";
  const TodoList = () => {
    const tasks = useSelector((state) => state.TaskReducer);
  
    return (
      <View style={styles.body}>
        <Text style={styles.mainText}>Today's main focus</Text>
        <View style={styles.inputBody}>
          <Pressable>
            <Text>🟡🔵🔴</Text>
          </Pressable>
          <TextField
            placeHolder={"What is your next task?"}
            webDimensions={{
              width: "80%",
              height: "100%",
              fontWeight: "600",
              // borderWidth: 1,
              paddingLeft: 10,
              borderColor: "#999999",
              backgroundColor: "#ffffff",
            }}
            mobileDimensions={{
              width: "90%",
              height: "8%",
              borderRadius: 1,
              paddingLeft: 10,
              fontWeight: "600",
              borderWidth: 1,
              borderColor: "#999999",
            }}
          />
          <FontAwesome6 name="clock" size={24} color="#CA8BFE" />
        </View>
        <View style={styles.taskItemBody}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            {tasks.map((eachTask, index) => {
              return (
                <TaskItem
                  index={index}
                  eachTaskData={eachTask}
                  placeHolder={"What is your next task?"}
                  webDimensions={{
                    height: 40,
                    fontWeight: "600",
                    borderColor: "#999999",
                    backgroundColor: "#ffffff",
                    marginBottom: 12,
                    borderRadius: 12,
                  }}
                  mobileDimensions={{
                    width: "80%",
                    height: 60,
                    borderRadius: 1,
                    paddingLeft: 10,
                    fontWeight: "600",
                    borderWidth: 1,
                    borderColor: "#999999",
                  }}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  };
  
  export default TodoList;
  
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: "#A18AFF",
      alignItems: "center",
      justifyContent: "space-around",
  
      ...Platform.select({
        web: {
          margin: 10,
          borderRadius: 10,
        },
        default: {},
      }),
    },
    inputBody: {
      // borderWidth: 1,
      width: "65%",
      height: "8%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: 12,
      backgroundColor: "white",
    },
    mainText: {
      fontSize: 40,
      fontWeight: "600",
      color: "#ffff",
      textAlign: "left",
    },
    taskItemBody: {
      // borderWidth: 1,
      width: "60%",
      height: "60%",
    },
  });
  