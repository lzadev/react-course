import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { saveExpenseHandler } = props;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [formState, setFormState] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    //     setFormState({
    //       ...formState,
    //       title: e.tagert.value,
    //     });

    //     setFormState((prevState) => {
    //       return {
    //         ...prevState,
    //         title: e.target.value,
    //       };
    //     });
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // setFormState({
    //   ...formState,
    //   amount: e.tagert.value,
    // });

    // setFormState((prevState) => {
    //   return {
    //     ...prevState,
    //     amount: e.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // setFormState({
    //   ...formState,
    //   date: e.tagert.value,
    // });

    // setFormState((prevState) => {
    //   return {
    //     ...prevState,
    //     date: e.target.value,
    //   };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      title,
      amount,
      date: new Date(date),
    };

    saveExpenseHandler(expense);

    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
