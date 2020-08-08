import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Review Jobs',
      headerRight: () => (
        <Button
          title={'Settings'}
          onPress={() => {
            navigation.navigate('settings');
          }}
          type={'clear'}
        />
      ),
    };
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default ReviewScreen;
