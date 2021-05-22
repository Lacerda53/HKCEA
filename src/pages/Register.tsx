import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import colors from "../styles/colors";
import { ButtonMain } from "../components/ButtonMain";
import { useNavigation } from "@react-navigation/core";

export function Register() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Cadastre sua conta</Text>
        <View style={styles.form}>
          <Input
            title="cpf"
            placeholder="Ex. 999.999.999-99"
            keyboardType="numeric"
          />
          <Input title="Senha" placeholder="*********" secureTextEntry={true} />
          <Input
            title="Confirme sua senha"
            placeholder="*********"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonMain
          title="Cadastrar"
          onPress={() => navigation.navigate("CompleteRegister")}
        />
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
  form: {
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
    padding: 15,
    width: "100%",
  },
});
