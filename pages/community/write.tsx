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
        <button className="w-full bg-orange-500 text-white text-sm font-medium shadow-sm transition px-4 py-2 mt-2 border border-transparent rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Submit
        </button>
      </form>
    </Layout>
  );
}
