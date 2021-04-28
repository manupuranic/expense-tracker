import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [display, setDisplay] = useState(false);

  const displayForm = () => {
    setDisplay(true);
  };

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const onCancel = () => {
    setDisplay(false);
  };

  return (
    <div className="new-expense">
      {!display && <button onClick={displayForm}>Add New Expense</button>}
      {display && (
        <ExpenseForm onCancel={onCancel} onSaveExpenseData={saveExpenseData} />
      )}
    </div>
  );
};

export default NewExpense;
