import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../styles/colors";

export function Schedule() {
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agenda de Consultas</Text>
      <View style={styles.header}>
        <Text style={styles.monthText}>
          {monthNames[new Date().getMonth()]}{" "}
          {new Date().getFullYear().toString()}
        </Text>
        <View style={styles.headerIcons}>
          <Feather name="chevron-left" size={28} />
          <Feather name="chevron-right" size={28} />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Consulta Oftalmologia</Text>
        <View style={styles.row}>
          <Ionicons name="location-outline" size={24} color={colors.red} />
          <Text style={styles.cardSubText}>
            Hospital Dom Orione - Araguaína
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="medkit-outline" size={24} color={colors.red} />
          <Text style={styles.cardSubText}>Oftalmologia</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="calendar-outline" size={24} color={colors.red} />
          <Text style={styles.cardSubText}>
            8 de Maio 2021 - 08:00 até 08:30
          </Text>
        </View>
        <TouchableOpacity style={styles.containerCancel}>
          <Text style={styles.textCancel}>Cancelar consulta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: Platform.OS === "android" ? 60 : 40,
    backgroundColor: colors.white,
  },
  title: {
    width: "100%",
    textAlign: "left",
    color: colors.primary,
    fontSize: 28,
    fontWeight: "bold",
  },
  header: {
    marginTop: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  monthText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  card: {
    width: "100%",
    padding: 15,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#CDCDCD",
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
  cardSubText: {
    marginLeft: 10,
  },
  containerCancel: {
    marginTop: 30,
    alignItems: "flex-end",
  },
  textCancel: {
    color: colors.red,
    fontSize: 16,
  },
});
