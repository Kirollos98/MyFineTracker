import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useTransactions } from "../../hooks/useTransactions";
import { ErrorMessage } from "../../components/ErrorMessage";
import { TransactionFilters } from "../../components/TransactionFilters";
import { TransactionItem } from "../../components/TransactionItem";

export function TransactionListScreen() {
  const { transactions, deleteTransaction, error } = useTransactions();
  const [sortBy, setSortBy] = useState<"date" | "amount">("date");
  const [filterType, setFilterType] = useState<"all" | "income" | "expense">("all");
  const [localError, setLocalError] = useState<string | null>(null);

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return b.amount - a.amount;
    }
  });

  const filteredTransactions = sortedTransactions.filter(transaction => {
    if (filterType === "all") return true;
    return transaction.type === filterType;
  });

  const handleDelete = async (id: number) => {
    try {
      await deleteTransaction(id);
      setLocalError(null);
    } catch (err) {
      setLocalError("Failed to delete transaction. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      {(error || localError) && <ErrorMessage message={error?.message || localError || ""} />}
      <TransactionFilters sortBy={sortBy} setSortBy={setSortBy} filterType={filterType} setFilterType={setFilterType} />
      <FlatList
        data={filteredTransactions}
        renderItem={({ item }) => <TransactionItem transaction={item} onDelete={handleDelete} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
