import React, { useState } from "react";
import Tabs from "./navigation/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/orders";

// stack screen
import ProductDetailScreen from "./screens/shop/ProductDetailScreen";
import EditProductScreen from "./screens/user/EditProductScreen";
import  Colors  from "./constants/Colors";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer);
const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"}>
          <Stack.Screen
            options={{
              title: <Text><FontAwesome size={"22"} color={"#fff"} name="shopping-bag" />Store</Text>,
              headerStyle: {
                backgroundColor: Colors.secondary,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize:24,

              },
            }}
            name="Home"
            component={Tabs}
          />

          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="EditProduct" component={EditProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
