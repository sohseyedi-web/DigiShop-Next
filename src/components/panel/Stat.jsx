import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

const bgColors = {
  blue: "bg-blue-400",
  green: "bg-green-400",
  indigo: "bg-indigo-400",
};

const Stat = ({ title, value, icon, color }) => {
  return (
    <div className="lg:w-[30%] md:w-[45%] w-full bg-gray-900 rounded-md shadow-md p-2 flex items-center gap-x-4 ">
      <div
        className={`rounded-full flex items-center justify-center p-2 ${bgColors[color]}`}
      >
        {icon}
      </div>
      <div className="flex-1 space-y-3">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-3xl font-bold">
          {toPersianNumbersWithComma(String(value))}
        </p>
      </div>
    </div>
  );
};

export default Stat;