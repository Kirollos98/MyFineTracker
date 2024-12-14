import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface TransactionFiltersProps {
  sortBy: "date" | "amount";
  setSortBy: (value: "date" | "amount") => void;
  filterType: "all" | "income" | "expense";
  setFilterType: (value: "all" | "income" | "expense") => void;
}

export const TransactionFilters: React.FC<TransactionFiltersProps> = ({
  sortBy,
  setSortBy,
  filterType,
  setFilterType,
}) => (
  <View style={styles.filters}>
    <Picker selectedValue={sortBy} onValueChange={itemValue => setSortBy(itemValue)} style={styles.picker}>
      <Picker.Item label="Sort by Date" value="date" />
      <Picker.Item label="Sort by Amount" value="amount" />
    </Picker>
    <Picker selectedValue={filterType} onValueChange={itemValue => setFilterType(itemValue)} style={styles.picker}>
      <Picker.Item label="All" value="all" />
      <Picker.Item label="Income" value="income" />
      <Picker.Item label="Expense" value="expense" />
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  picker: {
    flex: 1,
  },
});
