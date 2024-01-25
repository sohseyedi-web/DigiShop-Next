
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import AddToPayment from "./AddToPayment";

const CartSummary = ({ payDetail, cartLen }) => {
  const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;
  return (
    <div className="w-full space-y-2">
      <p className="font-bold text-center">اطلاعات پرداخت</p>
      <hr />
      <div className="flex items-center justify-between">
        <span className="font-semibold">جمع خرید</span>
        <span>{toPersianNumbersWithComma(totalGrossPrice)}</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-semibold">تخفیف</span>
        <span>{toPersianNumbersWithComma(totalOffAmount)}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-semibold">تعداد سفارشات</span>
        <span>{toPersianNumbersWithComma(cartLen)}x</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-semibold">مبلغ قابل پرداخت</span>
        <span>{toPersianNumbersWithComma(totalPrice)}</span>
      </div>
      <AddToPayment/>
    </div>
  );
};

export default CartSummary;
