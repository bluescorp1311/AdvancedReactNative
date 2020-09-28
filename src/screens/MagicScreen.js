import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {Magic} from '@magic-sdk/react-native';

const m = new Magic('pk_test_3754C9A92E8C8D8A');
console.log('MAGIC ===> ', m);

export class MagicScreen extends Component {
  onLoginWithMagic = () => {
    try {
      m.auth
        .loginWithMagicLink({email: 'viettuandinh@gmail.com'})
        .then((response) => {
          console.log('magic response ===> ', response);
        });
    } catch (error) {
      console.log('magic error: ', error);
    }
  };

  onGetInfoWithMagic = () => {
    try {
      console.log('onGetWithMagic ===> ', m.user);
      m.user.getMetadata().then((response) => {
        console.log('magic info response ===> ', response);
      });
    } catch (error) {
      console.log('magic info error: ', error);
    }
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <m.Relayer />
        <Button title="Login" onPress={this.onLoginWithMagic} />
        <Button title="Get info" onPress={this.onGetInfoWithMagic} />
      </View>
    );
  }
}

export default MagicScreen;
