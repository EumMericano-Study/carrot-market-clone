import { VideoIcon } from "../../components/icons";

export default function StreamDetail() {
  return (
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
      <button className="fixed bottom-24 right-10 bg-orange-500 text-white transition-colors cursor-pointer shadow-xl p-4 border-transparent rounded-full hover:bg-orange-600">
        <VideoIcon className="w-7 h-7" />
      </button>
    </div>
  );
}
