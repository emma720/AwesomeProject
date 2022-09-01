
import React from 'react';
import {
    View,
    Button,
    FlatList,
    Text,
    ActivityIndicator,
  } from 'react-native';

import {useState, useEffect} from 'react';
  
const SecondScreen = ({navigation}) =>{
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] =useState([])
  
    const getMovies = async () => {
      try{
          const resp = await fetch("https://reactnative.dev/movies.json");
          const data = await resp.json();
          setMovies(data.movies);
      }
      catch(error){
          console.error(error);
      }
     finally {
      setLoading(false);
    }
      
    };
  
    useEffect(() => {
      getMovies();
    }, []);
  
    return (
    <View>
        <Button title = "Go To Stats Screen" onPress={() => navigation.navigate("StatsScreen")}/>
      <Button title = "Go Back to Home Screen" onPress ={()=> navigation.popToTop()}/>
      {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={movies}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
    </View>
    );
  }
  


export default SecondScreen;