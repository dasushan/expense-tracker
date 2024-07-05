import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2023');
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  let expensesContent = <p>No expenses found</p>

  if(filteredExpenses.length >= 1){
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem 
          key={expense.id}
          date={expense.date}
          price={expense.price}/>
      )
    })
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      
      {expensesContent}
      { filteredExpenses.length ==1 ? <p>Only one expense found. Please add more </p> : ""}
    </Card>
  );
}

export default Expenses;
