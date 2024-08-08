import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Platform,
    Pressable,
   
  } from "react-native";
  import React,{useEffect, useState} from "react";
  import { DatePickerModal,TimePickerModal } from 'react-native-paper-dates';
  import Snackbar from "../../../components/SnackBar";
import { isModalVisibleModal,isSnackBarVisible } from "../../../Redux/commonReducer/commonAction";
  import TextField from "../../../components/TextField";
  import TaskItem from "../../../components/TaskItem";
  import CustomModal from "../../../components/Modal";
  import { FontAwesome6 } from "@expo/vector-icons";
  import Entypo from '@expo/vector-icons/Entypo';
  import { MODAL_TYPE_TASK_LABEL,KINDLY_SELECT_DATE_CORRECTLY,KINDLY_SELECT_TIME_CORRECTLY, KINDLY_ADD_YOUR_TASK} from "../../../constant/constant";
  import { useSelector, useDispatch } from "react-redux";
  import { AddTaskAction,DeleteTaskAction,CompleteTaskAction } from "../../../Redux/TaskReducer/TaskActions";
import SnackBar from "../../../components/SnackBar";
  const TodoList = () => {
    const dispatch = useDispatch()
    const [text,setText]=useState("")
    const tasks = useSelector((state) => state.TaskReducer);
    const commonReucerData = useSelector((state)=>state.commonReducer)
  
    const [dateTime, setDateTime] = useState({
      date:undefined,
      time:undefined,
      category:undefined,
    });
    const [isDateModalVisible, setIsDateModalVisible] = useState(false);
    const [isTimeModalVisible, setisTimeModalVisible] = useState(false);


    // Dispatch to add task 
    function onAddTask(data){
      dispatch(AddTaskAction(data))
      setText('')
      setDateTime({...dateTime,date:undefined,time:undefined,category:undefined})

    }
    // Dispatch to delete task
    function onDeleteTask(deletedID){
      dispatch(DeleteTaskAction(deletedID))
    }
    // dispatch for completing Tasks
    function onCompleteTask(completedID){
      dispatch(CompleteTaskAction(completedID))
    }
    // dispatch for toggling SnackBar and show personal message
    function onToggleSnackBar(message){
      console.log('tootlge')
      
    }   

    function changeText(value){
      setText(value)  
    }
    // Modal Date Visibility
    function changeDateModalVisbility(){
      setIsDateModalVisible(!isDateModalVisible)
    }
    // Modal Time Visibility
    function changeTimeModalVisibility(){
      setisTimeModalVisible(!isTimeModalVisible)
    }

    // select date and store it in a state 
    function onConfirmDate({date}){
      console.log(date,'date')
      changeDateModalVisbility() 
      if(date===undefined){
         dispatch(isSnackBarVisible(KINDLY_SELECT_DATE_CORRECTLY))
         return   
      }
      changeTimeModalVisibility()
      setDateTime({...dateTime,date:date})  
    }

    /*select time, check if task has been entered and call the call the category selector
     if it has not been selected already*/
    function onConfirmTime({ hours, minutes }){
      if(hours===undefined || minutes===undefined){
        dispatch(isSnackBarVisible(KINDLY_SELECT_TIME_CORRECTLY))
        return   
     }
     if(text===''){
      dispatch(isSnackBarVisible(KINDLY_ADD_YOUR_TASK))
      return
     }
     setDateTime({...dateTime})
      changeTimeModalVisibility()
     if(dateTime.category===undefined){
      openModal(MODAL_TYPE_TASK_LABEL)
     }
      setDateTime({...dateTime,time:{hours,minutes}})
      
    }

    // finally adds the tasks once everything has been added
  function onCompleteAddTask(){
    if(dateTime.category===undefined,dateTime.date===undefined,dateTime.time===undefined){
      dispatch(isSnackBarVisible('Please select date, time and category'))
      return
    }
    onAddTask({...dateTime,task:text,taskCurrentState:false})
  }

  const openModal = (type) => {
    dispatch(isModalVisibleModal(type))
  };

  const closeModal = () => {
    dispatch(isModalVisibleModal())
  };

  const handleAction = (selectedCategory) => {
    console.log(selectedCategory,'no selected')
    if(selectedCategory){
      dispatch(isSnackBarVisible('No category selected'))
      return 
    }
    setDateTime({...dateTime,category:selectedCategory})
  };
  
    return (
      <View style={styles.body}>
      <CustomModal
        visible={commonReucerData.ModalVisible.visible}
        type={commonReucerData.ModalVisible.type}
        onClose={closeModal}
        onAction={handleAction}
      />
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
          <Pressable onPress={() => openModal(MODAL_TYPE_TASK_LABEL)} style={styles.bottomContainer}>
          <View style={[styles.circle, styles.yellow]} />
            <View style={[styles.circle, styles.blue]} />
            <View style={[styles.circle, styles.red]} />
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
          <Pressable onPress={()=>onCompleteAddTask()} style={{paddingHorizontal:10}}>
          <Entypo name="arrow-with-circle-right" size={24} color="#CA8BFE"/>
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
    bottomContainer:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
     paddingLeft:10
    
    },
    circle: {
      width: 12,
      height: 12,
      borderRadius: 25, // Half of width/height to make it a circle
      margin: 3, // Space between the circles
  },
  yellow: {
      backgroundColor: '#ffeb3b',
  },
  blue: {
      backgroundColor: '#2196f3',
  },
  red: {
      backgroundColor: '#f44336',
  },
  });
  