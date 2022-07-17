import { cls } from "../libs/client/utils";

interface Props {
  avatarUrl?: string;
  message: string;
  reversed?: boolean;
}

export default function ChatMessage({ avatarUrl, message, reversed }: Props) {
  return (
    <div
      className={cls(
        "flex items-start",
        reversed ? "flex-row-reverse space-x-reverse" : "space-x-2"
      )}
    >
      <div className="w-8 h-8 bg-slate-400 rounded-full" />
      <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
        <p>{message}</p>
      </div>
    </div>
  );
}
