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
      main: "https://i.pinimg.com/736x/7f/c5/ee/7fc5ee431aed99baaa9ec5ddae4e20d0.jpg",
      alternative: "https://i.pinimg.com/736x/50/9c/2f/509c2f441911ddc89a6312dde77fae4f.jpg",
    },
    {
      main: "https://i.pinimg.com/1200x/1e/fb/55/1efb5506b402df4d14241b3750b37e1c.jpg",
      alternative: "https://i.pinimg.com/736x/f3/83/65/f3836547eeb62eba48257c1454aa193d.jpg",
    },
    {
      main: "https://i.pinimg.com/736x/bc/2d/30/bc2d30bd40843736b57dd58c585a8e78.jpg",
      alternative: "https://i.pinimg.com/1200x/4e/98/27/4e98276d6e8df5d08c5a7c4cddb79f5d.jpg",
    },
    {
      main: "https://i.pinimg.com/1200x/bf/8b/66/bf8b661bf8b3d7777e34f6353d69bbfc.jpg",
      alternative: "https://i.pinimg.com/1200x/ba/c6/8f/bac68fda929c8a79aa785c1a0dcc8c9c.jpg", 
    },
    {
      main: "https://i.pinimg.com/736x/14/39/12/14391279790a6c1b9efb73c2b6cf5f93.jpg",
      alternative: "https://i.pinimg.com/736x/c3/3e/67/c33e6769d945469919e907f091c0b629.jpg",
    },
    {
      main: "https://i.pinimg.com/1200x/e8/22/26/e82226c334f9b50c29e5e8c5b1e9fdaf.jpg",
      alternative: "https://i.pinimg.com/1200x/c2/f1/97/c2f1971409a8bd260e28f13771733561.jpg",
    },
    {
      main: "https://i.pinimg.com/736x/a9/89/6c/a9896c5bcebe3e62f319ac3b78497870.jpg",
      alternative: "https://i.pinimg.com/1200x/fd/22/a1/fd22a1d7f76767bd9c2f230027ba2b8b.jpg",
    },
    {
      main: "https://i.pinimg.com/1200x/4f/bd/ec/4fbdeca3ea9fb99ef91265e1c4159534.jpg",
      alternative: "https://i.pinimg.com/1200x/19/89/70/19897067889925a7c9168f4f90c937be.jpg",
    },
    {
      main: "https://i.pinimg.com/736x/f0/ea/f0/f0eaf08f5d95076d7bc3f4587024fe5f.jpg",
      alternative: "https://i.pinimg.com/1200x/f4/24/80/f424801bc46679a1a85b695c2068788c.jpg",
    },
  ];

  const [imageStates, setImageStates] = useState(
    imageData.map(() => ({
      scale: 1,
      isAlternative: false,
    }))
  );

  const handleImageClick = (index : number) => {
    setImageStates((prevStates) => {
      const newStates = [...prevStates];
      const currentState = newStates[index];
      newStates[index] = {
        ...currentState,
        isAlternative: !currentState.isAlternative,
        scale: Math.min(currentState.scale * 1.2, 2),
      };
      return newStates;
    });
  };

  // Calculate image size based on screen width
  const screenWidth = Dimensions.get("window").width;
  const imageSize = (screenWidth - 40) / 3; // Adjusted for margins

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.grid}>
          {imageStates.map((state, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImageClick(index)}
              activeOpacity={0.8}
            >
              <Image
                source={{
                  uri: state.isAlternative
                    ? imageData[index].alternative
                    : imageData[index].main,
                }}
                style={[
                  {
                    width: imageSize,
                    height: imageSize,
                    transform: [{ scale: state.scale }],
                  },
                  styles.image,
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
    paddingHorizontal: 5,
  },
  image: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
});
