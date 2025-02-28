// import React from 'react';
// import {View, Text, FlatList, TouchableOpacity} from 'react-native';

// const App = () => {
//   const myarray = [
//     {
//       id: '1',
//       name: 'Asfand',
//       age: 23,
//     },
//     {
//       id: '2',
//       name: 'Ali',
//       age: 24,
//     },
//     {
//       id: '3',
//       name: 'Ahmed',
//       age: 25,
//     },
//   ];
//   return (
//     <View style={{flex: 1}}>
//       <View style={{flex: .3, backgroundColor: 'green'}}>
//         <FlatList
//           data={myarray}
//           keyExtractor={item => item.id}
//           renderItem={({item}) => (
//             <View
//               style={{backgroundColor: 'lightblue', margin: 10, padding: 10}}>
//               <Text>Id :{item.id}</Text>
//               <Text>Name :{item.name}</Text>
//               <Text>Age :{item.age}</Text>
//             </View>
//           )}
//         />
//       </View>
//       <View
//         style={{flex: 1, backgroundColor: 'lightgrey', flexDirection: 'row',justifyContent:'space-around'}}>
//         <View style={{flex: 50, alignItems: 'center'}}>
//           <TouchableOpacity
//             style={{
//               backgroundColor: 'green',
//               padding: 10,
//               margin: 10,
//               borderRadius: 10,
//             }}>
//             <Text style={{fontSize: 18}}>Sign Up</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{flex: 50, alignItems: 'center'}}>
//           <TouchableOpacity
//             style={{
//               backgroundColor: 'green',
//               padding: 10,
//               margin: 10,
//               borderRadius: 10,
//             }}>
//             <Text style={{fontSize: 18}}>Sign In</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default App;
