"use client";

import { useAuth } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import Link from "next/link";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function CartPage() {
  const { cart, user, isLoading } = useAuth();

  if (isLoading) return <Loading />;

  const cartLen = user?.cart?.products.reduce(
    (acc, cur) => acc + cur.quantity,
    0
  );

  if (!user) {
    return (
      <div className=" text-center w-full pt-5">
        <p className="font-bold mb-4">
          برای مشاهده سبد خرید لطفا وارد حساب شوید{" "}
        </p>
        <Link href="/auth" className="text-lg font-bold text-indigo-700">
          رفتن به صفحه لاگین؟
        </Link>
      </div>
    );
  }

  if (user?.cart?.products.length === 0) {
    return (
      <div className="w-full text-center pt-5">
        <p className="font-bold mb-4">سبد خرید خالیه!</p>
        <Link href="/products" className="text-lg font-bold text-indigo-700">
          رفتن به صفحه محصولات
        </Link>
      </div>
    );
  }

  return (
    <section className="container max-w-7xl mx-auto pt-5 lg:px-0 px-3">
      {cart ? (
        <div className="w-full flex justify-between lg:flex-row flex-col gap-y-3">
          <div className="lg:w-[75%] w-full p-2 rounded-md shadow-md">
            <h4 className="font-bold py-1 text-center">سبد خرید</h4>
            <hr />
            {cart?.productDetail?.map((item) => (
              <CartItem key={item._id} cartItem={item} />
            ))}
          </div>
          <div className="lg:w-[23%] w-full p-2 rounded-md shadow-md">
            <CartSummary payDetail={cart.payDetail} cartLen={cartLen} />
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default CartPage;
