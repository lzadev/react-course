import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const { saveExpenseHandler } = props;
  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseHandler={saveExpenseHandler} />
    </div>
  );
};
export default NewExpense;
