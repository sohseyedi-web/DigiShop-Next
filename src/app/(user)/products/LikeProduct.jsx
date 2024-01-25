"use client";
import { productLiked } from "@/services/productServices";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import * as RiICon from "react-icons/ri";

const LikeProduct = ({ product }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const likeHandler = async() => {
    try {
      const { message } = await productLiked(product._id);
      toast.success(message);
      router.refresh(pathname + "?" + searchParams.toString());
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };


  return (
    <button onClick={likeHandler} className="w-[45%] h-[45px] btn btn-neutral">
      {product.isLiked ? (
        <RiICon.RiHeart3Fill className="w-6 h-6" />
      ) : (
        <RiICon.RiHeart3Line className="w-6 h-6" />
      )}
    </button>
  );
};

export default LikeProduct;
