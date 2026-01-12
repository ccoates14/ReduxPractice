import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTransaction, deleteTransaction, updateTransaction } from './slices/transactionSlice';
import TransactionItem from './components/TransactionItem';
import EditTransactionWindow from './components/AddEditTransactionWindow';


function App() {
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [showEditWindow, setShowEditWindow] = useState(false);
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions.items);

  return (
    <div className="App">

      <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onClick={() => {
        setEditingTransaction(null);
        setShowEditWindow(true);
      }}>
        Add Transaction
      </button>

      {transactions.map(transaction => (
        <TransactionItem
          key={transaction.id}
          id={transaction.id}
          description={transaction.description}
          amount={transaction.amount}
          date={transaction.date}
          type={transaction.amount > 0 ? 'income' : 'expense'}
          onEdit={(id) => {
              setEditingTransaction(id);
              setShowEditWindow(true);
          }}
          onDelete={(id) => {
              dispatch(deleteTransaction(id));
          }}
        />
      ))}

      {showEditWindow && (
        <EditTransactionWindow
          transaction={transactions.find(t => t.id === editingTransaction)}
          onClose={() => setShowEditWindow(false)}
          onSave={(updatedTransaction) => {

            if (!editingTransaction) {
              const newTransaction = {
                ...updatedTransaction,
                id: Date.now(),
              };
              dispatch(addTransaction(newTransaction));
            } else {
              dispatch(updateTransaction(updatedTransaction));
            }

            setShowEditWindow(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
