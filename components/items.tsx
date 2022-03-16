import Link from "next/link";
import { ChatBubbleIcon, HeartIcon } from "./icons";

interface Props {
  id: number;
  title: string;
  price: number;
  comments: number;
  likes: number;
}

export default function Item({ id, title, price, comments, likes }: Props) {
  return (
    <Link href={`/items/${id}`}>
      <a className="flex justify-between cursor-pointer px-4 pb-4 border-b">
        <div className="flex space-x-4">
          <div className="w-20 h-20 bg-gray-400 rounded-md" />
          <div className="flex flex-col pt-2">
            <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            <span className="font-medium text-gray-900 mt-2">￦ {price}</span>
          </div>
        </div>
        <div className="flex justify-end items-end space-x-2">
          <div className="flex items-center text-sm text-gray-500 space-x-0.5">
            <HeartIcon />
            <span>{likes}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 space-x-0.5">
            <ChatBubbleIcon />
            <span>{comments}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
