import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface SummaryOverviewProps {
  totalIncome: number;
  totalExpenses: number;
}

export const SummaryOverview: React.FC<SummaryOverviewProps> = ({ totalIncome, totalExpenses }) => (
  <View style={styles.summaryContainer}>
    <View style={styles.summaryItem}>
      <Text style={styles.summaryLabel}>Total Income</Text>
      <Text style={[styles.summaryValue, styles.incomeValue]}>${totalIncome.toFixed(2)}</Text>
    </View>
    <View style={styles.summaryItem}>
      <Text style={styles.summaryLabel}>Total Expenses</Text>
      <Text style={[styles.summaryValue, styles.expenseValue]}>${totalExpenses.toFixed(2)}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summaryItem: {
    flex: 1,
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  incomeValue: {
    color: "green",
  },
  expenseValue: {
    color: "red",
  },
});
