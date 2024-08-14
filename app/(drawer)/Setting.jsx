import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Switch } from "react-native-paper";

const Setting = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.body}>
      <View style={styles.card}>
        <View style={styles.cardParts}>
          <View style={styles.cardHeader}>
            <FontAwesome6 name="face-laugh-beam" size={24} color="#FE8D27" />
            <Text style={styles.cardHeaderText}>Profile</Text>
          </View>
          <Pressable style={styles.settingNavigationButton}>
            <Text>Edit profile</Text>
            <Text style={styles.navigateButton}>{">"}</Text>
          </Pressable>
          <Pressable style={styles.settingNavigationButton}>
            <Text>Change password</Text>
            <Text style={styles.navigateButton}>{">"}</Text>
          </Pressable>
        </View>
        <View style={styles.cardParts}>
          <View style={styles.cardHeader}>
            <Ionicons name="notifications" size={24} color="#FE8D27" />
            <Text style={styles.cardHeaderText}>Notification</Text>
          </View>
          <Pressable style={styles.settingNavigationButton}>
            <Text>Notifications</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </Pressable>
          <Pressable style={styles.settingNavigationButton}>
            <Text>Task notifications</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </Pressable>
        </View>
        <View style={styles.cardParts}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name="dots-vertical-circle"
              size={24}
              color="#FE8D27"
            />
            <Text style={styles.cardHeaderText}>More</Text>
          </View>
          <Pressable style={styles.settingNavigationButton}>
            <Text>Premium</Text>
            <Text style={styles.navigateButton}>{">"}</Text>
          </Pressable>
          <Pressable style={styles.settingNavigationButton}>
            <Text>About us</Text>
            <Text style={styles.navigateButton}>{">"}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FE8D27",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "70%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cardParts: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: "row",
    borderBottomWidth: 2,
    minHeight: 40,
    alignItems: "center",
    borderColor: "#FE8D27",
  },
  cardHeaderText: {
    color: "#FE8D27",
    fontSize: 17,
    fontWeight: "500",
    paddingLeft: 10,
  },
  settingNavigationButton: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  navigateButton: {
    fontWeight: "900",
    fontSize: 39,
  },
});
