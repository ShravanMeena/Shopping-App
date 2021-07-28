import React from "react";
import { FlatList, Button, Alert, SafeAreaView,View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { MaterialIcons } from "@expo/vector-icons";
import ProductItem from "../../components/shop/ProductItem";
import * as productsActions from "../../store/actions/products";

const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const editProductHandler = (id) => {
    props.navigation.navigate("EditProduct", { productId: id });
  };

  const deleteHandler = (id) => {
    Alert.alert("Are you sure?", "Do you really want to delete this item?", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* add new products */}
    <View style={{height:100,alignItems:"center",justifyContent:"center"}}>
    <Button title="Add New Product" onPress={() => editProductHandler()} />
    </View>

      <FlatList
        contentContainerStyle={{
          display: "flex",
          paddingBottom: 90,
          marginLeft: 7,
        }}
        numColumns={2}
        data={userProducts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => {
              editProductHandler(itemData.item.id);
            }}
          >
            <MaterialIcons
              name="delete"
              size={20}
              color="red"
              onPress={deleteHandler.bind(this, itemData.item.id)}
            />
          </ProductItem>
        )}
      />
    </SafeAreaView>
  );
};

export default UserProductsScreen;
