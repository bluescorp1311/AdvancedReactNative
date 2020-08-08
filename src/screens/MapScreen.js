import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import MapView from 'react-native-maps';
import OfflineNotice from '../components/OfflineNotice';

class MapScreen extends Component {
  state = {
    isConnected: true,
    mapLoaded: false,
    region: {
      latitude: 21.028511,
      longitude: 105.804817,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  componentDidMount() {
    this.setState({
      mapLoaded: true,
    });
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <MapView style={{flex: 1}} region={this.state.region} />
        <OfflineNotice />
      </View>
    );
  }
}

export default MapScreen;
