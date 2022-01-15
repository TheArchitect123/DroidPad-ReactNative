import * as React from "react";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { isNullOrWhiteSpace } from "../helpers/stringHelpers";

let hasTyped = false;
export const TextFieldComponent = props => {
  const [text, setText] = React.useState("");

  const onChangeText = text => {
    hasTyped = true;
    setText(text);
  };

  const hasErrors = () => {
    return hasTyped && isNullOrWhiteSpace(text);
  };

  // Has Errors should only be invoked after the user types the first text
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        label={props.placeholder}
        value={text}
        onChangeText={onChangeText}
      />
      <HelperText type="error" visible={hasErrors()}>
        This field is required
      </HelperText>
    </View>
  );
};
