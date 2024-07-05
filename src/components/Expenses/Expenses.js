import React, { useState } from 'react';
import './Expenses.css';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2023');
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesList items={filteredExpenses} />

      {filteredExpenses.length == 1 ? (
        <p>Only one expense found. Please add more </p>
      ) : (
        ''
      )}
    </Card>
  );
}

export default Expenses;
