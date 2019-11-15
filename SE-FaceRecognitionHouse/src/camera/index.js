import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
// import { ImagePicker } from 'expo';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
// import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends React.Component {
  state = {
    image: null,
    isLoading: false
  };

  selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    });
    if (!cancelled) this.setState({ image: uri });
  };

  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    this.setState({ image: uri });
  };

  uploadPicture = async () => {
    
    this.setState({
      isLoading: true
    });
    // console.log(this.state.image);
    const data = new FormData();
    data.append('photo', {
      uri: this.state.image,
      type: 'image/jpg', // or photo.type
      name: 'FaceRecognitionName'
    });

    fetch("http://192.168.0.14:5000/Upload", {
      method: 'post',
      body: data
    }).then( response => response.json())
    .then(data => {
      console.log(data);
      if(data == 'Unknown'){
        this.setState({
          isLoading: false
        });
        alert(data);
        
      }else{
        alert(data);
        this.setState({
          isLoading: false
        });
      }
      
    });

  };

  render() {
    const spinner=this.state.isLoading ? <ActivityIndicator size='large'/> :null
    return (
      <View style={styles.container}>
        {spinner}
        <Image style={styles.image} source={{ uri: this.state.image }} />
        <View style={styles.row}>
          <Button onPress={this.selectPicture}>Gallery</Button>
          <Button onPress={this.takePicture}>Camera</Button>
          <Button onPress={this.uploadPicture}>Upload</Button>
        </View>
      </View>
    );
  }
}

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  text: {
    fontSize: 21,
  },
  row: { flexDirection: 'row' },
  image: { width: 300, height: 300, backgroundColor: 'gray' },
  button: {
    padding: 13,
    margin: 15,
    backgroundColor: '#dddddd',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
