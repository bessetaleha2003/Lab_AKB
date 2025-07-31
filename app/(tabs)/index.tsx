import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Image source={require('../../assets/images/unismuh.jpeg')} style={styles.image} />
      <Text style={styles.description}>
        Unismuh Makassar (Universitas Muhammadiyah Makassar) adalah perguruan tinggi swasta yang berada di bawah naungan organisasi Muhammadiyah. Universitas ini berkomitmen untuk mengintegrasikan nilai-nilai keislaman dalam proses pendidikan, pengajaran, penelitian, dan pengabdian kepada masyarakat. Dikenal sebagai salah satu kampus Islam terbesar di kawasan timur Indonesia, Unismuh Makassar memiliki berbagai program studi unggulan yang tersebar di sejumlah fakultas, mulai dari ilmu pendidikan, teknik, kedokteran, pertanian, dan lain-lain. 
        Dengan visi menjadi universitas yang unggul dalam ilmu pengetahuan, teknologi, dan seni berlandaskan nilai-nilai Islam, Unismuh Makassar terus berupaya meningkatkan kualitas pendidikan dan layanan akademik bagi mahasiswanya.
        Unismuh Makassar terletak di kota Makassar, Sulawesi Selatan. Yang berada di Jalan Sultan Alauddin No. 259, Kecamatan Rappocini, Kota Makassar.
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
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 180,
    resizeMode: 'cover',
    marginBottom: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
});
