import CircleButton from "../../components/buttons/circle";
import {
  CartIcon,
  HeartIcon,
  ShoppingIcon,
  StarIcon,
} from "../../components/icons";
import Layout from "../../components/layout";

export default function Profile() {
  return (
    <Layout hasTabBar title="나의 캐럿">
      <div className="px-4">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 bg-slate-300 rounded-full" />
          <div className="flex flex-col">
            <p className="font-medium text-gray-900">Steve Jobs</p>
            <p className="text-sm font-medium text-gray-700">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="flex justify-around mt-10">
          <div className="flex items-center flex-col">
            <CircleButton>
              <CartIcon />
            </CircleButton>
            <span className="text-sm font-medium text-gray-700 mt-2">
              판매 내역
            </span>
          </div>
          <div className="flex items-center flex-col">
            <CircleButton>
              <ShoppingIcon />
            </CircleButton>
            <span className="text-sm font-medium text-gray-700 mt-2">
              구매 내역
            </span>
          </div>
          <div className="flex items-center flex-col">
            <CircleButton>
              <HeartIcon className="w-6 h-6" />
            </CircleButton>
            <span className="text-sm font-medium text-gray-700 mt-2">
              관심 목록
            </span>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-slate-300 rounded-full" />
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-gray-800">영현</h4>
              <div className="flex items-center">
                <StarIcon
                  className="text-yellow-400 h-5 w-5"
                  fill="rgb(250, 204, 21)"
                />
                <StarIcon
                  className="text-yellow-400 h-5 w-5"
                  fill="rgb(250, 204, 21)"
                />
                <StarIcon
                  className="text-yellow-400 h-5 w-5"
                  fill="rgb(250, 204, 21)"
                />
                <StarIcon
                  className="text-yellow-400 h-5 w-5"
                  fill="rgb(250, 204, 21)"
                />
                <StarIcon
                  className="text-gray-300 h-5 w-5"
                  fill="rgb(209, 213, 219)"
                />
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 mt-4">
            <p>
              Normally, both your asses would be dead as fucking fried chicken,
              but you happen to pull this shit while I&apos;m in a transitional
              period so I don&apos;t wanna kill you, I wanna help you. But I
              can&apos;t give you this case, it don&apos;t belong to me.
              Besides, I&apos;ve already been through too much shit this morning
              over this case to hand it over to your dumb ass.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
