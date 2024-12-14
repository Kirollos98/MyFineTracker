import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface TransactionTypeSelectorProps {
  type: "income" | "expense";
  setType: (type: "income" | "expense") => void;
}

export const TransactionTypeSelector: React.FC<TransactionTypeSelectorProps> = ({ type, setType }) => (
  <View style={styles.radioGroup}>
    <TouchableOpacity
      style={[styles.radioButton, type === "income" && styles.radioButtonActive]}
      onPress={() => setType("income")}>
      <Text style={[styles.radioButtonText, type === "income" && { color: "white" }]}>Income</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.radioButton, type === "expense" && styles.radioButtonActive]}
      onPress={() => setType("expense")}>
      <Text style={[styles.radioButtonText, type === "expense" && { color: "white" }]}>Expense</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  radioButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 5,
  },
  radioButtonActive: {
    backgroundColor: "#007AFF",
  },
  radioButtonText: {
    color: "#007AFF",
  },
});
