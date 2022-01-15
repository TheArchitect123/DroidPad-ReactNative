import * as React from "react";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { EyeClosedIcon, EyeOpenIcon } from "../helpers/iconHelper";
import { isNullOrWhiteSpace } from "../helpers/stringHelpers";

let hasTyped = false;
export const SecureTextFieldComponent = props => {
  const [text, setText] = React.useState("");
  const [securityState, setSecurityState] = React.useState(true);

  const onChangeText = text => {
    hasTyped = true;
    setText(text);
  };
  const hasErrors = () => {
    return hasTyped && isNullOrWhiteSpace(text);
  };

  return (
    <View>
      <TextInput
        right={
          <TextInput.Icon
            onPress={() => setSecurityState(!securityState)}
            name={() => (!securityState ? <EyeOpenIcon /> : <EyeClosedIcon />)}
          />
        }
        placeholder={props.placeholder}
        label={props.placeholder}
        value={text}
        secureTextEntry={securityState}
        onChangeText={onChangeText}
      />
      <HelperText type="error" visible={hasErrors()}>
        This field is required
      </HelperText>
    </View>
  );
};
