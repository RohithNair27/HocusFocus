import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
  } from "react-native";
  import React from "react";
  import { Link } from "expo-router";
  const Button = ({
    placeHolder,
    backgroundColor,
    mobileDimensions,
    position,
    webDimensions,
    onPress,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={
          Platform.OS === "web"
            ? {
                ...styles.body,
                backgroundColor: backgroundColor,
                height: webDimensions?.height,
                width: webDimensions?.width,
                borderRadius: webDimensions?.borderRadius,
                position: webDimensions?.position,
                bottom: webDimensions?.bottom,
              }
            : {
                ...styles.body,
                backgroundColor: backgroundColor,
                height: mobileDimensions?.height,
                width: mobileDimensions?.width,
                borderRadius: mobileDimensions?.borderRadius,
                position: mobileDimensions?.position,
                bottom: mobileDimensions?.bottom,
                alignSelf: mobileDimensions?.alignSelf,
              }
        }
      >
        <Text style={{ fontWeight: "600", fontSize: 15 }}>{placeHolder}</Text>
      </TouchableOpacity>
    );
  };
  
  export default Button;
  
  const styles = StyleSheet.create({
    body: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
  