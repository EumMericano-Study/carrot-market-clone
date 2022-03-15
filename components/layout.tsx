import { cls } from "../libs/utils";
import {
  ChatBubbleIcon,
  HomeIcon,
  NewsIcon,
  UserIcon,
  VideoIcon,
} from "./icons";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div className="w-full max-w-lg fixed top-0 flex justify-center items-center bg-white text-lg font-medium text-gray-700 py-3 border-b">
        {title && <span>{title}</span>}
      </div>
      <div className={cls("pt-[4.5rem]", hasTabBar ? "pb-24" : "")}>
        {children}
      </div>
      {hasTabBar && (
        <nav className="w-full max-w-lg fixed bottom-0 flex justify-between items-center bg-white text-gray-800 border-t px-10 pb-5 pt-3">
          <div className="flex flex-col items-center space-y-2">
            <HomeIcon />
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <NewsIcon />
            <span>Town</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <ChatBubbleIcon className="w-6 h-6" />
            <span>Chat</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <VideoIcon />
            <span>Live</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <UserIcon />
            <span>Profile</span>
          </div>
        </nav>
      )}
    </div>
  );
}
