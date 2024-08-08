import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";
import { Drawer } from "expo-router/drawer";
import AppDrawerItem from "../../components/DrawerUserInfo";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
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
          drawerActiveTintColor:'#FE8D27',
          
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerShown: dimensions.width >= 768 ? false : true,
            drawerLabel: "Home",
            title: "",
            drawerIcon:({focused})=><FontAwesome name="home" size={24} color={focused?'#FE8D27':'black'} />
          }}
        />
        <Drawer.Screen name="Setting" options={{ headerShown: false,
          drawerLabel: "Settings",
          title: "",
          drawerIcon:({focused})=><Ionicons name="settings-sharp" size={24}  color={focused?'#FE8D27':'black'} /> }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
