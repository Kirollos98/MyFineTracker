import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useTransactions } from "../../hooks/useTransactions";
import { Transaction } from "../../utils/@types/types";
import { ErrorMessage } from "../../components/ErrorMessage";
import { TransactionTypeSelector } from "../../components/TransactionTypeSelector";
import { AmountInput } from "../../components/AmountInput";
import { CategoryPicker } from "../../components/CategoryPicker";
import { DescriptionInput } from "../../components/DescriptionInput";
import { DatePickerInput } from "../../components/DatePickerInput";

export function AddTransactionScreen() {
  const { addTransaction, error } = useTransactions();
  const [type, setType] = useState<"income" | "expense">("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const transaction: Transaction = {
        id: Date.now(),
        type,
        amount: parseFloat(amount),
        category,
        date: date.toISOString().split("T")[0],
        description,
      };
      await addTransaction(transaction);
      // Reset form
      setType("expense");
      setAmount("");
      setCategory("");
      setDate(new Date());
      setDescription("");
      setLocalError(null);
    } catch (err) {
      setLocalError("Failed to add transaction. Please try again.");
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
      <Text style={styles.title}>Add New Transaction</Text>
      {(error || localError) && <ErrorMessage message={error?.message || localError || ""} />}
      <View style={styles.form}>
        <TransactionTypeSelector type={type} setType={setType} />
        <AmountInput amount={amount} setAmount={setAmount} />
        <DatePickerInput setDate={setDate} date={date} />
        <CategoryPicker category={category} setCategory={setCategory} />
        <DescriptionInput description={description} setDescription={setDescription} />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Transaction</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
