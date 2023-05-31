import { StyleSheet, View } from "react-native";

function Flex({ children }) {
  return <View style={styles.flexContainer}>{children}</View>;
}

export default Flex;

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
  },
});
