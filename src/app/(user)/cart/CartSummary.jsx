import Loading from "@/ui/Loading";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

const CartSummary = ({ payDetail, cartLen }) => {
  const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;
  let loading = false;
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
        <span>{toPersianNumbersWithComma(totalOffAmount)}-</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-semibold">تعداد سفارشات</span>
        <span>{toPersianNumbersWithComma(cartLen)}x</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-semibold">مبلغ قابل پرداخت</span>
        <span>{toPersianNumbersWithComma(totalPrice)}</span>
      </div>
      <button className="mt-2 btn btn-active btn-primary w-full text-lg h-[45px] text-white">
        {loading ? <Loading /> : "ثبت سفارش"}
      </button>
    </div>
  );
};

export default CartSummary;
