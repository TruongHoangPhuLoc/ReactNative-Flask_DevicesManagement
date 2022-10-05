import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginView from './Views/LoginView';
import HomeView from './Views/HomeView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
    const fetchData = async(url) => {
    const result = await fetch(url);
    const data = await result.json();
    return JSON.parse(data);
  }
  return (
    // <View style={styles.container}>
    //   <LoginView fetchData={fetchData}/>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
          {/* <Stack.Screen name = 'Login' children={()=><LoginView fetchData={fetchData}/>}></Stack.Screen> */}
          <Stack.Screen name = 'Login' component={LoginView} options={{title:'Sign in'}}/>
          <Stack.Screen name = 'Home' component = {HomeView}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebee'
  },
});
