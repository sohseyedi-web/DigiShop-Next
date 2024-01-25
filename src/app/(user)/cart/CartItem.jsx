"use client";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { SiRobotframework } from "react-icons/si";
import * as RiIcon from "react-icons/ri";
import { useAddToCart, useRemoveCart } from "@/hooks/useCart";

const CartItem = ({ cartItem }) => {
  const { addCart } = useAddToCart();
  const { removeCart } = useRemoveCart();

  return (
    <div
      className="flex items-center justify-between my-2 border rounded shadow-sm px-2"
      key={cartItem._id}
    >
      <div className="flex items-center">
        <div className="w-[125px] h-[125px] text-white bg-indigo-600 rounded flex items-center justify-center gap-x-2">
          <SiRobotframework size={28} />
          <span className="text-xl font-bold">دیجی شاپ</span>
        </div>
        <div className="text-[1.1rem] mr-5">
          <div
            className={"font-semibold"}
          >
            {cartItem.title}
          </div>
          <div className={`${
              cartItem.discount ? "line-through text-gray-500" : "font-bold"
            }`}>
            {toPersianNumbersWithComma(cartItem.price)} تومان
          </div>
          {!!cartItem.discount && (
            <div className="flex items-center gap-x-2 mt-2">
              <p className="font-bold">
                {" "}
                {toPersianNumbersWithComma(cartItem.offPrice)}
              </p>
              <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                {toPersianNumbersWithComma(cartItem.discount)} %
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <button
          onClick={() => addCart(cartItem?._id)}
          className="btn btn-circle btn-success btn-sm text-white border-none"
        >
          <RiIcon.RiAddLine size={24} />
        </button>
        <span className="font-semibold">
          {toPersianNumbersWithComma(cartItem.quantity)}
        </span>
        <button
          onClick={() => removeCart(cartItem?._id)}
          className={`${
            cartItem.quantity > 1
              ? "btn-success btn btn-sm btn-circle"
              : "btn-error btn btn-sm btn-circle"
          } text-white border-none`}
        >
          {cartItem.quantity > 1 ? (
            <RiIcon.RiSubtractFill size={24} />
          ) : (
            <RiIcon.RiDeleteBin2Line size={22} />
          )}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
