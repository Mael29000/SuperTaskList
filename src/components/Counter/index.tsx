import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Counter({ taskCompleted, taskTotal }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.total}>
        <Text style={styles.number}>{min2Digits(taskTotal)}</Text>
        <Text style={styles.title}>Created tasks</Text>
      </View>
      <View style={styles.completed}>
        <Text style={styles.number}>{min2Digits(taskCompleted)}</Text>
        <Text style={styles.title}>Completed tasks</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  total: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  completed: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  number: {
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    color: "grey",
    fontWeight: "bold",
  },
});

const min2Digits = (n: number) => (n < 10 ? `0${n}` : n);
