import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Card from "../screens/Card";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ConfirmCheckOut from "../screens/ConfirmCheckOut";
import SuccessCheckOut from "../screens/SuccessCheckOut";
import Navbar from "../components/Navbar";

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Card" component={Card} />
      <Stack.Screen name="Navbar" component={Navbar} />
      <Stack.Screen name="ConfirmCheckOut" component={ConfirmCheckOut} />
      <Stack.Screen name="SuccessCheckOut" component={SuccessCheckOut} />
    </Stack.Navigator>
  );
};

export default ProductStack;
