import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AddTransactionScreen } from "./screens/addTransactions/AddTransactionScreen";
import { TransactionListScreen } from "./screens/listTransactions/TransactionListScreen";
import { SummaryScreen } from "./screens/transactionSummary/SummaryScreen";
import { TransactionProvider } from "./contexts/data";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName, iconType;

              if (route.name === "Add") {
                iconName = "add-to-list";
                iconType = IconType.Entypo;
              } else if (route.name === "List") {
                iconName = "list";
                iconType = IconType.Entypo;
              } else if (route.name === "Summary") {
                iconName = "pie-chart";
                iconType = IconType.Entypo;
              }

              return <Icon name={iconName} type={iconType} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Add" component={AddTransactionScreen} />
          <Tab.Screen name="List" component={TransactionListScreen} />
          <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}
