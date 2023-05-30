import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower</Text>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 32,
  },
});
