import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StarGameScreen() {
  return (
    <View style={styles.startGameScreenContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StarGameScreen;

const styles = StyleSheet.create({
  startGameScreenContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 4, // works only for Android
    shadowColor: "black", // works only for IOS
    shadowOffset: { width: 0, height: 2 }, // works only for IOS
    shadowRadius: 6, // works only for IOS
    shadowOpacity: 0.25,
  },
});
