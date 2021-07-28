import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const CartItem = props => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
      {/* <Image style={styles.image} source={{ uri: props.imageUrl }} resizeMode="cover" /> */}

        <Text style={styles.mainText}>{props.title}</Text>
        <Text style={styles.price}>${props.amount.toFixed(2)}</Text>
      </View>
      <View style={[styles.itemData, styles.itemDataDlt]}>
      <Text style={styles.quantity}>Qty: {props.quantity} </Text>

      {props.deletable && (
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}
          >
            <Ionicons
              name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
              size={24}
              color="red"
            />
          </TouchableOpacity>
        )}

       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
    borderRadius:10

  },
  itemData: {
    flexDirection: 'column',
    borderRadius:10,
    paddingVertical:15,
    paddingHorizontal:10,
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#999',
    fontSize: 18,
    marginBottom:5
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },

  price: {
    fontFamily: 'open-sans',
    fontSize: 18,
    color: Colors.primary,
    opacity: .9
  },
    deleteButton: {
    marginLeft: 20
  },
  itemDataDlt:{

  }
});

export default CartItem;
