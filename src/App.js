import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyData = [
  {
    id: "4",
    title: "Car Insurance",
    amount: 230.71,
    date: new Date(2025, 3, 24),
  },
  { id: "2", title: "Table", amount: 23.71, date: new Date(2023, 7, 3) },
  { id: "3", title: "Buying Gift", amount: 100, date: new Date(2024, 4, 9) },
  { id: "6", title: "New House", amount: 2000, date: new Date(2024, 4, 23) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Zain Ejaz</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
