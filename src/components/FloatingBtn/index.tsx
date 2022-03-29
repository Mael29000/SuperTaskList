import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function FloatingBtn({ toggleForm, isFormVisible }: any) {
  return (
    <Pressable style={styles.btn} onPress={toggleForm}>
      <Text style={styles.plus}>{isFormVisible ? "x" : "+"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: "#0E6BA8",
    justifyContent: "center",
  },
  plus: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
