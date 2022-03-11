import { ChatBubbleIcon, CheckIcon, PencilIcon } from "../../components/icons";

export default function Community() {
  return (
    <div className="px-4 py-16 space-y-8">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <div key={index} className="flex items-start flex-col cursor-pointer">
            <span className="fled items-center bg-gray-100 text-sm text-gray-800 font-medium px-2.5 py-0.5 rounded-full">
              동네 질문
            </span>
            <div className="text-gray-700 mt-2">
              <span className="text-orange-500 font-medium">Q.</span> What is
              the best mandu restaurant?
            </div>
            <div className="w-full flex justify-between items-center text-xs font-medium text-gray-500 mt-5">
              <span>영현</span>
              <span>18시간 전</span>
            </div>
            <div className="w-full flex text-gray-700 py-2.5 mt-3 space-x-5 border-t border-b-2">
              <span className="flex items-center text-sm space-x-2">
                <CheckIcon />
                <span>궁금해요</span>
              </span>
              <span className="flex items-center text-sm space-x-2">
                <ChatBubbleIcon />
                <span>답변 1</span>
              </span>
            </div>
          </div>
        ))}
      <button className="fixed bottom-24 right-10 bg-orange-500 text-white transition-colors cursor-pointer shadow-xl p-4 rounded-full hover:bg-orange-600">
        <PencilIcon />
      </button>
    </div>
  );
}
