import { BoxButton } from "../../components/buttons";
import { AddPhotoIcon } from "../../components/icons";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

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
        <TextArea name="desc" label="Description" />
        <BoxButton className="w-full">Upload Product</BoxButton>
      </div>
    </Layout>
  );
}
