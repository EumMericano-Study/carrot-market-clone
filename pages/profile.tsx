import {
  CartIcon,
  HeartIcon,
  ShoppingIcon,
  StarIcon,
} from "../components/icons";

export default function Profile() {
  return (
    <div className="">
      <div className="w-12 h-12 bg-slate-300 rounded-full" />
      <div>
        <p className="text-sm font-medium text-gray-700">Steve Jobs</p>
        <p className="text-xs font-medium text-gray-500">View profile &rarr;</p>
      </div>
      <div>
        <div>
          <div>
            <CartIcon />
          </div>
          <span>판매 내역</span>
        </div>
        <div>
          <div>
            <ShoppingIcon />
          </div>
          <span>구매 내역</span>
        </div>
        <div>
          <div>
            <HeartIcon />
          </div>
          <span>관심 목록</span>
        </div>
      </div>
      <div>
        <div>
          <div />
          <div>
            <h4>영현</h4>
            <div>
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
                className="text-yellow-400 h-5 w-5"
                fill="rgb(250, 204, 21)"
              />
            </div>
          </div>
        </div>
        <div>
          <p>
            {" "}
            Normally, both your asses would be dead as fucking fried chicken,
            but you happen to pull this shit while I&apos;m in a transitional
            period so I don&apos;t wanna kill you, I wanna help you. But I
            can&apos;t give you this case, it don&apos;t belong to me. Besides,
            I&apos;ve already been through too much shit this morning over this
            case to hand it over to your dumb ass.
          </p>
        </div>
      </div>
    </div>
  );
}
