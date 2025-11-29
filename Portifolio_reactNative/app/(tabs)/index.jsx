import { Image } from 'expo-image';
import { Platform, ScrollView, StyleSheet, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.viewText}>
            <Text style={styles.text}>
              Bem-vindo
            </Text>
          </View>
          <View style={styles.botao}>
            <Pressable style={styles.estiloBotao} onPress={() => router.push("/(tabs)/Screens/Main")}>
              <Text style={styles.textoBotao}>Acessar Portifólio</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(73, 108, 204, 0.85)'
  },
  viewText: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  estiloBotao: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  textoBotao: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#fff'
  },
})

export default App;