import { Text, View, ScrollView } from "react-native";

// --- DATA MAHASISWA --- //
const mahasiswaList = [
  { stambuk: "105841108122", nama: "Rosfika Awalia" },
  { stambuk: "105841108222", nama: "YOGI A. AMMAH" },
  { stambuk: "105841108722", nama: "Usran" },
  { stambuk: "105841108822", nama: "Rika Armayani" },
  { stambuk: "105841109022", nama: "ANNAS URBACH NINGRUM" },
  { stambuk: "105841109222", nama: "Besse Taleha" },
  { stambuk: "105841109322", nama: "Dinda safitri" },
  { stambuk: "105841109422", nama: "MUH. FARREL APTA INDRATAMA" },
  { stambuk: "105841109622", nama: "FAUZAN AZHARI RAHMAN" },
  { stambuk: "105841109722", nama: "MUH. FADHIL AHMAD" },
  { stambuk: "105841109822", nama: "DAYANG AISYAH" },
];

// --- DAFTAR FONT --- //
const fontStatis = [
  "WorkSans-Medium",
  "Nunito-SemiBold",
  "Merriweather-BoldItalic",
  "FiraSans-Regular",
  "Bitter-Thin",
];

const fontVariabel = [
  "Archivo-Variable",
  "IBMPlexSans-Variable",
  "Mulish-Variable",
  "NotoSans-Variable",
  "Recursive-Variable",
];

// --- KOMPONEN UTAMA --- //
export default function Index() {
  const posisi = 5; // ubah ini sesuai posisi anda
  const dataSaya = mahasiswaList[posisi];

  const namaSebelum = [];
  const namaSesudah = [];

  // Ambil 5 nama sebelumnya (memutar ke belakang jika perlu)
  for (let i = 1; i <= 5; i++) {
    const index = (posisi - i + mahasiswaList.length) % mahasiswaList.length;
    namaSebelum.unshift(mahasiswaList[index]);
  }

  // Ambil 5 nama sesudah (memutar ke awal jika perlu)
  for (let i = 1; i <= 5; i++) {
    const index = (posisi + i) % mahasiswaList.length;
    namaSesudah.push(mahasiswaList[index]);
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <View style={{ alignItems: "center" }}>
        {/* --- Bagian Nama Sebelum --- */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          5 Nama sebelum urutan stambuk (Font Statis)
        </Text>
        {namaSebelum.map((item, idx) => (
          <Text
            key={item.stambuk}
            style={{
              fontFamily: fontStatis[idx % fontStatis.length],
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            {item.nama}
          </Text>
        ))}

        {/* --- Data Saya --- */}
        <View
          style={{
            marginVertical: 20,
            padding: 20,
            borderWidth: 2,
            borderColor: "blue",
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>
            {dataSaya.nama}
          </Text>
          <Text style={{ fontWeight: "800", fontSize: 14 }}>
            {dataSaya.stambuk}
          </Text>
        </View>

        {/* --- Bagian Nama Sesudah --- */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          5 Nama setelah urutan stambuk (Font Variabel)
        </Text>
        {namaSesudah.map((item, idx) => (
          <Text
            key={item.stambuk}
            style={{
              fontFamily: fontVariabel[idx % fontVariabel.length],
              fontWeight: `${(idx + 3) * 100}` as any,
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            {item.nama}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
