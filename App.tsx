import { SafeAreaView, StyleSheet, Text } from "react-native";
import TasksScreen from "./src/screens/Tasks";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={style.container}>
        <TasksScreen />
      </SafeAreaView>
    </Provider>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
});
