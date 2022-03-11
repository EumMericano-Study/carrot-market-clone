export default function Chats() {
  return (
    <div className="py-10 divide-y">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer px-4 py-3 mb-3 space-x-3"
          >
            <div className="w-10 h-10 bg-slate-300 rounded-full" />
            <div>
              <p className="text-gray-700">Steve Jobs</p>
              <p className="text-sm text-gray-500">
                See you tomorrow in the corner at 2pm.
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
