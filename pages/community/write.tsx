import { BoxButton } from "../../components/buttons";
import Layout from "../../components/layout";

export default function Write() {
  return (
    <Layout canGoBack>
      <form className="px-4">
        <textarea
          id="desc"
          rows={4}
          placeholder="Ask a question"
          className="w-full shadow-sm mt-1 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
        />
        <BoxButton className="w-full mt-2">Submit</BoxButton>
      </form>
    </Layout>
  );
}
