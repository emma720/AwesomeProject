import React from 'react';

import {
    View,
    Button,
  } from 'react-native';

  
  


const HomeScreen = ({ navigation }) => {
    return (
      <View >
        <Button
          title="Go to first Screen"
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
        <Button
          title="Go to Form Screen"
          onPress={() =>
            navigation.navigate('FormScreen')
          }
        />
      </View>

      
    );
  };


  export default HomeScreen;