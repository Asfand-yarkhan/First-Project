import React from 'react';
import {
  Alert,
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const images = {
    quran: require('./assets/images/quran.gif'),
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.4,
          backgroundColor: 'lightblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, margin: 25}}>Quran</Text>
        <Image source={images.quran} style={{width: 80, height: 80}} />
      </View>

      <View style={{flex: 0.9, borderRadius: 20, backgroundColor: 'lightgrey'}}>
        <Text style={styles.feature }> FEATURES </Text>
      <View style={{flex:0.4,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
        <TouchableOpacity style={styles.button}>
          <Image source={require('./assets/images/quran.gif')} style={{width:40,height:40,marginBottom:15}}/>
          <Text>Read Quran</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/images/quran.gif')} style={{width:40,height:40,marginBottom:15}}/>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:0.4, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
      <TouchableOpacity style={styles.button}>
      <Image source={require('./assets/images/quran.gif')} style={{width:40,height:40,marginBottom:15}}/>
          <Text >Book Mark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/images/quran.gif')} style={{width:40,height:40,marginBottom:15}}/>
          <Text>Setting</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  feature:
  {
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 40,
    borderRadius: 10,
    width: '45%',
    height: '75%',
  },
});
export default App;
