import { BoxButton } from "../../components/buttons";
import { HeartIcon } from "../../components/icons";
import Layout from "../../components/layout";

export default function ItemDetail() {
  return (
    <Layout canGoBack>
      <div className="px-4">
        <div className="mb-8">
          <div className="h-96 bg-slate-300" />
          <div className="flex items-center cursor-pointer py-3 space-x-3 border-y">
            <div className="w-12 h-12 bg-slate-300 rounded-full" />
            <div>
              <p className="text-sm font-medium text-gray-700">Steve Jobs</p>
              <p className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
            <span className="block text-3xl text-gray-900 mt-3">$1500</span>
            <p className="text-gray-700 my-6">
              This is new generation phone! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Officiis est labore corrupti
              laudantium! Corrupti, quos corporis? Amet labore deleniti dolorem
              expedita odit ut non saepe distinctio aperiam, inventore, ipsa
              eius corrupti maxime. Amet maxime obcaecati soluta corporis ab
              dolor aperiam eaque! Atque vel, maxime quae assumenda saepe
              repudiandae error dolorem!
            </p>
            <div className="flex justify-between items-center space-x-2">
              <BoxButton className="flex-1 py-3 mt-0">Talk to seller</BoxButton>
              <button className="flex justify-center items-center text-gray-400 p-3 rounded-md hover:bg-gray-100 hover:text-gray-500">
                <HeartIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <div key={index}>
                  <div className="w-full h-56 bg-slate-300 mb-4" />
                  <h3 className="text-gray-700 -mb-0.5">Galaxy S60</h3>
                  <span className="text-sm font-medium text-gray-900">
                    $1600
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
