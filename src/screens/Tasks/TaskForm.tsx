import React, { useState } from "react";
import { TextInput, Text, StyleSheet, View, Button } from "react-native";

export default function TaskForm({ onAddTask }: any) {
  const [text, setText] = useState<string>("");
  const onChangeText = (text: string) => setText(text);
  const onAddNewTask = () => {
    if (text.trim() !== "") {
      onAddTask(text);
      setText("");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Awesome Task !"
      />
      <Button title="Ajouter" onPress={onAddNewTask} color="#0E6BA8"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderStyle: "dashed",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: "grey",
    flex: 2,
  },
  button: {
    color: "#0E6BA8",
  },
  container: {
    flexDirection: "row",
  },
});
