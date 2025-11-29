import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { TextInput, Button } from "react-native";

export default function Forca() {
    const palavras = ["react", "native", "mobile", "web", "unicap", "turing", "computação"];

    const [palavra, setPalavra] = useState(
        palavras[Math.floor(Math.random() * palavras.length)]
    );

    const [tentativas, setTentativas] = useState([]);
    const [letra, setLetra] = useState("");
    const [erros, setErros] = useState(0);

    const verificarLetra = (char) => {
        if (!tentativas.includes(char)) {
            setTentativas([...tentativas, char]);
    
            if (!palavra.includes(char)) {
                setErros(erros + 1);
            }
        }
    };

    const renderPalavra = () => {
        return palavra
            .split("")
            .map((l) => (tentativas.includes(l) ? l : "_"))
            .join(" ");
    };

    const reiniciarJogo = () => {
        setPalavra(palavras[Math.floor(Math.random() * palavras.length)]);
        setTentativas([]);
        setErros(0);
    };

    const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Jogo da Forca</Text>
            <Text style={styles.palavra}>{renderPalavra()}</Text>
            <Text style={styles.erros}>Erros: {erros}/6</Text>
            <View style={styles.teclado}>
                {alfabeto.map((char) => (
                    <Pressable
                        style={styles.estiloBotao}
                        key={char}
                        onPress={() => verificarLetra(char)}
                        disabled={tentativas.includes(char)}
                    >
                        <Text style={styles.corLetra}>{char.toUpperCase()}</Text>
                    </Pressable>
                ))}
            </View>
            {erros >= 6 && (
                <Text style={styles.mensagem}>Você perdeu! A palavra era "{palavra}".</Text>
            )}
            {!renderPalavra().includes("_") && (
                <Text style={styles.mensagem}>Parabéns! Você venceu!</Text>
            )}
            <Button title="Reiniciar Jogo" onPress={reiniciarJogo} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    palavra: {
        fontSize: 32,
        letterSpacing: 2,
        marginBottom: 20,
    },
    erros: {
        fontSize: 18,
        color: "red",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: "80%",
        marginBottom: 20,
        paddingHorizontal: 10,
        textAlign: "center",
    },
    mensagem: {
        fontSize: 18,
        color: "green",
        marginVertical: 20,
    },
    teclado: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 20,
    },
    estiloBotao: {
        backgroundColor: 'rgba(73, 108, 204, 0.85)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    corLetra: {
        color: '#fff',
        fontWeight: 'bold'
    },
});