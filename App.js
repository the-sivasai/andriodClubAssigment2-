import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text> 
       'Welcome! This is Siva Sai, 20MIS1189 

      </Text>

      <TextInput 
      style = {{  
        height: 50,
        width: 300,
        margin: 20,
        borderWidth: 1,
        padding: 10}}
      placeholder = 'Username'/>
      
      <TextInput 
      style = {{  
        height: 50,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10}}
      placeholder = 'Password'
      secureTextEntry={true} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dae7e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
