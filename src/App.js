import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

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
  const addExpenseDataHandler = (expenseData) => {
    console.log(expenseData);
  }
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
