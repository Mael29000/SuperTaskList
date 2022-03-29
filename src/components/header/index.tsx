import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Header() {
  const date: Date = new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{`${days[date.getDay()]}, ${date.getDate()} ${
        months[date.getMonth()]
      }`}</Text>
    </View>
  );
}

const days: String[] = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const months: String[] = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  date: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
