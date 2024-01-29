import { useGetProducts } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import Table from "@/ui/Table";
import ProductsListRow from "./ProductsListRow";
import { productListTableTHeads } from "@/constants/tableHeads";

const ProductsListTabel = () => {
  const { products, isLoading } = useGetProducts();

  if (isLoading) return <Loading />;
  if (!products?.length) return <p>محصولی ایجاد نکردید</p>;

  return (
    <Table>
      <thead>
        <tr className=" text-gray-800">
          {productListTableTHeads.map((item) => (
            <th key={item.id}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products?.map((product, index) => (
          <ProductsListRow key={product._id} index={index} product={product} />
        ))}
      </tbody>
    </Table>
  );
};

export default ProductsListTabel;
