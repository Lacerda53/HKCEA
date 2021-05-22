import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Perfil</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
