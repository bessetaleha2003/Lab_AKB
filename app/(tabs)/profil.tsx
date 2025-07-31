import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProfilPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profil Mahasiswa</Text>

      <Image
        source={require('../../assets/images/profil.jpg')}
        style={styles.image}
      />

      <Text style={styles.text}>
        <Text style={styles.label}>Nama:</Text> Besse Taleha
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>NIM:</Text> 105841109222
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Kelas:</Text> 6C
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Jurusan:</Text> Teknik Informatika
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Fakultas:</Text> Fakultas Teknik
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
});
