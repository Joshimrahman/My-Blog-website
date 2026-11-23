
function ErrorMessage({ message, onRetry }) {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-red-600 mb-3">
        Something went wrong!
      </h2>

      <p className="text-gray-600 mb-5">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;