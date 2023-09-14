import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./pages/Home";
import List from "./pages/List";
const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Tela home' }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{ title: 'Tela lista de compras' }}
        />
      </Stack.Navigator>
    )
}
    