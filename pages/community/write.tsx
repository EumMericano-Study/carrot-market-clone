import { BoxButton } from "../../components/buttons";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

export default function Write() {
  return (
    <Layout canGoBack>
      <form className="px-4">
        <TextArea placeholder="Ask a question" name="ask" />
        <BoxButton className="w-full mt-2">Submit</BoxButton>
      </form>
    </Layout>
  );
}
