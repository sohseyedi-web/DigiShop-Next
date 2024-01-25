import { SiRobotframework } from "react-icons/si";
import { HiEye } from "react-icons/hi2";
import queryString from "query-string";
import CategorySidebar from "./CategorySidebar";
import { getProducts } from "@/services/productServices";
import { getCategory } from "@/services/categoryServices";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import Link from "next/link";
import AddToCart from "./AddToCart";
import { cookies } from "next/dist/client/components/headers";
import LikeProduct from "./LikeProduct";
import { toStringCookies } from "@/utils/toStringCookies";

export const dynamic = "force-dynamic";

export default async function Products({ searchParams }) {
  const cookiesStore = cookies();
  const strCookies = toStringCookies(cookiesStore);
  const getAllProduct = getProducts(
    queryString.stringify(searchParams),
    strCookies
  );
  const getCategories = getCategory();

  const [{ products }, { categories }] = await Promise.all([
    getAllProduct,
    getCategories,
  ]);

  return (
    <>
      {/* <HeaderLayout /> */}
      <div className="grid grid-cols-4">
        <CategorySidebar categories={categories} />
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {products?.map((product) => (
            <div
              className="shadow rounded border border-gray-400 p-1"
              key={product._id}
            >
              <div className="w-full h-[150px] text-white bg-indigo-600 rounded flex items-center justify-center gap-x-2">
                <SiRobotframework size={32} />
                <span className="text-2xlfont-bold">دیجی شاپ</span>
              </div>
              <h4 className="my-2 text-xl font-bold">{product.title}</h4>
              <div className="my-3">
                <span>تاریخ ساختن: </span>
                <span className="font-bold">
                  {toLocalDateStringShort(product.createdAt)}
                </span>
              </div>
              <div className="flex items-center my-1 w-1/3">
                <AddToCart productId={product._id} />
                <div className="flex items-center gap-x-3">
                  <LikeProduct product={product} />
                  <Link
                    className="w-[45%] h-[45px] btn btn-secondary text-center"
                    href={`/products/${product.slug}`}
                  >
                    <HiEye className="text-blue-800 w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
