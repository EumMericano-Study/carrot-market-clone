import { AddPhotoIcon } from "../../components/icons";

export default function Upload() {
  return (
    <div className="px-4 py-16">
      <div>
        <label className="w-full h-48 flex justify-center items-center text-gray-600 transition-colors cursor-pointer border-2 border-dashed border-gray-300 rounded-md hover:text-orange-500 hover:border-orange-500">
          <AddPhotoIcon />
          <input type="file" className="hidden" />
        </label>
      </div>
      <div className="py-5">
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
      <button className="w-full bg-orange-500 text-white text-sm font-medium shadow-sm transition px-4 py-2 mt-5 border border-transparent rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Upload Product
      </button>
    </div>
  );
}
