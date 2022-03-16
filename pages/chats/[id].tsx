import ChatMessage from "../../components/chatMessage";
import Layout from "../../components/layout";

export default function ChatDetail() {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-4 ">
        <ChatMessage message="얼마에 파시나요?" />
        <ChatMessage message="20000원이요" reversed />
        <ChatMessage message="미쳤어" />
        <div className="w-full max-w-md fixed bottom-2 inset-x-0 mx-auto">
          <div className="relative flex items-center">
            <input
              type="text"
              className="w-full shadow-sm pr-12 rounded-full border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-orange-500"
            />
            <div className="absolute flex inset-y-0 right-0 py-1.5 pr-1.5">
              <button className="flex items-center bg-orange-500 text-sm text-white cursor-pointer px-3 rounded-full hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
