import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const { expenses } = props;

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Card className="expenses">
        {expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            data={expenses}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
