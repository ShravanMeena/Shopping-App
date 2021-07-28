import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions
} from 'react-native';

import Card from '../UI/Card';
const {width} = Dimensions.get('window')

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} resizeMode="cover"/>
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              {props.children}
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 350,
    width: width*.45,
    marginRight:5,
    marginLeft:5,
    marginBottom:10
    
  },
  touchable: {
    // borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '75%',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'flex-start',
    height: '25%',
    padding: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    marginVertical: 2,
    fontSize:19

  },
  price: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    color: "#ec7771"
  },
  actions: {
    position: "absolute",
    top: 7,
    right: 7,
    backgroundColor:"#E0E0E0",
    height: 34,
    width: 34,
    borderRadius:17,
    alignItems:"center",
    justifyContent:'center'
  }
});

export default ProductItem;
