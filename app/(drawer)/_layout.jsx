import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";
import { Drawer } from "expo-router/drawer";
import AppDrawerItem from "../../components/DrawerUserInfo";
const DrawerLayout = () => {
  const dimensions = useWindowDimensions();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <AppDrawerItem {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: "#FE8D27" },
          drawerStyle: {
            backgroundColor: "#F2F2F2",
            elevation: 0,
            borderWidth: 0,
            shadowOpacity: 0,
            borderColor: "white",
          },
          drawerType: dimensions.width >= 768 ? "permanent" : "front",
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerShown: dimensions.width >= 768 ? false : true,
            drawerLabel: "Home",
            title: "",
          }}
        />
        {/* <Drawer.Screen name="(settings)" options={{ headerShown: false }} /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
