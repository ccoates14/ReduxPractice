import './App.css';
import TransactionItem from './components/TransactionItem';

function App() {

  const fakeTransactionData = [
    {
      id: 1,
      description: 'Grocery Shopping',
      amount: -150.00,
      date: '2024-06-01'
    },
    {
      id: 2,
      description: 'Electricity Bill',
      amount: -75.50,
      date: '2024-06-05'
    },
    {
      id: 3,
      description: 'Salary',
      amount: 3000.00,
      date: '2024-06-10'
    }
  ]

  return (
    <div className="App">
      {fakeTransactionData.map(transaction => (
        <TransactionItem
          key={transaction.id}
          id={transaction.id}
          description={transaction.description}
          amount={transaction.amount}
          type={transaction.amount > 0 ? 'income' : 'expense'}
          onEdit={(id) => console.log(`Edit transaction with id: ${id}`)}
          onDelete={(id) => console.log(`Delete transaction with id: ${id}`)}
        />
      ))}
    </div>
  );
}

export default App;
