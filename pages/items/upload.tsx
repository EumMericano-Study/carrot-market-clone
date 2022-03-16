import { BoxButton } from "../../components/buttons";
import { AddPhotoIcon } from "../../components/icons";
import Input from "../../components/input";
import Layout from "../../components/layout";

export default function Upload() {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-5">
        <div>
          <label
            htmlFor="photo"
            className="w-full h-48 flex justify-center items-center text-gray-600 transition-colors cursor-pointer border-2 border-dashed border-gray-300 rounded-md hover:text-orange-500 hover:border-orange-500"
          >
            <AddPhotoIcon />
            <input id="photo" type="file" accept="image/*" className="hidden" />
          </label>
        </div>
        <div>
          <Input label="Name" name="name" type="text" />
        </div>
        <div>
          <Input label="Price" name="price" kind="price" type="number" />
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
        <BoxButton className="w-full">Upload Product</BoxButton>
      </div>
    </Layout>
  );
}
