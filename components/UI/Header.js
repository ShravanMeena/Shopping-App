import React from 'react'
import { View ,Text, TextInput,StyleSheet,Dimensions,Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors';
const {width} = Dimensions.get('window')

export default function Header() {
    return (
           <View style={styles.main}>
           <View style={styles.container}>
                {/* input field */}
            <View style={styles.inputContainer}>
            <View style={styles.innerInputContainer}>
            <Ionicons name="search-outline" size={24} color="#ABA9A2" style={{marginLeft:5}}/>
                    <TextInput style={styles.textInput} placeholder="Find your product" placeholderTextColor={"#ABA9A2"}/>
                </View>
            </View>

                {/* notification icon */}
            <View style={styles.notifyContainer}>
            <Ionicons name="notifications-outline" size={24}  color="#ABA9A2" />
            </View>
       </View>
      
      <View style={styles.footer}>
      <Image
        style={styles.image}
        source={require('../../assets/shopping.png')}
      />
      <View style={styles.footerRight}>
          <Text style={styles.footerText}>
          Free Shipping During Covid-19
          </Text>
      </View>
      </View>
      </View>
    )
}


const styles = StyleSheet.create({
    main : {
        width ,
        height: width/1.8,
        display: 'flex',
        flexDirection:"column",
        alignItems:'center',
        justifyContent:"center"
    },
    container : {
        width: "90%",
        display: 'flex',
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between"
    },
    inputContainer:{
        backgroundColor:"#f5f5f5",
        borderRadius:5,
        padding: 15,
        width: width*.66,
    },
    innerInputContainer:{
        display: 'flex',
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"flex-start",
    },
    textInput:{
        fontSize:16,
        paddingLeft:12
    },

    notifyContainer:{
        backgroundColor:"#f5f5f5",
        padding: 15,
        borderRadius:5,
        width: width*.2,
        display: 'flex',
        flexDirection:"column",
        alignItems:'center',
        justifyContent:"center"
    },



    footer:{
        width: width*.9,
        height: width/3.5,
        backgroundColor:Colors.secondary,
        marginTop:20,
        borderRadius:10,
        display: 'flex',
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between"
    },
    image:{
        width: 140,
        height: "100%",
    },
    footerRight:{

    },
    footerText:{
        width: 150,
        fontSize:18,
        marginRight:25
    },
})