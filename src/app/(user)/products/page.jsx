import HeaderLayout from "@/components/HeaderLayout";
import queryString from "query-string";
import CategorySidebar from "./CategorySidebar";
import { getProducts } from "@/services/productServices";
import { getCategory } from "@/services/categoryServices";

export const dynamic = "force-dynamic";

export default async function Products({ searchParams }) {
  const getAllProduct = getProducts(queryString.stringify(searchParams));
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
            <div className="font-bold shadow-md p-4" key={product?._id}>
              {product.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
