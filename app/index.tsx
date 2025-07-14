import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const imageData = [
    {
      id: 1,
      main: "https://picsum.photos/id/1015/300",
      alternative: "https://picsum.photos/id/1016/300",
    },
    {
      id: 2,
      main: "https://picsum.photos/id/1020/300",
      alternative: "https://picsum.photos/id/1021/300",
    },
    {
      id: 3,
      main: "https://picsum.photos/id/1025/300",
      alternative: "https://picsum.photos/id/1026/300",
    },
    {
      id: 4,
      main: "https://picsum.photos/id/1030/300",
      alternative: "https://picsum.photos/id/1031/300",
    },
    {
      id: 5,
      main: "https://picsum.photos/id/1035/300",
      alternative: "https://picsum.photos/id/1036/300",
    },
    {
      id: 6,
      main: "https://picsum.photos/id/1040/300",
      alternative: "https://picsum.photos/id/1041/300",
    },
    {
      id: 7,
      main: "https://picsum.photos/id/1045/300",
      alternative: "https://picsum.photos/id/1046/300",
    },
    {
      id: 8,
      main: "https://picsum.photos/id/1050/300",
      alternative: "https://picsum.photos/id/1051/300",
    },
    {
      id: 9,
      main: "https://picsum.photos/id/1060/300",
      alternative: "https://picsum.photos/id/1061/300",
    },
  ];

  const [imageStates, setImageStates] = useState(
    imageData.map((img) => ({
      id: img.id,
      isAlternative: false,
      scale: 1,
    }))
  );

  const handleImageClick = (index: number) => {
    setImageStates((prevStates) => {
      const updated = [...prevStates];
      const current = updated[index];
      const nextScale = current.scale < 2 ? current.scale * 1.2 : current.scale;

      updated[index] = {
        ...current,
        isAlternative: !current.isAlternative,
        scale: Math.min(nextScale, 2),
      };
      return updated;
    });
  };

  const screenWidth = Dimensions.get("window").width;
  const imageSize = (screenWidth - 40) / 3;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.grid}>
          {imageStates.map((state, index) => (
            <TouchableOpacity
              key={state.id}
              onPress={() => handleImageClick(index)}
              activeOpacity={0.8}
              style={styles.gridCell}
            >
              <Image
                source={{
                  uri: state.isAlternative
                    ? imageData[index].alternative
                    : imageData[index].main,
                }}
                style={[
                  styles.image,
                  {
                    transform: [{ scale: state.scale }],
                  },
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 330,
  },
  gridCell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#ccc",
  },
});
