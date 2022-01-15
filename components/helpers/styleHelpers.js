import { StyleSheet } from "react-native";
import { roboticoLight } from "../constants/fontFamilies";
export class StyleHelpers {
  static stdContainer = StyleSheet.create({
    flex: 1,
    flexDirection: "column"
  });

  static stdScrollContainer = StyleSheet.create({});

  static stdContainerHeaderTextStyle = StyleSheet.create({
    textFont: {
      fontSize: 45,
      fontFamily: roboticoLight,
      color: "rgb(0, 0, 0)"
    },

    textProperties: {
      margin: 10
    }
  });
}
