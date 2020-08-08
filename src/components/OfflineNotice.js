import React, {PureComponent} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const {width} = Dimensions.get('window');

const OfflineSign = () => {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
};

export class OfflineNotice extends PureComponent {
  state = {
    isConnected: true,
  };

  componentDidMount() {
    NetInfo.addEventListener(this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(this.handleConnectivityChange);
  }

  handleConnectivityChange = (isConnected) => {
    this.setState({isConnected});
  };

  render() {
    if (!this.state.isConnected) {
      return <OfflineSign />;
    }
    return null;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
  },
  offlineText: {
    color: '#fff',
  },
});

export default OfflineNotice;
