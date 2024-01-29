import Link from "next/link";
import { HiEye, HiTrash } from "react-icons/hi2";
import { RiEdit2Line } from "react-icons/ri";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useRemoveProduct } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import { useState } from "react";
import Modal from "@/ui/Modal";
import EditProduct from "./EditProduct";

const ProductsListRow = ({ product, index }) => {
  const { isDeleting, removeProducts } = useRemoveProduct();
  const [isEdit, setIsEdit] = useState(false);

  return (
    <tr key={product._id}>
      <td>{index + 1}</td>
      <td className="whitespace-nowrap font-bold">{product.title}</td>
      <td>{product.category.title}</td>
      <td>{toPersianNumbersWithComma(product.price)}</td>
      <td>{toPersianNumbersWithComma(product.discount)}</td>
      <td>{toPersianNumbersWithComma(product.offPrice)}</td>
      <td>{toPersianNumbersWithComma(product.countInStock)}</td>
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
          <button onClick={() => setIsEdit(true)} className="text-indigo-800">
            <RiEdit2Line size={25} />
          </button>
          <Modal
            onClose={() => setIsEdit(false)}
            open={isEdit}
            title={"ویرایش محصول "}
          >
            <EditProduct id={product._id} onClose={() => setIsEdit(false)} />
          </Modal>
        </div>
      </td>
    </tr>
  );
};

export default ProductsListRow;
