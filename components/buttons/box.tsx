import { cls } from "../../libs/client/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function BoxButton({ className = "", children }: Props) {
  return (
    <button
      className={cls(
        "bg-orange-500 text-white text-sm font-medium shadow-sm transition px-4 py-2 mt-5 border border-transparent rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none",
        className
      )}
    >
      {children}
    </button>
  );
}
