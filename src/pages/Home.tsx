import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import home1Img from "../assets/home1.png";
import home2Img from "../assets/home2.png";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";

export function Home() {
  const navigation = useNavigation();
  const { params } = useRoute<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subTitle}>Bem Vindo,</Text>
        <Text style={styles.title}>José da Silva</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={[styles.cardMain, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate("MakeAppointment")}
        >
          <Image source={home1Img} style={styles.img} />
          <View style={styles.content}>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={[styles.iconCard, { color: colors.white }]}
            />
            <Text style={[styles.textMain, { color: colors.white }]}>
              Marcar Consulta
            </Text>
            <Text style={[styles.textSecondary, { color: colors.white }]}>
              Marque suas consultas online e economize seu tempo de espera
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cardMain,
            {
              borderColor: colors.primary,
              borderWidth: 1,
              backgroundColor: colors.white,
            },
          ]}
          onPress={() => navigation.navigate("Schedule")}
        >
          <Image source={home2Img} style={styles.img} />
          <View style={styles.content}>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={[styles.iconCard, { color: colors.primary }]}
            />
            <Text style={[styles.textMain, { color: colors.primary }]}>
              Agenda de consultas
            </Text>
            <Text style={[styles.textSecondary, { color: colors.primary }]}>
              Confira consultas já marcadas por você
            </Text>
          </View>
        </TouchableOpacity>
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
  title: {
    color: colors.title,
    fontSize: 22,
    fontWeight: "700",
    marginTop: 3,
  },
  subTitle: {
    color: colors.base,
    fontSize: 18,
  },
  scroll: {
    paddingHorizontal: 15,
  },
  body: {
    flex: 1,
  },
  cardMain: {
    borderRadius: 10,
    flexDirection: "row",
    height: Dimensions.get("window").width / 2,
    width: "100%",
    padding: 10,
    marginTop: 20,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
  },
  textMain: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  textSecondary: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 14,
    fontWeight: "300",
  },
  iconCard: {
    fontSize: 40,
    alignSelf: "flex-end",
  },
  img: {
    width: 130,
    resizeMode: "contain",
  },
  header: {
    marginTop: 15,
  },
  footer: {
    marginTop: 20,
    position: "absolute",
    bottom: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    width: "100%",
  },
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  icon: {
    fontSize: 25,
    color: colors.white,
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
