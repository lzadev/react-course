import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { saveExpenseHandler } = props;

  const showFormHandler = () => {
    setShowForm(!showForm);
  };
  const hideFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          hideFormHandler={hideFormHandler}
          saveExpenseHandler={saveExpenseHandler}
        />
      )}
      {!showForm && (
        <button onClick={showFormHandler} type="submit">
          Add New Expense
        </button>
      )}
    </div>
  );
};
export default NewExpense;
