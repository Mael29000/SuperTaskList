import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function TaskTile({ task }: any) {
  let icon;
  if (!task.isCompleted) {
    icon = (
      <Image
        style={styles.icon}
        source={require("../../../assets/icons/icon_circle.png")}
      />
    );
  } else {
    icon = (
      <Image
        style={styles.icon}
        source={require("../../../assets/icons/icon_check.png")}
      />
    );
  }
  return (
    <View style={styles.tile}>
      <View style={styles.subtile}>
        {icon}
        <Text style={styles.text}>{task.title}</Text>
      </View>
      <Pressable>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/icon_bin.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: "#0E6BA8",
    flex: 1,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
  },
  subtile: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
