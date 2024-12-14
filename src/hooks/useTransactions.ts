import { useContext } from "react";
import { TransactionContext } from "../contexts/data/transactionsContext/TransactionContext";

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error("useTransactions must be used within a TransactionProvider");
  }
  return context;
};
