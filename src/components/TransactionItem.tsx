import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Transaction } from "../utils/@types/types";

interface TransactionItemProps {
  transaction: Transaction;
  onDelete: (id: number) => void;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onDelete }) => (
  <View style={styles.transactionItem}>
    <View>
      <Text style={styles.transactionTitle}>{transaction.description || transaction.category}</Text>
      <Text style={styles.transactionDate}>{transaction.date}</Text>
    </View>
    <View style={styles.transactionRight}>
      <Text style={[styles.transactionAmount, { color: transaction.type === "income" ? "green" : "red" }]}>
        {transaction.type === "income" ? "+" : "-"}${(transaction.amount ?? 0).toFixed(2)}
      </Text>
      <TouchableOpacity onPress={() => onDelete(transaction.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionDate: {
    fontSize: 12,
    color: "#888",
  },
  transactionRight: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    marginTop: 5,
    padding: 5,
    backgroundColor: "#ff4444",
    borderRadius: 3,
  },
  deleteButtonText: {
    color: "#ffffff",
    fontSize: 12,
  },
});
