import { Feather } from "@expo/vector-icons";
import React from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";

export function CalendarCustom() {
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
    <View style={styles.container}>
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
      <View style={styles.calendar}>
        <View style={styles.month}>
          <Text>Seg</Text>
          <Text>Ter</Text>
          <Text>Qua</Text>
          <Text>Qui</Text>
          <Text>Sex</Text>
          <Text>Sab</Text>
          <Text>Dom</Text>
        </View>
        <Calendar
          monthFormat={""}
          hideArrows={true}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
          hideDayNames={true}
          disableArrowLeft={true}
          disableArrowRight={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
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
  month: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  calendar: {
    padding: 10,
  },
});
