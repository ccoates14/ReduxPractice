import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
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
  ],
};

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTransaction: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
    updateTransaction: (state, action) => {
      const index = state.items.findIndex(t => t.id === action.payload.id);
        if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
  },
});

export const { addTransaction, deleteTransaction, updateTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;