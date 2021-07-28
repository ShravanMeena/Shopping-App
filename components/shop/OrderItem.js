import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import CartItem from "./CartItem";
import Card from "../UI/Card";

import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    
        <MaterialIcons
          onPress={() => {
            setShowDetails((prevState) => !prevState);
          }}
          name={!showDetails ?"expand-more":"expand-less"}
          size={50}
          color={Colors.secondary}
        />
     

      {showDetails && (
        <View style={styles.detailItems}>
          {props.items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    marginTop: 10,
    marginHorizontal: 15,
    padding: 20,
    alignItems: "center",
    borderRadius: 5,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  totalAmount: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: Colors.primary

  },
  date: {
    fontSize: 16,
    fontFamily: "open-sans",
    color: "#888",
  },
  detailItems: {
    width: "100%",
  },
});

export default OrderItem;
