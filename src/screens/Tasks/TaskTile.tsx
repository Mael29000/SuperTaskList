import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function TaskTile({ task, onUpdateTask, onDeleteTask }: any) {
  const onChangeStatus = () => {
    onUpdateTask(task.id);
  };
  const onDelete = () => {
    onDeleteTask(task.id);
  };
  let icon;
  icon = (
    <Image
      style={styles.icon}
      source={
        task.isCompleted
          ? require("../../../assets/icons/icon_check.png")
          : require("../../../assets/icons/icon_circle.png")
      }
    />
  );

  return (
    <Pressable onPress={onChangeStatus} style={styles.tile}>
      <View style={styles.subtile}>
        {icon}
        <Text style={styles.text}>{task.title}</Text>
      </View>
      <Pressable onPress={onDelete}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/icon_bin.png")}
        />
      </Pressable>
    </Pressable>
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
