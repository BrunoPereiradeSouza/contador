import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ContadorSimples() {
  // Estado para armazenar o valor do contador
  const [contador, setContador] = useState(0);
  const [mostrarMsg, setMostrarMsg] = useState(false);

  // Funções para manipular o contador usando declaração de função normal
  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  function resetar() {
    setContador(0);
    setMostrarMsg(true);


    setTimeout(() => {
    setMostrarMsg(false);
  }, 2000);
  }

  return (
    <View style={styles.container}>
      {/* Título do App */}
      <Text style={styles.titulo}>Contador App</Text>

      {/* Valor do Contador */}
      <View style={styles.contador}>
        <Text style={styles.contadorText}>{contador}</Text>
      </View>

      {mostrarMsg && (
        <Text style={[styles.resetText, styles.colorGray]}>Contador reiniciado!</Text>
      )}

      {/* Botões de Controle - Usando o componente Button padrão */}
      <View style={styles.botoes}>
        <Pressable style={[styles.btn, styles.backgroundRed]} onPress={diminuir}>
          <Text style={styles.btnText}>-</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.backgroundGray]} onPress={resetar}>
          <Text style={styles.btnText}>Reset</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.backgroundBlue]} onPress={aumentar}>
          <Text style={styles.btnText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.expoContainer}>
        <Text style={styles.colorGray}>Aprenda React Native com Expo!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  contador: {
    marginBottom: 30,
    width: 120,
    height: 120,
    elevation: 5,
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  contadorText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  resetText: {
    marginTop: 5,
    marginBottom: 30,
  },
  botoes: {
    flexDirection: 'row',
    width: '80%',
    color: 'white',
    justifyContent: 'space-between',
  },
  btn: {
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70, 
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
  backgroundRed: {
    backgroundColor: 'red',
  },
  backgroundGray: {
    backgroundColor: 'gray',
  },
  backgroundBlue: {
    backgroundColor: 'blue',
  },
  expoContainer: {
    position: 'absolute',
    bottom: 20,
  },
  colorGray: {
    color: "gray",
  },
});
