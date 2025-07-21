import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';



const IconScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>

      <View style={styles.iconRow}>
        <AntDesign name="rest" size={24} color="#4A90E2" />
        <AntDesign name="wallet" size={24} color="#E74C3C" />
        <AntDesign name="bank" size={24} color="#2ECC71" />
        <AntDesign name="medicinebox" size={24} color="#9B59B6" />
        <AntDesign name="idcard" size={24} color="#F39C12" />
        <Entypo name="aircraft" size={24} color="#F1C40F" />
        <Entypo name="adjust" size={24} color="#7a295bff" />
        <Entypo name="add-user" size={24} color="#27AE60" />
        <AntDesign name="slack-square" size={24} color="#2980B9" />
        <Entypo name="battery" size={24} color="#16A085" />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
});

export default IconScreen;
