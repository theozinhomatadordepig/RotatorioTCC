import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Veiculos')}
          >
            <Image
              source={require('../assets/iconeveiculo.png')}
              style={styles.icon}
            />
            <Text style={styles.cardText}>veículos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Credito')}
          >
            <Image
              source={require('../assets/iconecredito.png')}
              style={styles.icon}
            />
            <Text style={styles.cardText}>crédito</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Localizacao')}
          >
            <Image
              source={require('../assets/iconeloc.png')}
              style={styles.icon}
            />
            <Text style={styles.cardText}>localização</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Comprar')}>
            <FontAwesome6 name="file-invoice-dollar" size={50} style={{marginBottom: 6}} />
            <Text style={styles.cardText}>comprar vaga</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Ajuda')}
          >
            <Image
              source={require('../assets/suport.png')}
              style={styles.icon}
            />
            <Text style={styles.cardText}>ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate("Infracoes")}}>
            <FontAwesome6 name="triangle-exclamation" size={50} style={{marginBottom: 6}} />
            <Text style={styles.cardText}>infrações</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F7F7F7',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingBottom: 70,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    width: '40%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#CCC',
  },
});
