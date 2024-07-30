import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import SvgComponent from "../assets/images/WandSvg";
import { useRouter } from "expo-router";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const index = () => {
  const router = useRouter();
  const [displayedText, setDisplayedText] = useState("");
  const text =
    "Get ready to super charge your goals and make dreams come true ";
  useEffect(() => {
    let count = 0;
    const intervalId = setInterval(function () {
      if (count < text.length) {
        setDisplayedText((prev) => prev + text[count]);
        count += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 60);
    return () => clearInterval(intervalId);
  }, [text]);
  return (
    <View style={styles.body}>
      <View style={styles.svgBody}>
        <Text style={styles.fontBig}>HocusFocus</Text>
        <SvgComponent style={styles.wandSvg} />
      </View>
      <View style={styles.smallTextBody}>
        {Platform.OS === "web" ? (
          <Text style={styles.fontSmall}>
            Get ready to super charge your goals and make dreams come true
          </Text>
        ) : (
          <Text style={styles.fontSmall}>{displayedText}</Text>
        )}
      </View>
      <Button
        placeHolder="Get started"
        backgroundColor="#ffffff"
        webDimensions={{
          width: "20%",
          height: "8%",
          borderRadius: 40,
          position: "absolute",
          bottom: windowHeight * 0.25,
          fontWeight: "600",
        }}
        mobileDimensions={{
          width: "90%",
          height: "7%",
          borderRadius: 40,
          position: "absolute",
          bottom: windowHeight * 0.03,
          alignSelf: "center",
          fontWeight: "600",
        }}
        style={styles.button}
        onPress={() => router.navigate("Register")}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FE8D27",

    ...Platform.select({
      android: {
        paddingHorizontal: 18,
      },
      web: {
        alignItems: "center",
        justifyContent: "",
      },
    }),
  },
  smallTextBody: {
    height: "25%",
    ...Platform.select({
      web: {
        height: 0,
        top: windowHeight / 3,
      },
    }),
  },
  fontSmall: {
    fontSize: 35,
    fontWeight: "600",
    color: "#ffff",
    textAlign: "left",
    opacity: 0.8,

    ...Platform.select({
      web: {
        textAlign: "center",
      },
    }),
  },
  wandSvg: {
    width: 60,
    height: 60,
  },

  fontBig: {
    fontSize: 40,
    fontWeight: "600",
    color: "#ffff",
    textAlign: "left",
  },
  svgBody: {
    ...Platform.select({
      web: {
        width: 300,
        justifyContent: "space-around",
        flexDirection: "row",
        bottom: 10,
        top: windowHeight / 3,
      },
      default: {
        width: "80%",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 10,
      },
    }),
  },
});
