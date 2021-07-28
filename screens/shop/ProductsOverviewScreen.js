import React ,{useState,useEffect} from "react";
import { FlatList, Button, SafeAreaView, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import Header from "../../components/UI/Header";
import { Ionicons } from '@expo/vector-icons'; 


const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const cartItems = useSelector((state) => state.cart.items);
  // const [cartItemsKeys, setCartItemsKeys] =  useState(null)

  // TODO: ADD LOGIC PLEASE
  // useEffect(() => {
  //   setCartItemsKeys(Object.keys(cartItems))
  //   console.log(Object.keys(cartItems));
  //   cartItemsKeys.forEach((item, index)=>{

  //   })
  // }, [])


  const dispatch = useDispatch();

  const selectItemHandler = (id, title) => {
    props.navigation.navigate("ProductDetail", {
      productId: id,
      productTitle: title,
    });
  };
const addToCartData = (itemData) => {
  dispatch(cartActions.addToCart(itemData.item))
  alert(`${itemData.item.title} Added Into Cart`)
}
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff"}}>
      <FlatList
      contentContainerStyle={{display:"flex",alignItems:"center",paddingBottom:90}}
         numColumns={2}
        ListHeaderComponent={<Header />}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          >
            <Ionicons  onPress={() => {
                addToCartData(itemData);
              }} name={itemData.item.id !== "p1" ?"heart-outline":"heart-sharp"} size={20} color="red" />
          </ProductItem>
        )}
      />
    </SafeAreaView>
  );
};

export default ProductsOverviewScreen;
