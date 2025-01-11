import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function MenuScreen({ navigation }) {
  const menuItems = [
    { label: 'Veículos', icon: require('../assets/iconeveiculo.png'), route: 'Veiculos' },
    { label: 'Crédito', icon: require('../assets/iconecredito.png'), route: 'Credito' },
    { label: 'Localização', icon: require('../assets/iconeloc.png'), route: 'Localizacao' },
    { label: 'Pesquisar', icon: require('../assets/iconepesquisar.jpg'), route: 'Ajuda' },
    { label: 'Ajuda', icon: require('../assets/suport.png'), route: 'Ajuda' },
    { label: 'Infrações', icon: require('../assets/multa.png'), route: 'Infracao' },
  ];

  const footerItems = [
    { icon: 'home', route: 'HomeScreen' },
    { icon: 'dollar', route: 'CréditoScreen' },
    { icon: 'cog', route: 'ConfigScreen' },
  ];

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={28} color="#000" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logorotarorio.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Menu</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('PerfilScreen')}>
          <FontAwesome name="user-circle" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo rolável */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate(item.route)}
          >
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.cardText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Barra de navegação inferior */}
      <View style={styles.footer}>
        {footerItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.footerButton}
            onPress={() => navigation.navigate(item.route)}
          >
            <FontAwesome name={item.icon} size={28} color="#000" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#F4F4F4',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  card: {
    width: '45%',  // Reduzido de 48% para 45% para cards mais compactos
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 5,
    paddingVertical: 7,  // Diminuído o padding vertical para compactar o card
  },
  icon: {
    width: 50,  // Reduzido de 60 para 50
    height: 50, // Reduzido de 60 para 50
    marginBottom: 6,  // Ajustado para equilíbrio visual
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 14,  // Reduzido para texto mais compacto
    textAlign: 'center',
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
  footerButton: {
    padding: 10,
  },
});
