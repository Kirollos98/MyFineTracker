import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface DescriptionInputProps {
  description: string;
  setDescription: (description: string) => void;
}

export const DescriptionInput: React.FC<DescriptionInputProps> = ({ description, setDescription }) => (
  <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
