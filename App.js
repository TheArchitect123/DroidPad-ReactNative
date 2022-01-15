import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  dashboardHomePageTabRoute,
  dashboardSettingsPageTabRoute
} from "./components/constants/routes";
import { DashboardTabbedSearchComponent } from "./components/pages/dashboardScreens/dashboardSearchComponent";
import { DashboardTabbedSettingsComponent } from "./components/pages/dashboardScreens/dashboardSettingsComponent";
import { DashboardTabbedSharedComponent } from "./components/pages/dashboardScreens/dashboardSharedComponent";
import { DashboardTabbedHomeComponent } from "./components/pages/dashboardScreens/dashboardTabbedHomeComponent";
import { DroidPadLoginScreenComponent } from "./components/pages/droidPadLoginScreenComponent";

function getLoginScreen() {
  return <DroidPadLoginScreenComponent />;
}

// Tab Screens
function getMainTabbedScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={dashboardHomePageTabRoute} component={getHomeScreen} />
      <Tab.Screen
        options={{ headerShown: false }}
        name={dashboardSettingsPageTabRoute}
        component={getSettingsScreen}
      />
    </Tab.Navigator>
  );
}

function getHomeScreen() {
  return <DashboardTabbedHomeComponent />;
}
function getSearchScreen() {
  return <DashboardTabbedSearchComponent />;
}
function getSharedScreen() {
  return <DashboardTabbedSharedComponent />;
}
function getSettingsScreen() {
  return <DashboardTabbedSettingsComponent />;
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const App = () => {
  return getLoginScreen();
};
