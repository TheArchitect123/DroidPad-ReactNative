import React from "react";
import { Appbar } from "react-native-paper";
export const AppBarForRootPage = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Title" subtitle={"Subtitle"} />
    </Appbar.Header>
  );
};
