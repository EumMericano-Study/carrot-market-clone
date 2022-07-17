import { useState } from "react";
import { useForm } from "react-hook-form";
import { BoxButton } from "../components/buttons";
import { GithubIcon, TwitterIcon } from "../components/icons";
import Input from "../components/input";
import { cls } from "../libs/client/utils";

interface EnterForm {
  email?: string;
  phone?: string;
}

export default function Enter() {
  const { register, handleSubmit, reset } = useForm<EnterForm>();
  const [method, setMethod] = useState<"email" | "phone">("email");
  const setToEmail = () => {
    reset();
    setMethod("email");
  };
  const setToPhone = () => {
    reset();
    setMethod("phone");
  };
  const onValid = (data: EnterForm) => {
    fetch("/api/users/enter", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
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
        <form className="flex flex-col mt-8" onSubmit={handleSubmit(onValid)}>
          {method === "email" && (
            <Input
              register={register("email", { required: true })}
              type="email"
              required={true}
              label={method}
              name={method}
              kind="text"
            />
          )}
          {method === "phone" && (
            <Input
              register={register("phone", { required: true })}
              type="number"
              required={true}
              label={method}
              name={method}
              kind="phone"
            />
          )}
          <BoxButton>
            {method === "email" && "Get login link"}
            {method === "phone" && "Get one-time password"}
          </BoxButton>
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
