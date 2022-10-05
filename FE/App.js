import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginView from './Views/LoginView';

export default function App() {

  const fetchData = async(url) => {
    const result = await fetchData(url);
    const data = await result.json();
    return data;
  }
  return (
    <View style={styles.container}>
      <LoginView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebee'
  },
});
