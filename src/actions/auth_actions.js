import * as types from './types';
import AsyncStorage from '@react-native-community/async-storage';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export const facebookLogin = () => async (dispatch) => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    dispatch(facebookLoginSuccess(token));
  } else {
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async (dispatch) => {
  try {
    let result = await LoginManager.logInWithPermissions(['public_profile']);
    console.log('LoginManager: ', result);
    if (result.isCancelled) {
      console.log('Login cancelled');
      dispatch(facebookLoginFail());
    } else {
      console.log(
        'Login success with permissions: ' +
          result.grantedPermissions.toString(),
      );
      const data = await AccessToken.getCurrentAccessToken();
      console.log('getCurrentAccessToken: ', data.accessToken);
      AsyncStorage.setItem('fb_token', data.accessToken);
      dispatch(facebookLoginSuccess(data.accessToken));
    }
  } catch (error) {
    console.log('Login fail with error: ', error);
  }
};

const facebookLoginSuccess = (token) => {
  return {
    type: types.FACEBOOK_LOGIN_SUCCESS,
    payload: token,
  };
};

const facebookLoginFail = () => {
  return {type: types.FACEBOOK_LOGIN_FAIL};
};
