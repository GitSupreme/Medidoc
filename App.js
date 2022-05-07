import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerViewTop}>
        <ImageBackground source={require('./images/bgImage.jpg')} resizeMode ="stretch" style={styles.image}>
          
            <Text>
              Welcome to Medidoc
            </Text>
        </ImageBackground>
         
      </View>

      <View style={styles.innerViewBottom}>
            <Text>
              "Button Here"
            </Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center"
  },
  innerViewTop: {
    flex: 3,
    alignSelf: "stretch",
    alignItems:"center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  innerViewBottom: {
    flex: 1, 
    alignItems:"center",
    justifyContent: "center",
    backgroundColor: "darkorange",
  }

});
