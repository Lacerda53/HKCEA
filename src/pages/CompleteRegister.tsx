import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Input } from "../components/Input";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";

export function CompleteRegister() {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState<number>(0);

  const forms = [
    <View style={styles.form}>
      <Input title="Nome Completo" required placeholder="Ex. Nome Sobrenome" />
      <Input title="RG" required placeholder="9999999" />
      <Input
        title="Data de nascimento"
        placeholder="99/99/9999"
        keyboardType="numeric"
        required
      />
      <Input title="numero do sus" placeholder="9999999" />
      <Input title="plano de saude" placeholder="9999999" />
      <Input title="n° da carteira plano de saúde" placeholder="9999999" />
    </View>,
    <View style={styles.form}>
      <Input title="cep" required placeholder="Ex. 99999-999" />
      <Input title="endereço" required placeholder="9999999" />
      <Input
        title="número"
        placeholder="Ex. 999"
        required
        keyboardType="numeric"
      />
      <Input title="Completmento" placeholder="Ex. APT.999" />
      <Input title="Cidade/municipio" required placeholder="9999999" />
      <Input title="estado" required placeholder="9999999" />
    </View>,
  ];

  function handleNextPage() {
    if (currentPage === 1) {
      navigation.navigate("Home");
    } else {
      setCurrentPage((page) => page + 1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Complete suas informações</Text>
        <ScrollView style={styles.scroll}>{forms[currentPage]}</ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleNextPage} style={styles.button}>
          <Feather name="arrow-right" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 30 : 10,
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.title,
    fontSize: 30,
    fontWeight: "700",
    marginTop: 25,
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  scroll: {
    paddingHorizontal: 15,
  },
  body: {
    flex: 1,
    marginBottom: 100,
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
});
