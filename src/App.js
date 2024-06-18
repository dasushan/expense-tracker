import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {
      id: '1',
      date: new Date(2023, 7, 15),
      title: 'Insurance',
      price: 100,
      location: 'Bangalore',
    },
    {
      id: '2',
      date: new Date(2023, 3, 25),
      title: 'Book',
      price: 20,
      location: 'Delhi',
    },
    {
      id: '3',
      date: new Date(2023, 10, 11),
      title: 'Pen',
      price: 5,
      location: 'Hyderabad',
    },
    {
      id: '4',
      date: new Date(2023, 1, 14),
      title: 'Laptop',
      price: 200,
      location: 'Mumbai',
    },
  ];
  return (
    <div>
      <h1>Let's get started</h1>
      {expenses.map((expense)=>{
        return(
          <ExpenseItem
        key = {expense.id}
        date = {expense.date}
        title = {expense.title}
        location = {expense.location}
        price = {expense.price}/>
        )
      })}
    </div>
  );
}

export default App;
