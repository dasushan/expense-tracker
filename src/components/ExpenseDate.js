import './ExpenseDate.css';

function ExpenseDate(props) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Novemeber',
    'December',
  ];
  // const expenseDate = new Date(2023, 7, 15).toISOString();
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();
  const date = (props.date.getDate() < 10 ? '0' : '') + props.date.getDate();

  return (
    <div className="expense-date">
      <div>{month}</div>
      <div>{year}</div>
      <div>{date}</div>
    </div>
  );
}

export default ExpenseDate;
