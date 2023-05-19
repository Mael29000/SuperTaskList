import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function TaskTile({ task, onUpdateTask, onDeleteTask }: any) {
    const onChangeStatus = () => {
        onUpdateTask(task.id);
    };
    const onDelete = () => {
        onDeleteTask(task.id);
    };
    let icon;
    icon = task.isCompleted ? (
        <FontAwesome name="check-square" size={24} color="white" />
    ) : (
        <FontAwesome name="square" size={24} color="white" />
    );

    return (
        <Pressable onPress={onChangeStatus} style={styles.tile}>
            <View style={styles.subtile}>
                {icon}
                <Text style={styles.text}>{task.title}</Text>
            </View>
            <Pressable onPress={onDelete}>
                <Ionicons name="trash-bin-sharp" size={24} color="white" />
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
