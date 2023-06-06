import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  const { width } = useWindowDimensions();

  const responsiveWidth = width < 380 ? 12 : 24;

  const responsiveFontSize = width < 380 ? 28 : 36;

  return (
    <View
      style={[
        styles.container,
        { padding: responsiveWidth, margin: responsiveWidth },
      ]}
    >
      <Text style={[styles.numberText, { fontSize: responsiveFontSize }]}>
        {children}
      </Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});
