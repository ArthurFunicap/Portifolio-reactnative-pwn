import {View, Text, Pressable, ScrollView, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function Main() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Image 
            source={require('../../../assets/images/fotoPerfil.jpeg')}
            style={styles.foto}
          />
          
          <Text style={styles.nome}>Arthur Felipe Leite de Vasconcelos</Text>

          <Text style={styles.textoBio}>
            - Curso Ciência da Computação na Universidade Católica de Pernambuco (UNICAP)
          </Text>
          <Text style={styles.textoBio}>
            - Tenho interesse nas áreas de Inteligcia Artificial e Ciência de Dados
          </Text>
          <Text style={styles.textoBio}>
            - Nas horas vagas, ou estou estudando ou estou jogando
          </Text>
          <Text style={styles.textoBio}>
            - Super recomendo assistirem Jojo's Bizarre Adventure e Hunter x Hunter!
          </Text>

          <View style={styles.botoes}>
            <Pressable style={styles.estiloBotao} onPress={() => router.push("/(tabs)/Screens/Habilidades")}>
              <Text style={styles.textoBotao}>Habilidades</Text>
            </Pressable>

            <Pressable style={styles.estiloBotao} onPress={() => router.push("/(tabs)/Screens/ExperienciaAcademica")}>
              <Text style={styles.textoBotao}>Experiência Acadêmica</Text>
            </Pressable>

            <Pressable style={styles.estiloBotao} onPress={() => router.push("/(tabs)/Screens/Projetos")}>
              <Text style={styles.textoBotao}>Projetos</Text>
            </Pressable>

            <Pressable style={styles.estiloBotao} onPress={() => router.push("/(tabs)/Screens/Forca")}>
              <Text style={styles.textoBotao}>Forca!</Text>
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
    alignItems: 'center',
  },
  viewText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: '#fff'
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 20
  },
  nome: {
    fontSize: 25,
    fontWeight: "bold"
  },
  textoBio: {
    marginTop: 10,
    textAlign: "justify",
    marginHorizontal: 20,
    fontSize: 16
  },
  botoes: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-around",
    height: 150,
    width: "100%"
  },
  estiloBotao: {
    backgroundColor: 'rgba(73, 108, 204, 0.85)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    height: 40,
    width: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold"
  }
});