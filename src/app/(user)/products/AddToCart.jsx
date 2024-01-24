"use client";
import { useAuth } from "@/hooks/useAuth";
import { useAddToCart } from "@/hooks/useCart";
import Loading from "@/ui/Loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const AddToCart = ({ productId }) => {
  const { user } = useAuth();
  const { addCart, isAdding } = useAddToCart();
  const router = useRouter();

  const addToCartHandler = async () => {
    if (!user) {
      toast.error("ابتدا وارد سایت شوید");
      router.push("/auth");
      return;
    }
    try {
      await addCart(productId);
    } catch (error) {
      console.log(error);
    }
  };

  const isInCart = (user, productId) => {
    if (!user) return false;
    return user.cart?.products.some((p) => p.productId === productId);
  };

  return (
    <>
      {isInCart(user, productId) ? (
        <Link
          href={"/cart"}
          className="w-2/3 btn btn-success text-lg h-[45px] text-white"
        >
          ادامه سفارش
        </Link>
      ) : (
        <button
          onClick={addToCartHandler}
          className="w-2/3 btn btn-active btn-primary text-lg h-[45px] text-white"
        >
          {isAdding ? <Loading /> : "اضافه به سبد خرید"}
        </button>
      )}
    </>
  );
};

export default AddToCart;
