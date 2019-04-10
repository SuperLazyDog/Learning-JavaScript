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
import Style from './style';
import {createStackNavigator, createAppContainer, StackActions, NavigationActions} from 'react-navigation';

class Main extends Component {
  static navigationOptions = {
    title: 'Main',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Profile' })
              ],
            }))
          }}
        />
      </View>
    )
  }
}

class Sub extends React.Component {
  static navigationOptions = {
    title: 'Sub',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
// export default class App extends Component<Props> {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     let bigTextArea = {}; //[Style.Colors.blue, Style.BackgroundColor.red, Style.Size.h200, Style.TextAlign.center];
//     return (
//       <SafeAreaView style={{
//         flex: 1,
//         backgroundColor: '#ddd'
//       }}>
//         <Main />
//       </SafeAreaView>
//     );
//   }
// }
const MainNavigator = createStackNavigator({
    Home: {screen: Main},
    Profile: {screen: Sub},
    // Details: {screen: Details},
});
const App = createAppContainer(MainNavigator);
export default App;

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
