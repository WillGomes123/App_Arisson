import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
     <Image source={require('../../Images/logo.svg')}/>

     <TextInput style={styles.Input} placeholder='Usuário'/>

    <TouchableOpacity style={styles.buttonEnter}>
        <Text>
            ENTRAR
        </Text>
    </TouchableOpacity>
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
  buttonEnter:{
    
display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
padding: 14,
gap: 10,

position: 'absolute',
width: 250,
height: 36,

top: 675,

backgroundColor: '#2129ED',
borderRadius: 14

  },
  Input:{
   
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 8,
    gap: 8,

    position: 'absolute',
    width: 390,
    height: 33,
    left: 33,
    top: 566,



    /* Usuario: */

    width: 123,
    height: 17, 

    color: '#6F6F72',
  }
});
