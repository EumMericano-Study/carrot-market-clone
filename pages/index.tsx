import type { NextPage } from "next";
import { HeartIcon, ChatBubbleIcon, PlusIcon } from "../components/icons";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="home" hasTabBar>
      <div className="flex flex-col space-y-5">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex justify-between cursor-pointer px-4 pb-4 border-b"
            >
              <div className="flex space-x-4">
                <div className="w-20 h-20 bg-gray-400 rounded-md" />
                <div className="flex flex-col pt-2">
                  <h3 className="text-sm font-medium text-gray-900">
                    New Iphone 14
                  </h3>
                  <span className="text-xs text-gray-500">Black</span>
                  <span className="font-medium text-gray-900 mt-2">$95</span>
                </div>
              </div>
              <div className="flex justify-end items-end space-x-2">
                <div className="flex items-center text-sm text-gray-500 space-x-0.5">
                  <HeartIcon />
                  <span>1</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-0.5">
                  <ChatBubbleIcon />
                  <span>1</span>
                </div>
              </div>
            </div>
          ))}
        <button className="fixed bottom-24 right-10 bg-orange-500 text-white transition-colors cursor-pointer shadow-xl p-4 border-transparent  rounded-full hover:bg-orange-600">
          <PlusIcon className="w-7 h-7" />
        </button>
      </div>
    </Layout>
  );
};

export default Home;
