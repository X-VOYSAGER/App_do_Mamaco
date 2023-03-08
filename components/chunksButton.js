import React, { Component } from "react"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { Audio } from "expo-av";



export default class ChunksButton extends Component{
   
   playSound = async(soundChunk) => {
    var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
    await Audio.Sound.createAsync(
    {uri:soundLink},
    {shouldPlay: true}

    )

   }
   
   
    render(){
        return(
            <TouchableOpacity style = {styles.chunkButton}
            onPress = {() => this.playSound(this.props.wordPhone)}
            >
                <Text style = {styles.displayText}>{this.props.wordChunk}</Text>
            </TouchableOpacity>
        )    
    }    
}
const styles = StyleSheet.create({
    displayText: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
    },
    chunkButton: {
      width: '60%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      margin: 5,
      backgroundColor: 'red',
    },
  });