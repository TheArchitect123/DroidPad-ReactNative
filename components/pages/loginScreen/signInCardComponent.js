import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Checkbox } from "react-native-paper";
import { StyleHelpers } from "../../helpers/styleHelpers";
import { SecureTextFieldComponent } from "../../ui/secureTextFieldComponent";
import { TextFieldComponent } from "../../ui/textFieldComponent";
import { commonSharedButtonStyles } from "../loginScreen/styleSheets/buttonStyleSheets";

const textFieldStyles = StyleSheet.create({
  outlineStyle: {
    margin: 20,
    color: "rgb(255,255,255)",
    backgroundColor: "white"
  }
});

const headerStyle = StyleHelpers.stdContainerHeaderTextStyle;
const outlineStyle = textFieldStyles.outlineStyle;
export const SignInCardComponent = () => {
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <ScrollView>
      <View>
        <Text style={[headerStyle.textProperties, headerStyle.textFont]}>
          DroidScan
        </Text>

        <View style={{ justifyContent: "flex-end" }}>
          <TextFieldComponent style={outlineStyle} placeholder="Username" />
          <SecureTextFieldComponent
            style={outlineStyle}
            placeholder="Password"
          />

          <Checkbox.Item
            color="black"
            label="Remember Me"
            style={{ marginLeft: 20, marginRight: 100, color: "black" }}
            position="leading"
            status={rememberMe ? "checked" : "unchecked"}
            onPress={() => {
              setRememberMe(!rememberMe);
            }}
          />
        </View>

        <Button
          mode="contained"
          style={commonSharedButtonStyles.loginScreenButton}
          onPress={() => {
            //     navigation.navigate(dashboardTabbedPageRoute);
          }}
        >
          Sign In
        </Button>
      </View>
    </ScrollView>
  );
};
