import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import { Welcome } from "../pages/Welcome";
import { Register } from "../pages/Register";
import { CompleteRegister } from "../pages/CompleteRegister";

const StackRoutes = createStackNavigator();

export default function AppRoutes() {
  return (
    <StackRoutes.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <StackRoutes.Screen name="Welcome" component={Welcome} />
      <StackRoutes.Screen name="Register" component={Register} />
      <StackRoutes.Screen
        name="CompleteRegister"
        component={CompleteRegister}
      />
    </StackRoutes.Navigator>
  );
}
