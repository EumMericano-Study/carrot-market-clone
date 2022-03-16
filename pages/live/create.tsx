import { BoxButton } from "../../components/buttons";
import Input from "../../components/input";
import Layout from "../../components/layout";

export default function LiveCreate() {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-5">
        <div>
          <Input label="Name" name="name" kind="text" />
        </div>
        <div>
          <Input label="Price" name="price" kind="price" />
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
        <BoxButton className="w-full">Go live</BoxButton>
      </div>
    </Layout>
  );
}
