import React, { Component } from "react"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { Audio } from "expo-av";



export default class ChunksButton extends Component {
  constructor() {
    super()
    this.state = {
      pressedButtonIndex: ''
    }
  }



  playSound = async (soundChunk) => {
    var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
    await Audio.Sound.createAsync(
      { uri: soundLink },
      { shouldPlay: true }

    )

  }


  render() {
    return (
      <TouchableOpacity style={this.props.buttonIndex == this.state.pressedButtonIndex?
         [styles.chunkButton, {backgroundColor: 'white'}]:
         [styles.chunkButton, {backgroundColor: 'red'}]}
        onPress={() => {this.playSound(this.props.wordPhone)
        this.setState({pressedButtonIndex:this.props.buttonIndex})
        }}
      >
        <Text style={this.props.buttonIndex == this.state.pressedButtonIndex?
        [styles.displayText, {color:'red'}]:  [styles.displayText, {color: 'white'}]}>
          {this.props.wordChunk}</Text>
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