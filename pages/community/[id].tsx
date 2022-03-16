import { BoxButton } from "../../components/buttons";
import { ChatBubbleIcon, CheckIcon } from "../../components/icons";
import Layout from "../../components/layout";

export default function CommunityDetailPage() {
  return (
    <Layout canGoBack>
      <div>
        <span className="inline-flex items-center bg-gray-100 text-sm text-gray-800 font-medium px-2.5 ml-4 my-3 rounded-full">
          동네 질문
        </span>
        <div className="flex items-center cursor-pointer px-4 py-3 mb-3 space-x-3 border-b">
          <div className="w-10 h-10 bg-slate-300 rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jobs</p>
            <p className="text-xs font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div>
          <div className="text-gray-700 px-4 mt-2">
            <span className="text-orange-500 font-medium">Q.</span> What is the
            best mandu restaurant?
          </div>
        </div>
        <div className="w-full flex text-gray-700 px-4 py-2.5 mt-3 space-x-5 border-t border-b-2">
          <span className="flex items-center text-sm space-x-2">
            <CheckIcon />
            <span>궁금해요</span>
          </span>
          <span className="flex items-center text-sm space-x-2">
            <ChatBubbleIcon />
            <span>답변 1</span>
          </span>
        </div>
        <div className="px-4 my-5 space-y-5">
          {Array(3)
            .fill("")
            .map((_, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-slate-300 rounded-full" />
                <div>
                  <span className="block text-sm font-medium text-gray-700">
                    Steve Jobs
                  </span>
                  <span className="block text-xs text-gray-500">2시간 전</span>
                  <p className="text-gray-700 mt-2">
                    The best mandu restaurant is the one next to my house
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="px-4">
          <textarea
            id="desc"
            rows={4}
            placeholder="Answer this question"
            className="w-full shadow-sm mt-1 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
          <BoxButton className="w-full">Reply</BoxButton>
        </div>
      </div>
    </Layout>
  );
}
