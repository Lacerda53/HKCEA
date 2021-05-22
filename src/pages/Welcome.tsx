import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
} from "react-native";
import welcomeImg from "../assets/welcome.png";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/core";
import { ButtonMain } from "../components/ButtonMain";

export function Welcome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Diminua o fluxo de {"\n"}filas com o{" "}
          <Text style={styles.titleName}>NOME</Text>
        </Text>
        <Image source={welcomeImg} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.footer}>
        <ButtonMain
          title="Próximo"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    top: -60,
    height: Dimensions.get("window").height - 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 38,
    color: colors.text,
  },
  titleName: {
    fontWeight: "700",
    color: colors.text,
  },
  image: {
    marginTop: 60,
    height: Dimensions.get("window").width * 0.6,
  },
  footer: {
    marginTop: 20,
    position: "absolute",
    bottom: 15,
    padding: 15,
    width: "100%",
  },
});
