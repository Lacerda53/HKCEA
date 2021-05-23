import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../pages/Home";
import { AntDesign } from "@expo/vector-icons";
import colors from "../styles/colors";
import { Profile } from "../pages/Profile";
import { Schedule } from "../pages/Schedule";

const Tab = createMaterialBottomTabNavigator();

export function BottomNavigationRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.primary}
      barStyle={{ backgroundColor: "#D2DCEB", height: 60 }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={26} color={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Schedule"
        options={{
          tabBarLabel: "Agenda",
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={26} color={color} />
          ),
        }}
        component={Schedule}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={26} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
