import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Counter from "../../components/Counter";
import FloatingBtn from "../../components/FloatingBtn";
import Header from "../../components/header";
import Task from "../../model/Task";
import TaskForm from "./TaskForm";
import TaskTile from "./TaskTile";

export default function TasksScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Hello World", isCompleted: false },
    { id: 2, title: "Titre stylé !", isCompleted: true },
  ]);

  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const renderItem = ({ item }: any) => {
    return (
      <TaskTile
        task={item}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    );
  };

  const onAddTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), title: title, isCompleted: false }]);
  };

  const onDeleteTask = (id: number) => {
    setTasks(tasks.filter((task: Task) => task.id !== id));
  };

  const onUpdateTask = (id: number) => {
    let newTasks: Task[] = [];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      newTasks.push(task);
    });
    setTasks(newTasks);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <View style={styles.container}>
      <Header />
      {isFormVisible ? <TaskForm onAddTask={onAddTask} /> : null}
      <Counter
        taskCompleted={tasks.filter((task: Task) => task.isCompleted).length}
        taskTotal={tasks.length}
      />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id.toString()}
      />
      <FloatingBtn toggleForm={toggleForm} isFormVisible={isFormVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
    height: "100%",
  },
});
