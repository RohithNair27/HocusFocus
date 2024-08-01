import { StyleSheet } from "react-native";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";
import Loader from "../components/Loader";
export const unstable_settings = {
  initialRouteName: "index",
};
const StackComponent =()=>{
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state)=>state.commonReducer)
  console.log(isLoading)
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
    </Provider>
  );
};

export default Layout;

const styles = StyleSheet.create({});
