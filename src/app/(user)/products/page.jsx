import HeaderLayout from "@/components/HeaderLayout";

import CategorySidebar from "./CategorySidebar";
import { getProducts } from "@/services/productServices";
import { getCategory } from "@/services/categoryServices";

export default async function Products() {
  const { products } = await getProducts();
  const { categories } = await getCategory();

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
