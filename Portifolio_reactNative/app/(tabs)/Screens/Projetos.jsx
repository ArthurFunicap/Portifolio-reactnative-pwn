import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Habilidades() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Projetos</Text>
        <Text style={styles.habilidade}>- Luva Sensorial (Robótica)</Text>
        <Text style={styles.habilidade}>- Automação para geração de Pipeline de Documentos PDD - Process Definition Document (Residência Avanade)</Text>
        <Text style={styles.habilidade}>- MED-ORG (React Native)</Text>
        <Text style={styles.habilidade}>- Jogo da Forca (React Native)</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  habilidade: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center'
  },
});