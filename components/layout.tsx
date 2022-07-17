import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/client/utils";
import {
  ChatBubbleIcon,
  ChevronLeftIcon,
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
  const router = useRouter();
  const clickGoToBack = () => {
    router.back();
  };

  return (
    <div>
      <div
        className={cls(
          "w-full max-w-lg fixed top-0 flex items-center bg-white text-lg font-medium text-gray-700 px-5 py-3 border-b",
          !canGoBack ? "justify-center" : ""
        )}
      >
        {canGoBack && (
          <button onClick={clickGoToBack}>
            <ChevronLeftIcon />
          </button>
        )}
        {title && <span>{title}</span>}
      </div>
      <div className={cls("pt-[4.5rem]", hasTabBar ? "pb-24" : "")}>
        {children}
      </div>
      {hasTabBar && (
        <nav className="w-full max-w-lg fixed bottom-0 flex justify-between items-center bg-white text-gray-800 border-t px-10 pb-5 pt-3">
          <Link href="/">
            <a
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === "/"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <HomeIcon />
              <span>Home</span>
            </a>
          </Link>
          <Link href="/community">
            <a
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === "/community"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <NewsIcon />
              <span>Town</span>
            </a>
          </Link>
          <Link href="/chats">
            <a
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === "/chats"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <ChatBubbleIcon className="w-6 h-6" />
              <span>Chat</span>
            </a>
          </Link>
          <Link href="/live">
            <a
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === "/live"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <VideoIcon />
              <span>Live</span>
            </a>
          </Link>
          <Link href="/profile">
            <a
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === "/profile"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <UserIcon />
              <span>Profile</span>
            </a>
          </Link>
        </nav>
      )}
    </div>
  );
}
