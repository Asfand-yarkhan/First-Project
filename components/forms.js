// import React, {useState} from 'react';
// import {Alert, Button, Text, View, StyleSheet, TextInput} from 'react-native';

// const Form = () => {
//   const [name, setname] = useState('');
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//   const Done = () => {
//     if (name == '' || email == '' || password == '') {
//       Alert.alert('Please fill all the fields');
//     } else {
//       Alert.alert('Registration Successfull' ,
//         `\nName =${name}\nEmail = ${email} \nPassword =${password}` );
     
//       setname('');
//       setemail('');
//       setpassword('');
//     }
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center'}}>
//       <View style={styles.header}>
//         <Text style={styles.textbox}>Registration Form</Text>
//       </View>

//       <View style={{flex: 0.4}}>
//         <Text style={styles.text}>Enter your name:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Write here"
//           onChangeText={text => setname(text)}
//           value={name}></TextInput>
//         <Text style={styles.text}>Enter your E-mail:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Write here"
//           onChangeText={text => setemail(text)}
//           value={email}></TextInput>

//         <Text style={styles.text}>Enter your Password:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Write here"
//           onChangeText={text => setpassword(text)}
//           value={password}
//           secureTextEntry={true}></TextInput>
//       </View>

//       <View style={{flex: 0.05, margin: 10}}>
//         <Button title="Submit" onPress={Done}></Button>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   header: {
//     flex: 0.15,
//     justifyContent: 'center',
//   },
//   textbox: {
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: 'blue',
//   },
//   input: {
//     borderColor: 'black',
//     borderWidth: 1,
//     margin: 10,
//     borderRadius: 5,
//   },
//   text: {
//     fontSize: 17,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });

// export default Forms;
