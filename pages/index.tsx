import type { NextPage } from "next";
import Link from "next/link";
import { CircleButton } from "../components/buttons";
import { PlusIcon } from "../components/icons";
import Item from "../components/items";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="home" hasTabBar>
      <div className="flex flex-col space-y-5">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <Item
              id={index}
              title="New Iphone 14"
              price={1600000}
              likes={10}
              comments={20}
            />
          ))}
        <Link href="items/upload">
          <a>
            <CircleButton className="fixed bottom-24 right-10">
              <PlusIcon className="w-7 h-7" />
            </CircleButton>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
