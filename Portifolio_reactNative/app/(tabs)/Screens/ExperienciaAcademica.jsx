import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Habilidades() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Experiências Acadêmicas</Text>
        <Text style={styles.habilidade}>- Arduino com C++ para mini-projetos em Robótica e para o projeto da Luva Sensorial</Text>
        <Text style={styles.habilidade}>- Python em uso no Google Collab e Jupyter Notebook para gerar gráficos</Text>
        <Text style={styles.habilidade}>- Next.js para mini-projeto de portifólio e projeto do MED-ORG</Text>
        <Text style={styles.habilidade}>- React Native para o desenvolvimento dos aplicativos MED-ORG ESG Relatórios Automáticos e mini-projeto de portifólio</Text>
        <Text style={styles.habilidade}>- Automação com N8n para a geração de documentos PDD em PDF</Text>
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