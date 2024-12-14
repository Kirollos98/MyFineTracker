import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTransactions } from '../../hooks/useTransactions';
import { ErrorMessage } from '../../components/ErrorMessage';
import { SummaryOverview } from '../../components/SummaryOverview';
import { ExpensesChart } from '../../components/ExpensesChart';

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

export function SummaryScreen() {
  const { transactions, error } = useTransactions();

  const { totalIncome, totalExpenses, expensesByCategory } = useMemo(() => {
    const result = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.totalIncome += transaction.amount;
        } else {
          acc.totalExpenses += transaction.amount;
          acc.expensesByCategory[transaction.category] = (acc.expensesByCategory[transaction.category] || 0) + transaction.amount;
        }
        return acc;
      },
      { totalIncome: 0, totalExpenses: 0, expensesByCategory: {} as Record<string, number> }
    );
    return result;
  }, [transactions]);

  const chartData = Object.entries(expensesByCategory).map(([name, value], index) => ({
    name,
    value: value as number,
    color: COLORS[index % COLORS.length],
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  }));

  return (
    <View style={styles.container}>
      {error && <ErrorMessage message={error.message} />}
      <SummaryOverview totalIncome={totalIncome} totalExpenses={totalExpenses} />
      <ExpensesChart chartData={chartData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

