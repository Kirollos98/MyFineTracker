import React from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface CategoryPickerProps {
  category: string;
  setCategory: (category: string) => void;
}

export const CategoryPicker: React.FC<CategoryPickerProps> = ({ category, setCategory }) => (
  <Picker selectedValue={category} onValueChange={itemValue => setCategory(itemValue)} style={styles.picker}>
    <Picker.Item label="Select category" value="" />
    <Picker.Item label="Food" value="food" />
    <Picker.Item label="Transport" value="transport" />
    <Picker.Item label="Entertainment" value="entertainment" />
    <Picker.Item label="Utilities" value="utilities" />
    <Picker.Item label="Other" value="other" />
  </Picker>
);

const styles = StyleSheet.create({
  picker: {
    marginBottom: 10,
  },
});
