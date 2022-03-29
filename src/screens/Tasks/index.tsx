import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/header";
import Task from "../../model/Task";
import TaskForm from "./TaskForm";
import TaskTile from "./TaskTile";

export default function TasksScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Hello World", isCompleted: false },
    { id: 2, title: "Titre stylé !", isCompleted: true },
  ]);
  const renderItem = ({ item }: any) => {
    return <TaskTile task={item} />;
  };

  const onAddTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), title: title, isCompleted: false }]);
  };

  const onUpdateTask = (id: number) => {
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      newTasks.push(task);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <TaskForm onAddTask={onAddTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
  },
});
