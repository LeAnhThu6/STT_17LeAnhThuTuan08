import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen01 from "./Screen01.jsx";
import Screen02 from "./Screen02.jsx";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    //  điều hướng các màn hình
    // NavigationContainer Đóng gói toàn bộ ứng dụng
    <NavigationContainer>
      <Stack.Navigator
        // Quản lý các màn hình
        initialRouteName="Screen01"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Screen01" component={Screen01} />
        {/*Stack.Screen các thành phần của màn hình  */}
        <Stack.Screen name="Screen02" component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
