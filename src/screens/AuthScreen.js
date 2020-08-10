import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
  Dimensions,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import axios from 'axios';

const {height} = Dimensions.get('window');

const dummyData = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    isChecked: false,
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
    isChecked: false,
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    isChecked: false,
  },
  {
    albumId: 1,
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    isChecked: false,
  },
  {
    albumId: 1,
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    url: 'https://via.placeholder.com/600/f66b97',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    isChecked: false,
  },
  // {
  //   albumId: 1,
  //   id: 6,
  //   title: 'accusamus ea aliquid et amet sequi nemo',
  //   url: 'https://via.placeholder.com/600/56a8c2',
  //   thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
  // },
  // {
  //   albumId: 1,
  //   id: 7,
  //   title: 'officia delectus consequatur vero aut veniam explicabo molestias',
  //   url: 'https://via.placeholder.com/600/b0f7cc',
  //   thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
  // },
  // {
  //   albumId: 1,
  //   id: 8,
  //   title: 'aut porro officiis laborum odit ea laudantium corporis',
  //   url: 'https://via.placeholder.com/600/54176f',
  //   thumbnailUrl: 'https://via.placeholder.com/150/54176f',
  // },
  // {
  //   albumId: 1,
  //   id: 9,
  //   title: 'qui eius qui autem sed',
  //   url: 'https://via.placeholder.com/600/51aa97',
  //   thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
  // },
  // {
  //   albumId: 1,
  //   id: 10,
  //   title: 'beatae et provident et ut vel',
  //   url: 'https://via.placeholder.com/600/810b14',
  //   thumbnailUrl: 'https://via.placeholder.com/150/810b14',
  // },
  // {
  //   albumId: 1,
  //   id: 11,
  //   title: 'nihil at amet non hic quia qui',
  //   url: 'https://via.placeholder.com/600/1ee8a4',
  //   thumbnailUrl: 'https://via.placeholder.com/150/1ee8a4',
  // },
  // {
  //   albumId: 1,
  //   id: 12,
  //   title:
  //     'mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores',
  //   url: 'https://via.placeholder.com/600/66b7d2',
  //   thumbnailUrl: 'https://via.placeholder.com/150/66b7d2',
  // },
  // {
  //   albumId: 1,
  //   id: 13,
  //   title: 'repudiandae iusto deleniti rerum',
  //   url: 'https://via.placeholder.com/600/197d29',
  //   thumbnailUrl: 'https://via.placeholder.com/150/197d29',
  // },
  // {
  //   albumId: 1,
  //   id: 14,
  //   title: 'est necessitatibus architecto ut laborum',
  //   url: 'https://via.placeholder.com/600/61a65',
  //   thumbnailUrl: 'https://via.placeholder.com/150/61a65',
  // },
  // {
  //   albumId: 1,
  //   id: 15,
  //   title: 'harum dicta similique quis dolore earum ex qui',
  //   url: 'https://via.placeholder.com/600/f9cee5',
  //   thumbnailUrl: 'https://via.placeholder.com/150/f9cee5',
  // },
  // {
  //   albumId: 1,
  //   id: 16,
  //   title: 'iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt',
  //   url: 'https://via.placeholder.com/600/fdf73e',
  //   thumbnailUrl: 'https://via.placeholder.com/150/fdf73e',
  // },
  // {
  //   albumId: 1,
  //   id: 17,
  //   title: 'natus doloribus necessitatibus ipsa',
  //   url: 'https://via.placeholder.com/600/9c184f',
  //   thumbnailUrl: 'https://via.placeholder.com/150/9c184f',
  // },
  // {
  //   albumId: 1,
  //   id: 18,
  //   title: 'laboriosam odit nam necessitatibus et illum dolores reiciendis',
  //   url: 'https://via.placeholder.com/600/1fe46f',
  //   thumbnailUrl: 'https://via.placeholder.com/150/1fe46f',
  // },
  // {
  //   albumId: 1,
  //   id: 19,
  //   title: 'perferendis nesciunt eveniet et optio a',
  //   url: 'https://via.placeholder.com/600/56acb2',
  //   thumbnailUrl: 'https://via.placeholder.com/150/56acb2',
  // },
  // {
  //   albumId: 1,
  //   id: 20,
  //   title:
  //     'assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error',
  //   url: 'https://via.placeholder.com/600/8985dc',
  //   thumbnailUrl: 'https://via.placeholder.com/150/8985dc',
  // },
];

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export class AuthScreen extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      position: 0,
      isLoading: false,
    };
    this.arrDataNeedsToMove = [];
  }

  UNSAFE_componentWillUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async (number) => {
    this.setState({isLoading: true});
    try {
      let data = await axios.get(
        'https://jsonplaceholder.typicode.com/photos?_start=1&_limit=10',
      );
      // data = await data.json();
      console.log('fetchData: ', data.data);
      const listData = this.state.dummyData;
      const splitData = listData.concat(data.data);
      this.setState({
        isLoading: false,
        dummyData: splitData,
      });
    } catch (error) {
      console.log('fetchData error: ', error);
    }
  };

  renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.isCheckedOrNot(index);
            this.dataNeedsToMove(item);
            this.setState(
              {
                index: index,
              },
              () => {
                this.handleScroll();
              },
            );
          }}
          style={styles.item}>
          <CheckBox
            center
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={item.isChecked}
          />
          <Image source={{uri: item.thumbnailUrl}} style={styles.thumbNail} />
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
        {this.separator(index)}
      </View>
    );
  };

  isCheckedOrNot = (index) => {
    this.state.dummyData[index].isChecked = !this.state.dummyData[index]
      .isChecked;
  };

  handleScroll = () => {
    setTimeout(() => {
      // console.log('onContentSizeChange index: ', this.state.index);
      this.flatListRef.scrollToOffset({
        animated: true,
        offset: this.state.position - height / 2,
      });
    }, 100);
  };

  dataNeedsToMove = (data) => {
    const unduplicated = this.arrDataNeedsToMove.every(
      (item) => item.id !== data.id,
    );
    if (unduplicated) {
      this.arrDataNeedsToMove.push(data);
    } else {
      const arrAfterDelete = this.arrDataNeedsToMove.filter(
        (item) => item.id !== data.id,
      );
      this.arrDataNeedsToMove = arrAfterDelete;
    }
    console.log('dataNeedsToMove: ', this.arrDataNeedsToMove);
  };

  movingElement(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      let k = new_index - arr.length;
      while (k-- + 1) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  }

  separator = (index) => {
    if (this.arrDataNeedsToMove.length === 0) {
      return null;
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            this.arrDataNeedsToMove = [];
            this.state.dummyData[this.state.index].isChecked = false;
            const arrAfterMove = this.movingElement(
              this.state.dummyData,
              this.state.index,
              index,
            );
            this.setState({
              dummyData: arrAfterMove,
            });
          }}
          style={styles.separator}>
          <Text>Move Here</Text>
        </TouchableOpacity>
      );
    }
  };

  render() {
    console.log('arrBeforeMove: ', this.state.dummyData);

    return (
      <FlatList
        ref={(ref) => {
          this.flatListRef = ref;
        }}
        data={this.state.dummyData}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        // ItemSeparatorComponent={this.separator}
        onContentSizeChange={(width, height) => {
          // console.log('onContentSizeChange: ', height);
          const position =
            (height / this.state.dummyData.length) * this.state.index;
          this.setState({
            position,
          });
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  thumbNail: {
    width: 40,
    height: 40,
  },
  text: {
    flex: 1,
    padding: 5,
  },
  separator: {
    flex: 1,
    alignSelf: 'center',
    borderWidth: 1,
    padding: 5,
  },
});
export default AuthScreen;

//D:\DOCUMENTS\Workspace\AdvancedReactNative\android\app\debug.keystore
