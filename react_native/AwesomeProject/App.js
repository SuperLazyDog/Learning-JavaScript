/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, SafeAreaView, TextInput, Alert, Button,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
    ScrollView} from 'react-native';
import Style from './style'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class TextArea extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>your text: {this.props.text}</Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(()=>(
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }
  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (
      <Text style={this.props.style} >{this.props.text}</Text>
    );
  }
}
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      //   <Image source={pic} style={{width: 193, height: 110}}/>
      // </View>
      //
      // <View>
      //   <TextArea text="sample text" />
      //   <TextArea text="sample text" />
      //   <TextArea text="sample text" />
      //   <TextArea text="sample text" />
      //   <TextArea text="sample text" />
      //   <TextArea text="sample text" />
      //   <Blink style={bigTextArea} text="blink sample" />
      // </View>
      //
      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'space-between',
      //   backgroundColor: "green"
      // }}>
      //   <View style={{flex: 0.3, backgroundColor: "powderblue"}}></View>
      //   <View style={{flex: 0.3, backgroundColor: "skyblue"}}></View>
      //   <View style={{flex: 0.3, backgroundColor: "steelblue"}}></View>
      // </View>
      //
      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'space-between',
      //   backgroundColor: "green"
      // }}>
      //   <View style={{flex: 0.3, backgroundColor: "powderblue", flexDirection: 'row'}}>
      //     <View style={{flex: 1, backgroundColor: "red"}}></View>
      //     <View style={{flex: 1, backgroundColor: "black"}}></View>
      //     <View style={{flex: 1, backgroundColor: "yellow"}}></View>
      //   </View>
      //   <View style={{flex: 0.3, backgroundColor: "skyblue"}}></View>
      //   <View style={{flex: 0.3, backgroundColor: "steelblue"}}></View>
      // </View>
      //
      // <View class="ABC" style={{flex: 0.3, backgroundColor: 'powderblue'}}>
      //   <View style={{
      //     flex: 0.5,
      //     alignItems: 'center',
      //     flexDirection: 'column',
      //   }}>
      //     <Text style={{
      //       flex: 1,
      //       textAlign: 'center',
      //       backgroundColor: 'gray',
      //       textAlignVertical: 'center'
      //     }}>
      //       Input
      //     </Text>
      //     <Text style={{flex: 1, fontSize: 42}}>
      //       {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      //     </Text>
      //   </View>
      //   <TextInput
      //     style={{
      //       flex: 1,
      //       backgroundColor: 'pink',
      //     }}
      //     placeholder="sample"
      //     onChangeText={(text)=> this.setState({text})}
      //   />
      // </View>
      // <View style={Style.Main}>
      //   <Button
      //     // style={Style.Sub, {color: 'red', paddingTop: 100}}
      //     onPress={() => {
      //         Alert.alert("tapped");
      //     }}
      //     title="tap here"
      //   />
      // </View>

      // <View style={styles.container}>
      //   <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
      //     <View style={styles.button}>
      //       <Text style={styles.buttonText}>TouchableHighlight</Text>
      //     </View>
      //   </TouchableHighlight>
      //   <TouchableOpacity onPress={this._onPressButton}>
      //     <View style={styles.button}>
      //       <Text style={styles.buttonText}>TouchableOpacity</Text>
      //     </View>
      //   </TouchableOpacity>
      //   <TouchableNativeFeedback
      //       onPress={this._onPressButton}
      //       background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
      //     <View style={styles.button}>
      //       <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
      //     </View>
      //   </TouchableNativeFeedback>
      //   <TouchableWithoutFeedback
      //       onPress={this._onPressButton}
      //       >
      //     <View style={styles.button}>
      //       <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
      //     </View>
      //   </TouchableWithoutFeedback>
      //   <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
      //     <View style={styles.button}>
      //       <Text style={styles.buttonText}>Touchable with Long Press</Text>
      //     </View>
      //   </TouchableHighlight>
      // </View>
      <ScrollView>
         <Text style={{fontSize:96}}>Scroll me plz</Text>
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Text style={{fontSize:96}}>If you like</Text>
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Text style={{fontSize:96}}>Scrolling down</Text>
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Text style={{fontSize:96}}>What's the best</Text>
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Text style={{fontSize:96}}>Framework around?</Text>
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
         <Text style={{fontSize:80}}>React Native</Text>
       </ScrollView>
    )
  }
}
type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let bigTextArea = {}; //[Style.Colors.blue, Style.BackgroundColor.red, Style.Size.h200, Style.TextAlign.center];
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#ddd'
      }}>
        <Main />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
