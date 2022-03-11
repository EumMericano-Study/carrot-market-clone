import { useState } from "react";
import { GithubIcon, TwitterIcon } from "../components/icons";

function cls(...className: string[]) {
  return className.join(" ");
}

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const setToEmail = () => setMethod("email");
  const setToPhone = () => setMethod("phone");
  return (
    <div className="px-4 mt-16">
      <h3 className="text-3xl font-bold text-center">Enter to Carrot</h3>
      <div className="mt-8">
        <div className="flex flex-col items-center">
          <h5 className="text-ms font-medium text-gray-500">Enter using</h5>
          <div className="w-full grid grid-cols-2 gap-16 mt-8 border-b">
            <button
              className={cls(
                "font-medium pb-4 border-b-2",
                method === "email"
                  ? "text-orange-500 border-orange-500"
                  : "text-gray-500 border-transparent"
              )}
              onClick={setToEmail}
            >
              Email
            </button>
            <button
              className={cls(
                "font-medium pb-4 border-b-2",
                method === "phone"
                  ? "text-orange-500 border-orange-500"
                  : "text-gray-500 border-transparent"
              )}
              onClick={setToPhone}
            >
              Phone
            </button>
          </div>
        </div>
        <form className="flex flex-col mt-8">
          <label htmlFor="input" className="text-sm text-gray-700 font-medium">
            {method === "email" && "Email address"}
            {method === "phone" && "Phone number"}
          </label>
          <div className="mt-1">
            {method === "email" && (
              <input
                id="input"
                type="email"
                required
                className="appearance-none w-full shadow-sm placeholder-gray-400 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            )}
            {method === "phone" && (
              <div className="flex shadow-sm rounded-md">
                <span className="flex justify-center items-center bg-gray-50 text-sm text-gray-500 select-none px-3 border border-r-0 border-gray-300 rounded-l-md">
                  +82
                </span>
                <input
                  id="input"
                  type="number"
                  required
                  className="appearance-none w-full shadow-sm placeholder-gray-400 px-3 py-2 border border-gray-300 rounded-md rounded-l-none focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            )}
          </div>
          <button className="bg-orange-500 text-white text-sm font-medium shadow-sm transition px-4 py-2 mt-5 border border-transparent rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
            {method === "email" && "Get login link"}
            {method === "phone" && "Get one-time password"}
          </button>
        </form>
        <div className="mt-8">
          <div className="relative">
            <div className="w-full absolute border-t border-gray-300" />
            <div className="relative -top-3 text-center">
              <span className="bg-white text-sm text-gray-500 px-3">
                Or Enter With
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <button className="flex justify-center items-center bg-white text-sm font-medium fill-gray-500 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 hover:fill-gray-600">
              <TwitterIcon className="w-5 h-5" />
            </button>
            <button className="flex justify-center items-center bg-white text-sm font-medium fill-gray-500 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 hover:fill-gray-600">
              <GithubIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
