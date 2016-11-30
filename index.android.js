import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  WebView
} from 'react-native';

export default class rnWebviewPostMessage extends Component {
  render() {
    return (
      <View>
        <WebView
          source={require('./index.html')}
          onMessage={(msg) => { console.log(msg); alert(msg) }}
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('rnWebviewPostMessage', () => rnWebviewPostMessage);
