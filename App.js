import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
    <View>
      <Text style={styles.headingText}>Welcome you all for my React Native course 🎨</Text>
      <ScrollView horizontal   showsHorizontalScrollIndicator={false} >
        <View style={styles.heroContainer}>
            <View style={[styles.innerHeroCont, styles.cardOne]}>
              <Text>⚡ Card</Text>
            </View>
            <View style={[styles.innerHeroCont, styles.cardTwo]}>
              <Text>⚡ Card</Text>
            </View>
            <View style={[styles.innerHeroCont, styles.cardThree]}>
              <Text>⚡ Card</Text>
            </View>
            <View style={[styles.innerHeroCont, styles.cardTwo]}>
              <Text>⚡ Card</Text>
            </View>
            <View style={[styles.innerHeroCont, styles.cardThree]}>
              <Text>⚡ Card</Text>
            </View>
        </View>
      </ScrollView>
      
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  headingText: {
    fontFamily:'Poppins',
    fontSize:24,
    textAlign:"center",
    paddingTop:5,
    fontWeight:'bold',
    lineHeight:40
  },
  heroContainer:{
    display:"flex",
    backgroundColor:'#f5f5f5',
    height:"auto",
   flexDirection:"row",
   marginTop:20,
  //  flexWrap:'wrap'
  elevation:0
  },
  innerHeroCont:{
    fontFamily:'sans-serif',
    width:300,
    height:180,
    borderRadius:6,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    opacity:0.6,
    
  },
  cardOne:{
    backgroundColor:'green',
    margin:5,
  
  },
  cardThree:{
    backgroundColor:'pink',
    margin:5,
  },
  cardTwo:{
    backgroundColor:'brown',
    margin:5,
  }
})


export default App;
