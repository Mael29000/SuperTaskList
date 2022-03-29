import { SafeAreaView, StyleSheet, Text } from "react-native";
import TasksScreen from "./src/screens/Tasks";

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <TasksScreen />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
});
