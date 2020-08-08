import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastIndex = (index) => {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title={'Onwards!'}
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  };

  renderSlides = () => {
    return this.props.data.map((slide, index) => (
      <View
        key={slide.text}
        style={[styles.slideStyle, {backgroundColor: slide.color}]}>
        <Text style={styles.textStyle}>{slide.text}</Text>
        {this.renderLastIndex(index)}
      </View>
    ));
  };

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={styles.container}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
  },
  textStyle: {
    fontSize: 25,
    color: '#FFFFFF',
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15,
  },
});

export default Slides;
