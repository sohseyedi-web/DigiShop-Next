import Link from "next/link";
import { HiEye, HiTrash } from "react-icons/hi2";
import { RiEdit2Line } from "react-icons/ri";
import {
  toPersianNumbersWithComma,
  toPersianNumbers,
} from "@/utils/toPersianNumbers";
import { useRemoveProduct } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";

const ProductsListRow = ({ product, index }) => {
  const { isDeleting, removeProducts } = useRemoveProduct();

  return (
    <tr key={product._id}>
      <td>{index + 1}</td>
      <td className="whitespace-nowrap font-bold">{product.title}</td>
      <td>{product.category.title}</td>
      <td>{toPersianNumbersWithComma(product.price)}</td>
      <td>{toPersianNumbers(product.discount)}</td>
      <td>{toPersianNumbersWithComma(product.offPrice)}</td>
      <td>{toPersianNumbers(product.countInStock)}</td>
      <td className="font-bold text-lg">
        <div className="flex items-center gap-x-4">
          <Link href={`/admin/products/${product._id}`}>
            <HiEye className="text-blue-900 w-6 h-6" />
          </Link>
          <button onClick={() => removeProducts(product._id)}>
            {isDeleting ? (
              <Loading />
            ) : (
              <HiTrash className="text-rose-600 w-6 h-6" />
            )}
          </button>
          <Link href={`/admin/products/edit/${product._id}`}>
            <RiEdit2Line className="w-6 h-6 text-gray-800" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ProductsListRow;
