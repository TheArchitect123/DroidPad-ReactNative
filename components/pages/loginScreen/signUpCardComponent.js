import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { StyleHelpers } from "../../helpers/styleHelpers";
import { SecureTextFieldComponent } from "../../ui/secureTextFieldComponent";
import { TextFieldComponent } from "../../ui/textFieldComponent";
import { commonSharedButtonStyles } from "./styleSheets/buttonStyleSheets";

const textFieldStyles = StyleSheet.create({
  outlineStyle: {
    margin: 20
  }
});

const headerStyle = StyleHelpers.stdContainerHeaderTextStyle;
const outlineStyle = textFieldStyles.outlineStyle;
export const SignUpCardComponent = () => {
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <View style={{ justifyContent: "flex-end", top: 20 }}>
      <TextFieldComponent style={outlineStyle} placeholder="Email Address" />
      <SecureTextFieldComponent style={outlineStyle} placeholder="Password" />
      <SecureTextFieldComponent
        style={outlineStyle}
        placeholder="Confirm Password"
      />
      <Button
        mode="contained"
        style={[commonSharedButtonStyles.loginScreenButton, { top: 20 }]}
        onPress={() => console.log("User begins registration")} // Opens a loading HUD, and adds a new record to the database
      >
        Register
      </Button>
    </View>
  );
};
