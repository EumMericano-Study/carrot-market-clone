import CircleButton from "../../components/buttons/circle";
import { VideoIcon } from "../../components/icons";
import Layout from "../../components/layout";

export default function Live() {
  return (
    <Layout hasTabBar title="라이브">
      <div className="py-10 space-y-4 divide-y-2">
        {Array(5)
          .fill("")
          .map((_, index) => (
            <div key={index} className="px-4 pt-4">
              <div className="w-full aspect-video bg-slate-300 shadow-sm rounded-md" />
              <h3 className="text-lg text-gray-700 mt-2">
                Hey, you can really dance?
              </h3>
            </div>
          ))}
        <CircleButton className="fixed bottom-24 right-10">
          <VideoIcon className="w-7 h-7" />
        </CircleButton>
      </div>
    </Layout>
  );
}
