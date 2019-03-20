/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

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
type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let bigTextArea = {}; //[Style.Colors.blue, Style.BackgroundColor.red, Style.Size.h200, Style.TextAlign.center];
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      //   <Image source={pic} style={{width: 193, height: 110}}/>
      // </View>
      <View>
        <TextArea text="sample text" />
        <TextArea text="sample text" />
        <TextArea text="sample text" />
        <TextArea text="sample text" />
        <TextArea text="sample text" />
        <TextArea text="sample text" />
        <Blink style={bigTextArea} text="blink sample" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Style {
  static Colors = {
    red: { color: 'red' },
    blue: { color: 'blue' }
  };
  static BackgroundColor = {
    red: { backgroundColor: 'red' },
    blue: { backgroundColor: 'blue' }
  };
  static Size = {
    w100: { weight: 100 },
    w200: { weight: 200 },
    h100: { height: 100 },
    h200: { height: 200 }
  };
  static TextAlign = {
    center: { textAlign: 'center' },
    left: { textAlign: 'left' },
    right: { textAlign: 'right' }
  }
}
