import { cls } from "../../libs/client/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function CircleButton({ className = "", children }: Props) {
  return (
    <button
      className={cls(
        "w-14 h-14 flex justify-center items-center bg-orange-500 text-white border-none rounded-full hover:bg-orange-600 focus:outline-none focus:bg-orange-600",
        className
      )}
    >
      {children}
    </button>
  );
}
