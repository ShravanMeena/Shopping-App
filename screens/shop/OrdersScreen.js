import React from 'react';
import { FlatList, Image,Dimensions, Button, View } from 'react-native';
import { useSelector } from 'react-redux';

import OrderItem from '../../components/shop/OrderItem';
import Colors from '../../constants/Colors';
const {width} = Dimensions.get('window')

const OrdersScreen = props => {
  const orders = useSelector(state => state.orders.orders);

  return (
    <>
      {orders.length ===0 &&  <Image
        style={{ width: width,
          height:700
        }}
        source={require('../../assets/orderEmp.png')}
        resizeMode="contain"
      />}
      
          {/* add new products */}
    <View style={{alignItems:"center",justifyContent:"center",marginTop:15}}>
    <Button title="Your Orders" color={Colors.secondary} onPress={() => console.log("Nothing")} />
    </View>

    <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
    </>
  );
};



export default OrdersScreen;
