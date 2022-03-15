export default function LiveCreate() {
  return (
    <div className="px-4 py-10 space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm text-gray-700 font-medium mb-1"
        >
          Name
        </label>
        <div className="relative flex items-center shadow-sm rounded-md">
          <input
            id="name"
            type="text"
            className="appearance-none w-full shadow-sm placeholder-gray-400 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="price"
          className="block text-sm text-gray-700 font-medium mb-1"
        >
          Price
        </label>
        <div className="relative flex items-center shadow-sm rounded-md">
          <div className="absolute left-0 flex justify-center items-center pointer-events-none pl-3">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="appearance-none w-full shadow-sm placeholder-gray-400 px-3 py-2 pl-7 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute right-0 flex justify-center items-center pointer-events-none pr-3">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="desc"
          className="block text-sm text-gray-700 font-medium mb-1"
        >
          Description
        </label>
        <textarea
          id="desc"
          rows={4}
          className="w-full shadow-sm mt-1 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
      <button className="w-full bg-orange-500 text-white text-sm font-medium shadow-sm transition px-4 py-2 border border-transparent rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Go live
      </button>
    </div>
  );
}
