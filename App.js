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
import fontawesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.4,
          backgroundColor: 'lightblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, margin: 20}}>Quran</Text>
        <Image source={{uri:'https://parspng.com/wp-content/uploads/2022/09/quranpng.parspng.com-12.png'}} style={{width: 80, height: 80}} />
      </View>

      <View style={{flex: 0.9, borderRadius: 20}}>
        <Text style={styles.feature}> FEATURES </Text>
      <View style={{flex:0.4,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
        <TouchableOpacity style={styles.button}>
          <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/021/886/069/non_2x/illustration-of-the-holy-quran-book-book-islamic-icons-can-be-used-for-the-month-of-ramadan-eid-and-eid-al-adha-for-logo-website-and-poster-designs-free-vector.jpg'}} style={{width:40,height:40,marginBottom:15}}/>
          <Text>Read Quran</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/021/886/069/non_2x/illustr ation-of-the-holy-quran-book-book-islamic-icons-can-be-used-for-the-month-of-ramadan-eid-and-eid-al-adha-for-logo-website-and-poster-designs-free-vector.jpg'}} style={{width:40,height:40,marginBottom:15}}/>
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
   // backgroundColor: 'green',
    padding: 40,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 2,
    borderBlockWidth: 2,
    width: '45%',
    height: '75%',
  },
});
export default App ;
