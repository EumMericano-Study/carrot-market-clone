import { ChatBubbleIcon, CheckIcon, PencilIcon } from "../../components/icons";

export default function Community() {
  return (
    <div>
      <div>
        <span>동네 질문</span>
        <span>
          <span>Q.</span> What is the best mandu restaurant?
        </span>
        <div>
          <span>영현</span>
          <span>18시간 전</span>
        </div>
        <div>
          <span>
            <CheckIcon />
            <span>궁금해요</span>
          </span>
          <span>
            <ChatBubbleIcon />
            <span>답변 1</span>
          </span>
        </div>
      </div>
      <button>
        <PencilIcon />
      </button>
    </div>
  );
}
