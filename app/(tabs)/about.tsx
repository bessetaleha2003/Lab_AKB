import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.text}>
        Aplikasi ini dibuat untuk keperluan tugas kuliah. Aplikasi ini memiliki tiga halaman utama:
      </Text>
      <Text style={styles.list}>• Home: Menampilkan informasi tentang Universitas Muhammadiyah Makassar.</Text>
      <Text style={styles.list}>• About: Menjelaskan tujuan dan fungsi dari aplikasi ini.</Text>
      <Text style={styles.list}>• Profil: Menampilkan data diri pembuat aplikasi.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  list: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
});
