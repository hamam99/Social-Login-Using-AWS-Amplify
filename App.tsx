import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Button} from '@rneui/themed';

const App = () => {
  const loginWithFacebook = () => {};

  const loginWithGoogle = () => {};
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 16,
        justifyContent: 'center',
      }}>
      <Text style={{fontWeight: 'bold', marginBottom: 32, fontSize: 20}}>
        Social Login Using AWS Amplify
      </Text>
      <Button
        title="Login With Facebook"
        icon={{
          name: 'facebook',
          type: 'font-awesome',
          size: 14,
          color: 'white',
        }}
        // icon={require('./src/assets/facebook.png')}
        iconContainerStyle={{marginRight: 16}}
        iconPosition={'left'}
        titleStyle={{
          color: 'white',
        }}
        buttonStyle={{
          backgroundColor: 'rgba(90, 154, 230, 1)',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 5,
          justifyContent: 'flex-start',
          width: 200,
        }}
        onPress={loginWithFacebook}
      />

      <Button
        title="Login With Google"
        iconPosition={'left'}
        icon={{
          name: 'google',
          type: 'font-awesome',
          size: 14,
          color: 'white',
          // color: '#0F9D58',
        }}
        // icon={require('./src/assets/facebook.png')}
        iconContainerStyle={{marginRight: 16}}
        titleStyle={{
          color: 'white',
        }}
        buttonStyle={{
          backgroundColor: '#0F9D58',
          borderColor: 'transparent',
          borderRadius: 5,
          // justifyContent: 'flex-start',
          justifyContent: 'flex-start',
          width: 200,
        }}
        containerStyle={{
          marginTop: 16,
        }}
        onPress={loginWithGoogle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
