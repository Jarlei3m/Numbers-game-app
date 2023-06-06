import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // works only for Android
    shadowColor: "black", // works only for IOS
    shadowOffset: { width: 0, height: 2 }, // works only for IOS
    shadowRadius: 6, // works only for IOS
    shadowOpacity: 0.25, // works only for IOS
    alignItems: "center",
  },
});
