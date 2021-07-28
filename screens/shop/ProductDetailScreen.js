import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import StarRating from "../../components/UI/StarRating";

import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";

const { width } = Dimensions.get("window");

const ProductDetailScreen = (props) => {
  const productId = props.route.params.productId;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();

  const addToCartdata = () => {
    dispatch(cartActions.addToCart(selectedProduct));
    alert("Added Into Cart");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
          resizeMode="cover"
        />

        <View style={styles.detailsMain}>
          <View style={styles.details}>
            <View style={styles.detailsLeft}>
              <Text style={styles.title}>{selectedProduct.title}</Text>
              <Text style={styles.description}>Fashion store</Text>

              <StarRating />
            </View>

            <View style={styles.detailsRight}>
              <Text style={styles.price}>
                ${selectedProduct.price.toFixed(2)}
              </Text>
            </View>
          </View>

          <Text style={styles.descriptionText}>
            {selectedProduct.description}
            100% Original Products Pay on delivery might be available Easy 30
            days returns and exchanges Try & Buy might be available
          </Text>

          <View style={styles.actions}>
            <Button
              color={Colors.primary}
              title="Add to Cart"
              onPress={() => {
                addToCartdata(selectedProduct);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: width * 1.2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  detailsMain: {
    width,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  details: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
  price: {
    fontSize: 24,
    color: "#ec7771",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans-bold",
  },
  description: {
    fontFamily: "open-sans",
    fontSize: 15,
    marginVertical: 2,
  },
  descriptionText: {
    fontFamily: "open-sans",
    fontSize: 15,
    marginVertical: 25,
    width: "90%",
    opacity: 0.8,
  },
});

export default ProductDetailScreen;
