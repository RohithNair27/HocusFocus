import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    KeyboardAvoidingView,
  } from "react-native";
  import React from "react";
  import { useRoute } from "@react-navigation/native";
  import { Link, useRouter } from "expo-router";
  import TextField from "../components/TextField";
  import Button from "../components/Button";
  import { useSelector } from "react-redux";
  import "@expo/match-media";
  import { useMediaQuery } from "react-responsive";
  import { commonReducer } from "../Redux/commonReducer/commonReducer";
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const Login = () => {
    const router = useRouter();
    const [text, onChangeText] = React.useState("Useless Text");
    const isLoding = useSelector((state) => state.commonReducer);
    return (
      <View style={styles.body}>
        <View style={styles.inputFieldsBody}>
          <Text style={styles.heading}>Sign in your account</Text>
          <View style={styles.eachInputFieldContainer}>
            <Text style={{ marginBottom: 5 }}>Username *</Text>
            <TextField
              placeHolder={"Your Email Address"}
              webDimensions={{
                width: "100%",
                height: "65%",
                borderRadius: 1,
                position: "absolute",
                bottom: windowHeight * 0.25,
                fontWeight: "600",
                borderWidth: 1,
                paddingLeft: 10,
                borderColor: "#999999",
              }}
              mobileDimensions={{
                width: "100%",
                height: "70%",
                borderRadius: 1,
                alignSelf: "center",
                fontWeight: "600",
                borderWidth: 1,
                paddingLeft: 10,
                borderColor: "#999999",
              }}
            />
          </View>
          <View style={styles.eachInputFieldContainer}>
            <Text style={{ marginBottom: 5 }}>Password *</Text>
            <TextField
              placeHolder={"Your Password"}
              webDimensions={{
                width: "100%",
                height: "65%",
                borderRadius: 1,
  
                fontWeight: "600",
                borderWidth: 1,
                paddingLeft: 10,
                borderColor: "#999999",
              }}
              mobileDimensions={{
                width: "100%",
                height: "70%",
                borderRadius: 1,
                paddingLeft: 10,
                fontWeight: "600",
                borderWidth: 1,
                borderColor: "#999999",
              }}
            />
            <Text style={{ marginTop: 5 }}>
              Forgot your password?
              <Link href={"google.com"} style={styles.link}>
                Reset password
              </Link>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            {Platform.OS === "web" ? (
              <Text>
                No Account?
                <Link href={"/Register"} style={styles.link}>
                  Create account
                </Link>
              </Text>
            ) : null}
            <Button
              onPress={() => router.navigate("./Pomodoro")}
              placeHolder={"Login"}
              backgroundColor={"#FE8D27"}
              webDimensions={{
                width: "40%",
                height: "30%",
  
                borderRadius: 0,
                fontWeight: "600",
              }}
              mobileDimensions={{
                width: "100%",
                height: "60%",
                // borderRadius: 40,
  
                alignSelf: "center",
                fontWeight: "600",
              }}
            />
          </View>
        </View>
        {Platform.OS === "android" ? (
          <Text style={{ position: "absolute", bottom: "10%" }}>
            No Account?
            <Link href={"/Register"} style={styles.link}>
              Create account
            </Link>
          </Text>
        ) : null}
      </View>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      ...Platform.select({
        web: {
          fontSize: 35,
          fontWeight: "600",
        },
        default: {
          fontSize: 32,
          fontWeight: "700",
        },
      }),
    },
    inputFieldsBody: {
      ...Platform.select({
        web: {
          alignItems: "center",
          justifyContent: "space-around",
          borderWidth: 1,
          flexDirection: "column",
          width: "40%",
          height: "80%",
        },
        default: {
          // borderWidth: 1,
          alignItems: "center",
          justifyContent: "space-between",
          width: "85%",
          height: "50%",
        },
      }),
    },
    eachInputFieldContainer: {
      ...Platform.select({
        web: {
          width: "70%",
          height: "13%",
        },
        default: {
          width: "100%",
          height: "20%",
        },
      }),
    },
    buttonContainer: {
      ...Platform.select({
        web: {
          // borderWidth: 1,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
          height: "30%",
        },
        default: {
          justifyContent: "flex-end",
          width: "80%",
          // borderWidth: 1,
          height: "20%",
        },
      }),
    },
    link: {
      color: "#FE8D27",
      paddingLeft: 7,
    },
  });
  