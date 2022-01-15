import * as React from "react";
import { ScrollView, Text } from "react-native";

export const DashboardTabbedSharedComponent = ({ navigation }) => {
  return (
    <ScrollView>
      <Text>Shared Page</Text>
    </ScrollView>
  );
};
