import { StyleSheet, Platform } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Provider } from "react-redux";
import { Octicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FE8D27",
          marginHorizontal: 10,
          position: "absolute",
          top: 15,
          borderWidth: 0,
          left: 10,
          width: "15%",
        },
      }}
    >
      <Tabs.Screen
        name="TodoList"
        options={{
          headerShown: false,

          tabBarLabel: "",
          tabBarIcon: () => {
            return <Octicons name="tasklist" size={35} color="white" />;
          },
        }}
      />
      <Tabs.Screen
        name="Pomodoro"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <Octicons name="stopwatch" size={35} color="white" />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
