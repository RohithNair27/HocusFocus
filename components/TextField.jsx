import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import React from "react";

const TextField = ({
  webDimensions,
  placeHolder,
  backgroundColor,
  mobileDimensions,
}) => {
  return (
    <TextInput
      style={
        Platform.OS === "web"
          ? {
              ...styles.body,

              height: webDimensions?.height,
              width: webDimensions?.width,
              borderRadius: webDimensions?.borderRadius,
              borderWidth: webDimensions?.borderWidth,
              padding: webDimensions?.paddingLeft,
              borderColor: webDimensions?.borderColor,
              backgroundColor: webDimensions?.backgroundColor,
            }
          : {
              ...styles.body,
              backgroundColor: backgroundColor,
              height: mobileDimensions?.height,
              width: mobileDimensions?.width,
              borderRadius: mobileDimensions?.borderRadius,
              padding: mobileDimensions?.paddingLeft,
              borderWidth: mobileDimensions?.borderWidth,
              borderColor: mobileDimensions?.borderColor,
              backgroundColor: webDimensions?.backgroundColor,
            }
      }
      placeholder={placeHolder}
      placeholderTextColor={
        Platform.OS === "web"
          ? webDimensions?.borderColor
          : mobileDimensions?.borderColor
      }
    />
  );
};

export default TextField;

const styles = StyleSheet.create({
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    outlineStyle: "none",
  },
});
