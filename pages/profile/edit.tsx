import Layout from "../../components/layout";
import { BoxButton } from "../../components/buttons";

export default function EditProfile() {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 bg-slate-500 rounded-full" />
          <label
            htmlFor="picture"
            className="text-sm font-medium text-gray-700 shadow-md cursor-pointer px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Change
            <input
              id="picture"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm text-gray-700 font-medium">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            className="appearance-none w-full shadow-sm placeholder-gray-400 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm text-gray-700 font-medium">
            Phone number
          </label>
          <div className="flex shadow-sm rounded-md">
            <span className="flex justify-center items-center bg-gray-50 text-sm text-gray-500 select-none px-3 border border-r-0 border-gray-300 rounded-l-md">
              +82
            </span>
            <input
              id="phone"
              type="number"
              required
              className="appearance-none w-full shadow-sm placeholder-gray-400 px-3 py-2 border border-gray-300 rounded-md rounded-l-none focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
        <BoxButton className="w-full">Upload profile</BoxButton>
      </div>
    </Layout>
  );
}
