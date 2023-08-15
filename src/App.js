import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 230.71, date: Date(2003, 4, 24) },
    { title: "Table", amount: 23.71, date: Date(2003, 8, 3) },
    { title: "Buying Gift", amount: 100, date: Date(2009, 3, 9) },
    { title: "New House", amount: 2000, date: Date(2010, 4, 23) },
  ];
  return (
    <div>
      <h2>Zain Ejaz</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
