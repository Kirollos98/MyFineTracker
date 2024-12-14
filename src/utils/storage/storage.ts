import { MMKV } from 'react-native-mmkv';

class Storage {
  private storage: MMKV;

  constructor() {
    this.storage = new MMKV();
  }

  get(key: string): any {
    const value = this.storage.getString(key);
    return value ? JSON.parse(value) : null;
  }

  set(key: string, value: any): void {
    this.storage.set(key, JSON.stringify(value));
  }

  delete(key: string): void {
    this.storage.delete(key);
  }
}

export const storage = new Storage();

