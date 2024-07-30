import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
const AppDrawerItem = (props) => {
  return (
    <>
      <View style={styles.drawerHeader}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            borderColor: "#103550",
            alignItems: "center",
            marginBottom: 10,
          }}
          onPress={() => {
            getMobilePermission("launchImage");
          }}
        ></TouchableOpacity>
        <Text style={styles.drawerHeaderText}>Rohith K </Text>
        <Text
          style={{
            ...styles.drawerHeaderText,
            fontSize: 12,
            color: "#777777",
            fontWeight: "normal",
          }}
        >
          HocusFocus
        </Text>
      </View>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
        <DrawerItem
          icon={() => {
            // return <MaterialCommunityIcons size={24} name={"logout"} />;
          }}
          labelStyle={{ color: "black" }}
          label="Logout"
          //   onPress={() => onPressLogout()}
        />
        <DrawerItem
          labelStyle={{ color: "black" }}
          label="Rate us"
          //   onPress={() => handlePress()}
        />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Text>Version 0.0.1</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    height: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerHeaderText: {
    color: "#103550",

    fontSize: 20,
    fontWeight: "bold",
  },
  editbutton: {
    position: "absolute",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: "40%",
    bottom: 0,
    right: 0,
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  footer: {
    borderColor: "lightgray",
    position: "absolute",

    bottom: 10,
    alignSelf: "center",
  },
});

export default AppDrawerItem;
