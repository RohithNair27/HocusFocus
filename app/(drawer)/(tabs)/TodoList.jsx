import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Platform,
    Pressable,
   
  } from "react-native";
  import React,{useState} from "react";
  import { DatePickerModal,TimePickerModal } from 'react-native-paper-dates';
  import TextField from "../../../components/TextField";
  import TaskItem from "../../../components/TaskItem";
  import { FontAwesome6 } from "@expo/vector-icons";
  import { useSelector, useDispatch } from "react-redux";
  import { AddTaskAction,DeleteTaskAction,CompleteTaskAction } from "../../../Redux/TaskReducer/TaskActions";
  const TodoList = () => {
    const dispatch = useDispatch()
    const [text,setText]=useState("")
    const tasks = useSelector((state) => state.TaskReducer);
    const [dateTime, setDateTime] = useState({
      date:undefined,
      time:undefined
    });
    const [isDateModalVisible, setIsDateModalVisible] = useState(false);
    const [isTimeModalVisible, setisTimeModalVisible] = useState(false);

    function onAddTask(){
      dispatch(AddTaskAction({task:text,taskCurrentState:false}))
    }
    function onDeleteTask(deletedID){
      dispatch(DeleteTaskAction(deletedID))
    }

    function onCompleteTask(completedID){
      

      dispatch(CompleteTaskAction(completedID))
    }

    function changeText(value){
      setText(value)  
    }
    function changeDateModalVisbility(){
      setIsDateModalVisible(!isDateModalVisible)
    }
    function changeTimeModalVisibility(){
      setisTimeModalVisible(!isTimeModalVisible)
    }
    function onConfirmDate({date}){
      setDateTime({...dateTime,time:date})
      changeDateModalVisbility()
      changeTimeModalVisibility()
    }
    function onConfirmTime({ hours, minutes }){
      setDateTime({...dateTime})
      // console.log(hours,minutes)
      changeTimeModalVisibility()
      onAddTask()
      setText('')
      
    }
  
    return (
      <View style={styles.body}>
      
        <DatePickerModal
          locale="en"
          mode="single"
          visible={isDateModalVisible}
          onDismiss={changeDateModalVisbility}
          date={dateTime.date}
          onConfirm={onConfirmDate}
          label={''}
        />
        <TimePickerModal
          visible={isTimeModalVisible}
          onDismiss={changeTimeModalVisibility}
          onConfirm={onConfirmTime}
          hours={12}
          minutes={14}
        />
        <Text style={styles.mainText}>Today's main focus</Text>
        <View style={styles.inputBody}>
          <Pressable>
            <Text>🟡🔵🔴</Text>
          </Pressable>
          <TextField
          
            placeHolder={"What is your next task?"}
            value={text}
            onTextChange={changeText}
            webDimensions={{
              width: "80%",
              height: "100%",
              fontWeight: "600",
           
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
          <Pressable onPress={()=>changeDateModalVisbility()}>
          <FontAwesome6 name="clock" size={24} color="#CA8BFE" />
          </Pressable>
        </View>
        <View style={styles.taskItemBody}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            {tasks.map((eachTask, index) => {   
              return (
                <TaskItem
                 key={index}
                 onDeleteTask={onDeleteTask}
                 onCompleteTask={onCompleteTask}
                  index={index}
                  eachTaskData={eachTask}
            
                  webDimensions={{
                    height:55,
                    width:'100%',
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
      backgroundColor: "#FE8D27",
      alignItems: "center",
      justifyContent: "space-around",
  
      ...Platform.select({
        web: {
          // margin: 10,
          // borderRadius: 10,
        },
        default: {},
      }),
    },
    inputBody: {
      // borderWidth: 1,
      width: "65%",
      height: "9%",
      flexDirection: "row",
      justifyContent: "space-evenly",
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
  