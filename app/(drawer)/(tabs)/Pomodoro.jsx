import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import React, { useEffect,useState,useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Circle, Svg,Text as TextSvg } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Pomodoro = () => {

  // circle properties
  const Radius = 40;
  const circumference = 2 * Math.PI * Radius;
  let [currentTime,setCurrentTime] =useState(25)

  // as we cannot use useState for updating values with rendering we use useRef
  let timeRef = useRef(null)
  let [isPomodoroRunning,setIsPomodoroRunning] = useState(false)
  const [duration,setDuration] = useState(
   [
    {
      type:'Pomodoro',
      duration:25,
      selected:true
    },
    {
      type:'Short Break',
      duration:5,
      selected:false
    },
    {
      type:'Long Break',
      duration:15,
      selected:false
    }
   ]
 
  )

  const onChangeDuration=(SelectedType)=>{
    const updatedDurations = duration.map((item) => {
      if (item.type === SelectedType) {
        setCurrentTime(item.duration)
        timeRef.current=item.duration
        resetAnimation(false)
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });
    setDuration([...updatedDurations])
  }
  
  
  // value shared between native and JS
  const strokeDashoffset = useSharedValue(circumference);

  // values that needs to be inserted into the animated component 
  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: strokeDashoffset.value,
    };
  });

  // this use effect controls the time
  useEffect(()=>{
    if(isPomodoroRunning){
      var timeIntervalID = setInterval(()=>{
        setCurrentTime((prev)=>
        {
          if(prev<=1){
            clearInterval(timeIntervalID)
          setIsPomodoroRunning(false)
          return 0
          }
          return prev-1
        })
      },60000)
    }

    return () => clearInterval(timeIntervalID); // Return a cleanup function
  },[isPomodoroRunning])


  /* Depending on the duration, the circumference will become 0*/
  const startAnimation = () => {
    setIsPomodoroRunning(true)
    strokeDashoffset.value = withTiming(0, {
      // here we are taking the minutes and converting to milliseconds
      duration:(duration.filter((element)=>element.selected===true)[0]).duration*60000,
      easing: Easing.linear,
    });
  };

  // on giveUp pomodoro 
  const resetAnimation=(isReset)=>{
    strokeDashoffset.value = withTiming(circumference, {
      duration:100,
      easing: Easing.linear,
    });
    if(isReset){
      setIsPomodoroRunning(false)
      setCurrentTime(duration.filter((element)=>element.selected===true)[0].duration)
    }
    
  }


  return (
    <View style={styles.body}>
      <StatusBar backgroundColor="#FE8D27" />
      <View style={styles.PomodorobuttonContainer}>
        {duration.map((item,index)=>(
          <Pressable key={index} style={[
            styles.PomodoroButton,
            { backgroundColor: !item.selected ? '#FE8D27' :  'rgba(255, 255, 255, 0.6)'  }
          ]} onPress={()=>{
            onChangeDuration(item.type)
          }}>
          <Text>{item.type}</Text>
        </Pressable>
        ))}
      
      </View>
      <Svg height="60%" width="60%" viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r={Radius} stroke="#FFFF" strokeWidth="5" fill="none"/>
        <AnimatedCircle
          cx="50"
          cy="50"
          r={Radius}
          stroke="black"
          strokeWidth="5"
          strokeDasharray={circumference}
          fill="none"
          animatedProps={animatedProps}
       />
    <TextSvg
            x="50"
            y="50"
            fill="black" 
            fontSize="10"
            fontWeight="bold"
            textAnchor="middle">
            {currentTime}
          </TextSvg>
      </Svg>
      <View style={styles.PomodorobuttonContainer}>
      <Button title="start" onPress={startAnimation} />     
      <Button title="give up" onPress={()=>resetAnimation(true)} />
      </View>
    </View>
  );
};

export default Pomodoro;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FE8D27",
    alignItems: 'center',
    justifyContent: 'center'
  },
  PomodorobuttonContainer:{
    flexDirection:'row',
    // borderWidth:1,
    width:'40%',
    height:'7%',
    justifyContent:'space-around',
    alignItems:'center',
  },
  PomodoroButton:{
    alignItems:'center',
    justifyContent:'center',
    width:'30%',
   height:'100%'
  }
});