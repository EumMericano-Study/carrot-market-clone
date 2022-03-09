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
    <div className="mt-16">
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
        <form>
          <label>
            {method === "email" && "Email address"}
            {method === "phone" && "Phone number"}
          </label>
          <div>
            {method === "email" && <input type="email" required />}
            {method === "phone" && (
              <div>
                <span>+82</span>
                <input type="number" required />
              </div>
            )}
          </div>
          <button>
            {method === "email" && "Get login link"}
            {method === "phone" && "Get one-time password"}
          </button>
        </form>
        <div>
          <div>
            <div />
            <div>
              <span>Or Enter With</span>
            </div>
          </div>
          <div>
            <button>
              <TwitterIcon />
            </button>
            <button>
              <GithubIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
