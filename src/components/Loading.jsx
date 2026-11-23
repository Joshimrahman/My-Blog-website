
function Loading() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="ml-4 text-gray-600 font-medium">
        Loading blog posts...
      </p>
    </div>
  );
}

export default Loading;