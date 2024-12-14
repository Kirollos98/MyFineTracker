import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface AmountInputProps {
  amount: string;
  setAmount: (amount: string) => void;
}

export const AmountInput: React.FC<AmountInputProps> = ({ amount, setAmount }) => (
  <TextInput style={styles.input} placeholder="Amount" keyboardType="numeric" value={amount} onChangeText={setAmount} />
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
