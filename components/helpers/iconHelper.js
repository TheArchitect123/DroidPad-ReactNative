import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { IconFontsNames } from "../constants/iconFontsNames";

const MenuIcon = () => <Icon name="rocket" size={30} color="black" />;
const EyeOpenIcon = () =>
  <Icon name={IconFontsNames.eyeOpenIconName} size={30} color="black" />;
const EyeClosedIcon = () =>
  <Icon name={IconFontsNames.eyeClosedIconName} size={30} color="black" />;

export { MenuIcon, EyeOpenIcon, EyeClosedIcon };
