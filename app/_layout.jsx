import { StyleSheet } from "react-native";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";
import Loader from "../components/Loader";
import SnackBar from "../components/SnackBar";

export const unstable_settings = {
  initialRouteName: "index",
};
const StackComponent =()=>{
  const dispatch = useDispatch();
  const {isLoading,SnackBarVisible} = useSelector((state)=>state.commonReducer)
  console.log(SnackBarVisible,'in layout')
  return(
    <>
   {isLoading && <Loader/>}

    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Register" options={{ headerShown: false }} />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack>
    </>
      )
}
const Layout = () => {
  return (
    <Provider store={store}>
      <StackComponent />
      <SnackBar/>
    </Provider>
  );
};

export default Layout;

const styles = StyleSheet.create({});
