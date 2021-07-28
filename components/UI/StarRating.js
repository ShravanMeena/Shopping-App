import React from 'react'
import { View,StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 

export default function StarRating() {
    return (
        <View style={styles.container}> 
           <FontAwesome name="star" size={25} color="#FF9529" />
           <FontAwesome name="star" size={25} color="#FF9529" />
           <FontAwesome name="star" size={25} color="#FF9529" />
           <FontAwesome name="star" size={25} color="#FF9529" />
           <FontAwesome name="star-half-empty" size={25} color="#FF9529" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "56%",
      display: "flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginTop:5
    },

  });