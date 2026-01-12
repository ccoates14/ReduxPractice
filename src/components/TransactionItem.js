const TransactionItem = ({ id, description, amount, type, date, onEdit, onDelete }) => {
  // Determine color based on transaction type
  const isIncome = type === 'income';
  const amountColor = isIncome ? 'text-green-600' : 'text-red-600';
  const symbol = isIncome ? '+' : '-';

  return (
    <div className="flex items-center justify-between p-4 mb-3 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* Left Side: Description */}
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          {type}
        </span>
        <span className="text-lg font-semibold text-gray-800">
          {description}
        </span>
        <span className="text-sm text-gray-400">
          {new Date(date).toLocaleDateString()}
        </span>
      </div>

      {/* Right Side: Amount & Actions */}
      <div className="flex items-center space-x-6">
        <span className={`text-xl font-bold ${amountColor}`}>
          {symbol}${Math.abs(amount).toLocaleString()}
        </span>

        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(id)}
            className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded hover:bg-blue-100 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;