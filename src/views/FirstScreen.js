
import React from 'react';

import {
  useState
} from 'react';

import {
    View,
    Button,
    TextInput,
    Text,
  } from 'react-native';




const FirstScreen = ({ navigation} ) => {
    return (
      <View >
          <Button
          title="Go back"
          onPress ={()=> navigation.goBack()}
          />
            <Button
          title="Go to Second Screen"
          onPress={() =>
            navigation.navigate('SecondScreen')
          }
        />
  
      </View>
  
    );
    
  };


  export default FirstScreen;