import React, { createContext, useState, useEffect, ReactNode, useMemo } from "react";
import { TransactionService } from "../../../services/TransactionService";
import { Transaction } from "../../../utils/@types/types";

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => Promise<void>;
  deleteTransaction: (id: number) => Promise<void>;
  updateTransaction: (transaction: Transaction) => Promise<void>;
  error: Error | null;
}

export const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const loadedTransactions = TransactionService.getTransactions();
      setTransactions(loadedTransactions);
    } catch (err) {
      console.log({ err });
      setError(err instanceof Error ? err : new Error("Failed to load transactions"));
    }
  };

  const addTransaction = async (transaction: Transaction) => {
    try {
      TransactionService.addTransaction(transaction);
      setTransactions([...transactions, transaction]);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to add transaction"));
      throw err;
    }
  };

  const deleteTransaction = async (id: number) => {
    try {
      TransactionService.deleteTransaction(id);
      setTransactions(transactions.filter(t => t.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to delete transaction"));
      throw err;
    }
  };

  const updateTransaction = async (updatedTransaction: Transaction) => {
    try {
      TransactionService.updateTransaction(updatedTransaction);
      setTransactions(transactions.map(t => (t.id === updatedTransaction.id ? updatedTransaction : t)));
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to update transaction"));
      throw err;
    }
  };

  const ctxState = useMemo(
    () => ({ transactions, addTransaction, deleteTransaction, updateTransaction, error }),
    [transactions, error],
  );

  return <TransactionContext.Provider value={ctxState}>{children}</TransactionContext.Provider>;
};
