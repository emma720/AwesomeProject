
import React from 'react';

import {
    View,
    Button,
  } from 'react-native';



const FirstScreen = ({ navigation} ) => {
    return (
      <View >
           {/* <Button
          title = "Go to First Screen"
          onPress ={()=> navigation.push('FirstScreen')}
          /> */}
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