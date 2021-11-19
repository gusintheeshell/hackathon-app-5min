import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [showImage, setShowImage] = useState(false);

  const toogleImage = () => {
    setShowImage(!showImage);
  }
  
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => toogleImage()}>
        {showImage ? (
          <Image source={require('./assets/images.png')} style={{ width: 300, height: 300}} />
        ) : (
          <Image source={require('./assets/nicolas-cage-meme.jpg')} style={{ width: 300, height: 300 }} />
        )
        }
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
