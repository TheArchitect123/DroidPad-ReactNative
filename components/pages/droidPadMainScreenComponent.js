import { BlurView } from "@react-native-community/blur";
import * as React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { Surface } from "react-native-paper";
import { SceneMap, TabView } from "react-native-tab-view";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { SignInCardComponent } from "./loginScreen/signInCardComponent";
import { SignUpCardComponent } from "./loginScreen/signUpCardComponent";

const styles = StyleSheet.create({
  surface: {
    borderRadius: 20,
    margin: 40,
    flex: 1,
    maxHeight: "55%",
    elevation: 12,
    backgroundColor: "white"
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

const loginbackground = "../../assets/images/login/stdloginbackground-min.jpg";
const SignInRoute = () => <SignInCardComponent />;
const SignUpRoute = () => <SignUpCardComponent />;
export const DroidPadMainScreenComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "signInKey", title: "Sign In" },
    { key: "registerKey", title: "Register" }
  ]);

  const layout = useWindowDimensions();
  return (
    <ImageBackground
      source={require(loginbackground)}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={15}
        reducedTransparencyFallbackColor="black"
      />

      <Surface style={styles.surface}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={SceneMap({
            signInKey: SignInRoute,
            registerKey: SignUpRoute
          })}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </Surface>
    </ImageBackground>
  );
};
