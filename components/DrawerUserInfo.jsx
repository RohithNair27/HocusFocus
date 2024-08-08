import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import UserProfile from "../assets/images/UserProfile";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
const AppDrawerItem = (props) => {
  return (
    <>
      <View style={styles.drawerHeader}>
       
        <UserProfile/>
        <View>

        <Text>HocusFocus</Text>
        <Text style={{...styles.drawerHeaderText,width: 120 }} numberOfLines={1}>Rohith kizhakkerra</Text>
        </View>
         
      </View>
      <DrawerContentScrollView>
      <DrawerItemList {...props} />
        <DrawerItem
          icon={() => {
           return  <Entypo name="calendar" size={24} color="black" />
          }}
          activeTintColor={'#FE8D27'}
          labelStyle={{ color: "black" }}
          label="Todays Task"
          //   onPress={() => onPressLogout()}
        />
        {/* <DrawerItem
        icon={()=><Ionicons name="settings-sharp" size={24} color="black" />}
          labelStyle={{ color: "black" }}
          label="Settings"
          //   onPress={() => handlePress()}
        /> */}
        <DrawerItem
        icon={()=><AntDesign name="star" size={24} color="black" />}
          labelStyle={{ color: "black" }}
          label="Rate us"
          //   onPress={() => handlePress()}
        />
        <DrawerItem
        icon={()=><MaterialCommunityIcons name="logout" size={24} color="black" />}
          labelStyle={{ color: "black" }}
          label="Logout"
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
    height: 150,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    borderBottomWidth:3,
    borderColor:"#FE8D27",
    marginHorizontal:20,
    marginBottom:30,
  },
  drawerHeaderText: {
    color: "#FE8D27",
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
