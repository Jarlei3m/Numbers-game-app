import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import StarGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <StarGameScreen />
    </>
  );
}

const styles = StyleSheet.create({});
