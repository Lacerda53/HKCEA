import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../styles/colors";

type IProps = TextInputProps & {
  title: string;
  required?: boolean;
  icon?: string;
};

export function Input({ title, required, icon, ...rest }: IProps) {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        {required && <Text style={styles.required}> *</Text>}
      </View>
      <View style={styles.containerInput}>
        {icon && (
          <MaterialIcons name="verified-user" style={styles.icon} size={15} />
        )}
        <TextInput style={styles.input} {...rest} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  required: {
    color: colors.red,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    height: 48,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: "700",
    color: colors.text,
    letterSpacing: 1.5,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    height: "100%",
    width: "100%",
  },
});
