import Link from "next/link";
import { CircleButton } from "../../components/buttons";
import { VideoIcon } from "../../components/icons";
import Layout from "../../components/layout";

export default function Live() {
  return (
    <Layout hasTabBar title="라이브">
      <div className="space-y-4 divide-y-2">
        {Array(5)
          .fill("")
          .map((_, index) => (
            <Link key={index} href={`/live/${index}`}>
              <a className="block px-4 pt-4">
                <div className="w-full aspect-video bg-slate-300 shadow-sm rounded-md" />
                <h3 className="text-lg text-gray-700 mt-2">
                  Hey, you can really dance?
                </h3>
              </a>
            </Link>
          ))}
        <Link href="/live/create">
          <a>
            <CircleButton className="fixed bottom-24 right-10">
              <VideoIcon className="w-7 h-7" />
            </CircleButton>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
