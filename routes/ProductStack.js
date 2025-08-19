import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Card from "../screens/Card";
import ConfirmCheckOut from "../screens/ConfirmCheckOut";
import SuccessCheckOut from "../screens/SuccessCheckOut";
import Navbar from "../components/Navbar";

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator initialRouteName="Card" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Card" component={Card} />
      <Stack.Screen name="Navbar" component={Navbar} />
      <Stack.Screen name="ConfirmCheckOut" component={ConfirmCheckOut} />
      <Stack.Screen name="SuccessCheckOut" component={SuccessCheckOut} />
    </Stack.Navigator>
  );
};

export default ProductStack;
