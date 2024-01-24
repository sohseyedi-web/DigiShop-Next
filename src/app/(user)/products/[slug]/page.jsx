import { getProducts, getProductBySlug } from "@/services/productServices";
import { toPersianNumbers, toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import AddToCart from "../AddToCart";

export const dynamic = "force-static";
export const dynamicParams = false;

const Product = async ({ params }) => {
  const { slug } = params;
  const { product } = await getProductBySlug(slug);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">{product.title}</h1>
      <p className="mb-6">{product.description}</p>
      <p className="mb-6">
        قیمت محصول :{" "}
        <span className={`${product.discount ? "line-through" : "font-bold"}`}>
          {toPersianNumbersWithComma(product.price)}
        </span>
      </p>
      {!!product.discount && (
        <div className="flex items-center gap-x-2 mb-6">
          <p className="text-xl font-bold">
            قیمت با تخفیف : {toPersianNumbersWithComma(product.offPrice)}
          </p>
          <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
            {toPersianNumbers(product.discount)} %
          </div>
        </div>
      )}
      <AddToCart productId={product._id} />
    </div>
  );
};

export default Product;

export async function generateStaticParams() {
  const { products } = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}
