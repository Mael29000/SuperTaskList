import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

export default function TaskForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const onChangeText = (text: string) => setText(text);
  const onAddNewTask = () => {
    if (text.trim() !== "") {
      dispatch(addTask(text));
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
    marginTop: 10,
  },
});
