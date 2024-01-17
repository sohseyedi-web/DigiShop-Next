import { useRemoveCategory } from "@/hooks/useCategories";
import { useGetProducts } from "@/hooks/useProducts";
import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";
import Loading from "@/ui/Loading";
import { useState } from "react";
import Modal from "@/ui/Modal";
import EditCategory from "./EditCategory";

const CategoryItem = ({ item }) => {
  const { removeCategories, isDeleting } = useRemoveCategory();
  const { products } = useGetProducts();
  const [isEdit, setIsEdit] = useState(false);

  const hasCategoryProduct = products?.filter(
    (product) => product.category?.title === item?.title
  );

  const handleRemoveCategory = () => {
    if (hasCategoryProduct?.length) {
      toast.error("محصولی با این دسته بندی فعال است");
    } else {
      removeCategories(item?._id, {
        onSuccess: () => toast.success("پروژه با موفقیت حذف شد"),
      });
    }
  };

  return (
    <div
      className="lg:w-[24%] flex items-center justify-between h-[45px] md:w-[45%] w-full md:mx-0 mx-auto rounded-md bg-slate-200 shadow border px-2 py-1"
      key={item?._id}
    >
      <h6 className="text-lg font-semibold">{item?.title}</h6>
      <div className="flex items-center gap-x-4">
        <button onClick={() => setIsEdit(true)} className="text-indigo-800">
          <RiIcon.RiEdit2Line size={25} />
        </button>
        <Modal
          onClose={() => setIsEdit(false)}
          open={isEdit}
          title={"ویرایش دسته بندی"}
        >
          <EditCategory id={item?._id} onClose={() => setIsEdit(false)}/>
        </Modal>
        <button onClick={handleRemoveCategory} className="text-red-500">
          {isDeleting ? <Loading /> : <RiIcon.RiDeleteBin2Line size={25} />}
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
