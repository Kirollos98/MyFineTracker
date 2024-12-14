import { storage } from "../utils/storage/storage";
import { Transaction } from "../utils/@types/types";

export class TransactionService {
  private static readonly STORAGE_KEY = "transactions";

  static getTransactions(): Transaction[] {
    return storage.get(this.STORAGE_KEY) || [];
  }

  static addTransaction(transaction: Transaction): void {
    const transactions = this.getTransactions();
    transactions.push(transaction);
    storage.set(this.STORAGE_KEY, transactions);
  }

  static deleteTransaction(id: number): void {
    const transactions = this.getTransactions();
    const updatedTransactions = transactions.filter(t => t.id !== id);
    storage.set(this.STORAGE_KEY, updatedTransactions);
  }

  static updateTransaction(updatedTransaction: Transaction): void {
    const transactions = this.getTransactions();
    const index = transactions.findIndex(t => t.id === updatedTransaction.id);
    if (index !== -1) {
      transactions[index] = updatedTransaction;
      storage.set(this.STORAGE_KEY, transactions);
    }
  }
}
