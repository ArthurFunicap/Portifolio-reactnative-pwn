import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Habilidades() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Linguagens</Text>
        <Text style={styles.habilidade}>- C</Text>
        <Text style={styles.habilidade}>- C#</Text>
        <Text style={styles.habilidade}>- Python</Text>
        <Text style={styles.habilidade}>- JavaScript</Text>
        <Text style={styles.habilidade}>- React Native</Text>
        <Text style={styles.habilidade}>- HTML5</Text>
        <Text style={styles.habilidade}>- SQL</Text>
        <Text style={styles.habilidade}>- Git e GitHub</Text>
        <Text style={styles.titulo}>Outros</Text>
        <Text style={styles.habilidade}>- Supabase</Text>
        <Text style={styles.habilidade}>- N8n (automação) </Text>
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