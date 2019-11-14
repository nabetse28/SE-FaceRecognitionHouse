import * as React from 'react';
import {
//   AsyncStorage,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import index from '../assets/icon.png';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Camera', params: {} })]
});

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: '',
      password: '',
      userData: '',
      userName: ''
    };
  }

  _onLogin = () => {
    this.props.navigation.dispatch(resetAction);
    // fetch(URL + this.state.userName)
    //   .then(response => response.json())
    //   .then(data => {
    //     try {
    //       if (data) {
    //         let userData = JSON.parse(JSON.stringify(data[0]));
    //         this._storeData(userData);
    //         if (this.state.password == userData.password) {
    //           this.props.navigation.dispatch(resetAction);
    //         } else {
    //           alert('Incorrect password');
    //         }
    //       } else {
    //         alert("Username doesn't exist");
    //       }
    //     } catch (error) {
    //       alert('Unable to fetch data');
    //     }
    //   });
  };

  _onPasswordChange = event => {
    this.setState({
      password: event.nativeEvent.text
    });
  };

  _onSignup = () => {
    this.props.navigation.navigate('SignUp');
  };

  _storeData = async data => {
    // try {
    //   await AsyncStorage.setItem('_id', data._id);
    //   await AsyncStorage.setItem('name', data.name);
    //   await AsyncStorage.setItem('lastName', data.lastName);
    //   await AsyncStorage.setItem('userName', data.userName);
    //   await AsyncStorage.setItem('password', data.password);
    // } catch (error) {
    //   console.log("Can't store data");
    // }
  };

  _onUserChange = event => {
    this.setState({
      userName: event.nativeEvent.text
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} resizeMode={'contain'} source={index} />
          <Text style={styles.text}>LOGIN</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={false}
        >
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              placeholder="Username"
              placeholderTextColor="rgba(225,225,225,0.7)"
              onChange={this._onUserChange}
            />
            <TextInput
              style={styles.input}
              returnKeyType="go"
              ref={input => (this.passwordInput = input)}
              onChange={this._onPasswordChange}
              placeholder="Password"
              placeholderTextColor="rgba(225,225,225,0.7)"
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this._onLogin}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account yet? </Text>
          <TouchableOpacity onPress={this._onSignup}>
            <Text style={styles.signupButton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: '10%',
    width: 250,
    height: 150
  },
  text: {
    fontSize: 40,
    color: 'white'
  },
  scrollView: {
    width: '100%'
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.3)',
    color: '#ffffff',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginVertical: 5
  },
  buttonContainer: {
    width: 300,
    borderRadius: 25,
    marginVertical: 5,
    paddingVertical: 12,
    backgroundColor: '#2980b6'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    textAlign: 'center'
  },
  signupContainer: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgba(225,225,225,0.2)',
    fontSize: 16
  },
  signupButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500'
  }
});