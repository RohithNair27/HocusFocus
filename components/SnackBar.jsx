import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { useSelector,useDispatch } from 'react-redux';
import { isSnackBarVisible } from '../Redux/commonReducer/commonAction';
const SnackBar = () => {
  const dispatch = useDispatch()
  const {SnackBarVisible} = useSelector((state)=>state.commonReducer)

  return (
    
      <Snackbar
      style={{zIndex:-1,position:'relative'}}
        visible={SnackBarVisible.visible}
        duration={2000}
        onDismiss={() => {
          dispatch(isSnackBarVisible(''))
        }}>
       {SnackBarVisible.message}
      </Snackbar>
  
  );
};

const styles = StyleSheet.create({
  container: {
   
    // justifyContent: 'space-between',
    // width:'100%',
    // position:'absolute',
    // height:'100%',
  },
});

export default SnackBar;