import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../../components/Counter";
import FloatingBtn from "../../components/FloatingBtn";
import Header from "../../components/header";
import Task from "../../model/Task";
import TaskForm from "./TaskForm";
import TaskTile from "./TaskTile";
import { toggleTask, deleteTask } from "../../redux/actions";
import { getTasks } from "../../redux/selectors";

export default function TasksScreen() {
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

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

  const onDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  const onUpdateTask = (id: number) => {
    dispatch(toggleTask(id));
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <View style={styles.container}>
      <Header />
      {isFormVisible ? <TaskForm /> : null}
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
