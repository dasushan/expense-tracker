import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses({ expenses }) {
  return (
    <>
      {expenses.map((expense) => {
        return (
          <ExpenseItem className="expenses"
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          />
        );
      })}
    </>
  );
}

export default Expenses;
