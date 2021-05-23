import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { typeAttendance } from "../helpers/typeAttendance";
import colors from "../styles/colors";
import { CalendarCustom } from "../components/CalendarCustom";

export function MakeAppointment() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const navigation = useNavigation();

  const headers = [
    <Text style={styles.textPrimary}>Selecione o tipo de atendimento</Text>,
    <Text style={styles.textPrimary}>Qual especialidade você procura?</Text>,
    <>
      <Text style={styles.textPrimary}>Qual especialidade você procura?</Text>
      <Text style={styles.textSecondary}>
        Os locais são listados de acordo com a proximidade do CEP informado no
        cadastro e disponibilidade do serviço escolhido
      </Text>
    </>,
    <>
      <Text style={styles.textPrimary}>Dia e horário</Text>
      <Text style={styles.textSecondary}>
        Os locais são listados de acordo com a proximidade do CEP informado no
        cadastro e disponibilidade do serviço escolhido
      </Text>
    </>,
  ];

  const body = [
    //page1
    <View>
      <TouchableOpacity
        style={styles.cardMain}
        onPress={() => setCurrentPage(1)}
      >
        <View style={styles.circle}>
          <Feather name="plus" color={colors.red} size={26} />
        </View>
        <View style={styles.content}>
          <Text style={[styles.textMain, { color: colors.primary }]}>
            Serviço Público
          </Text>
          <Text style={[styles.textSubmain, { color: colors.base }]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet.
          </Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          style={[styles.iconCard, { color: colors.primary }]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardMain}
        onPress={() => navigation.navigate("MakeAppointment")}
      >
        <View style={styles.circle}>
          <Feather name="credit-card" color={colors.red} size={26} />
        </View>
        <View style={styles.content}>
          <Text style={[styles.textMain, { color: colors.primary }]}>
            Serviço Privado
          </Text>
          <Text style={[styles.textSubmain, { color: colors.base }]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet.
          </Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          style={[styles.iconCard, { color: colors.primary }]}
        />
      </TouchableOpacity>
    </View>,
    //page2
    <View style={{ marginTop: 10, marginBottom: 30 }}>
      {typeAttendance.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.row}
          onPress={() => setCurrentPage(2)}
        >
          <Text style={styles.rowText}>{item.title}</Text>
          <Feather name="chevron-right" size={24} color={colors.primary} />
        </TouchableOpacity>
      ))}
    </View>,
    //page3
    <View style={{ marginTop: 10, marginBottom: 100 }}>
      <TouchableOpacity
        style={styles.cardMain}
        onPress={() => setCurrentPage(3)}
      >
        <Ionicons name="location-outline" size={30} color={colors.red} />
        <View style={styles.content}>
          <Text style={[styles.textMain, { color: colors.primary }]}>
            Hospital Regional de Araguaína
          </Text>
          <Text style={[styles.textSubmain, { color: colors.base }]}>
            Av. Tocantins, S/N esq. c, R. Ademar Vicente Ferreira - Centro,
            Araguaína - TO, 77818-550
          </Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          style={[styles.iconCard, { color: colors.primary }]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardMain}
        onPress={() => setCurrentPage(3)}
      >
        <Ionicons name="location-outline" size={30} color={colors.red} />
        <View style={styles.content}>
          <Text style={[styles.textMain, { color: colors.primary }]}>
            Hospital Dom Orione
          </Text>
          <Text style={[styles.textSubmain, { color: colors.base }]}>
            R. Dom Orione, 100 - Centro, Araguaína - TO, 77803-010
          </Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          style={[styles.iconCard, { color: colors.primary }]}
        />
      </TouchableOpacity>
    </View>,
    //page4
    <View style={{ marginTop: 30, marginBottom: 100 }}>
      <CalendarCustom />
      <Text style={styles.textTime}>Horários</Text>
      <View style={styles.containerRow}>
        <TouchableOpacity
          style={styles.cardTime}
          onPress={() => navigation.navigate("Congratulations")}
        >
          <Text style={styles.cardText}>08:00 - 08:30</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardTime}
          onPress={() => navigation.navigate("Congratulations")}
        >
          <Text style={styles.cardText}>14:00 - 14:30</Text>
        </TouchableOpacity>
      </View>
    </View>,
  ];

  function handleBack() {
    if (currentPage === 0) {
      navigation.goBack();
    } else {
      setCurrentPage((page) => page - 1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Feather name="chevron-left" size={30} color={colors.base} />
        </TouchableOpacity>
        {headers[currentPage]}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>{body[currentPage]}</View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>
          Passo <Text style={styles.Textnegrito}>{currentPage + 1}</Text> de 4
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 30 : 10,
    flex: 1,
    padding: 15,
    backgroundColor: colors.white,
  },
  header: {
    marginTop: 20,
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTime: {
    fontSize: 20,
    color: colors.text,
    fontWeight: "bold",
  },
  cardTime: {
    marginTop: 10,
    backgroundColor: colors.primary,
    width: "47%",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: colors.white,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    borderColor: colors.gray,
    marginBottom: 5,
  },
  rowText: {
    fontSize: 16,
    color: colors.base,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "#EDF5FD",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardMain: {
    borderRadius: 10,
    flexDirection: "row",
    height: Dimensions.get("window").width / 3,
    width: "100%",
    padding: 10,
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.primary,
  },
  content: {
    flex: 1,
  },
  textMain: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  textSubmain: {
    marginLeft: 20,
    marginTop: 5,
    fontSize: 15,
    fontWeight: "300",
  },
  iconCard: {
    fontSize: 40,
  },
  img: {
    width: 130,
    resizeMode: "contain",
  },
  textPrimary: {
    color: colors.title,
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  textSecondary: {
    color: colors.base,
    fontSize: 16,
    marginTop: 10,
  },
  textFooter: {
    fontSize: 16,
  },
  Textnegrito: {
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
