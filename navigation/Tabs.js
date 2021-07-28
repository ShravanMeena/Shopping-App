import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


// tabs screen
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen"
import CartScreen from "../screens/shop/CartScreen"
import OrdersScreen from "../screens/shop/OrdersScreen"
import UserProductsScreen from "../screens/user/UserProductsScreen"

import {AntDesign} from "@expo/vector-icons"
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator()
  
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: "#fff",
                    height: 100,
                    // borderTopColor:"#bbbbb",
                    borderColor:"#fff",
                    borderWidth:1,
                    // borderTopEndRadius:60,
                    // borderTopStartRadius:60,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={ProductsOverviewScreen}
                options={{
                    
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="home" size={focused ? 44:32} color={focused ? Colors.secondary:Colors.accent} />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="shoppingcart" size={focused ? 44:32} color={focused ? Colors.secondary:Colors.accent} />
                    )
                }}
            />
            <Tab.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="plussquareo" size={focused ? 44:32} color={focused ? Colors.secondary:Colors.accent} />
                    )
                }}
            />
            <Tab.Screen
                name="Your Products"
                component={UserProductsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="user" size={focused ? 44:32} color={focused ? Colors.secondary:Colors.accent} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;