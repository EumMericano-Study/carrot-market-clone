import Layout from "../../components/layout";
import { BoxButton } from "../../components/buttons";
import Input from "../../components/input";

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
          <Input kind="text" type="email" label="Email address" name="email" />
        </div>
        <div className="space-y-1">
          <Input kind="phone" type="number" label="Phone number" name="phone" />
        </div>
        <BoxButton className="w-full">Upload profile</BoxButton>
      </div>
    </Layout>
  );
}
