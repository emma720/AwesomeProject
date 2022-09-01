import React from 'react';

import {
    View,
    Button,
  } from 'react-native';

  
  


const HomeScreen = ({ navigation }) => {
    return (
      <View >
        <Button
          title="Go to First Screen"
          onPress={() =>
            navigation.navigate('FirstScreen')
          }
        />
        <Button
          title="Go to Stats Screen"
          onPress={() =>
            navigation.navigate('StatsScreen')
          }
        />
      </View>
    );
  };


  export default HomeScreen;