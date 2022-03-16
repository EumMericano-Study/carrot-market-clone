import { BoxButton } from "../../components/buttons";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

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
        <TextArea name="desc" label="Description" />
        <BoxButton className="w-full">Go live</BoxButton>
      </div>
    </Layout>
  );
}
