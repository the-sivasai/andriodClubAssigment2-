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
        height: 40,
        width: 200,
        margin: 20,
        borderWidth: 1,
        padding: 10}}
      placeholder = 'Username'/>
      
      <TextInput 
      style = {{  
        height: 40,
        width: 200,
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
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});